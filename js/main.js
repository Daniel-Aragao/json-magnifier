let fileInput = undefined;
let loadedData = undefined;
let inputData = undefined;
let visibleHistory = false;

const QUERY_HISTORY = "QUERY_HISTORY";
const QUERY_HISTORY_LIMIT = 100;
const LAST_QUERY = "LAST_QUERY";
const LAST_QUERY_COUNT = "LAST_QUERY_COUNT";
const LAST_QUERY_JSON = "LAST_QUERY_COUNT_JSON";

function runCode() {
    try {
        saveLastQuery();
        addToHistory();
        inputData = JSON.parse(data.value || fileInput);

        loadedData = magnifier.runQuery(data.value || fileInput, query.value, {
            count: toCount.checked,
        });

        result.innerText = JSON.stringify(loadedData, undefined, 2);
        updateInfo();
        updateHistoryContainer();
    } catch (e) {
        result.innerText = "Error running query";
        console.error(e);
    }
}

function saveLastQuery() {
    localStorage.setItem(LAST_QUERY, query.value);
    localStorage.setItem(LAST_QUERY_COUNT, toCount.checked);
    localStorage.setItem(LAST_QUERY_JSON, data.value);
}

function loadLastQuery() {
    query.value = localStorage.getItem(LAST_QUERY);
    toCount.checked = localStorage.getItem(LAST_QUERY_COUNT) === "true";
    data.value = localStorage.getItem(LAST_QUERY_JSON);
}

function loadFile() {
    try {
        const badjson = JSON.parse(fileInput);
        data.value = JSON.stringify(badjson, undefined, 2);
    } catch (e) {
        data.value = "Error parsing JSON file";
        console.error(e);
    }
}

function reset() {
    data.value = "";
    result.innerText = "";
    query.value = "";
    toCount.checked = false;
    jsonFile.value = "";
    loadFile.disabled = true;
    fileInput = undefined;

    if (uploadFile.classList.contains("positiveHightlight")) {
        uploadFile.classList.remove("positiveHightlight");
    }
}

function copy() {
    if (result.innerText?.trim()) {
        navigator.clipboard.writeText(result.innerText);
        const btn = document.getElementsByClassName("copyButton")[0];

        btn.classList.add("positiveHightlight");

        setTimeout(() => {
            btn.classList.remove("positiveHightlight");
        }, 1000);
    }
}

function showInfo(btn) {
    if (hiddenInfoContainer.classList.contains("hidden")) {
        hiddenInfoContainer.classList.remove("hidden");
        updateInfo();
        btn.classList.add("pressed");
    } else {
        btn.classList.remove("pressed");
        hiddenInfoContainer.classList.add("hidden");
    }
}

function beautifyData() {
    try {
        const pretty = JSON.parse(data.value);
        data.value = JSON.stringify(pretty, undefined, 2);
    } catch {
        showQuickMessage("Invalid JSON");
    }
}

function showQuickMessage(txt) {
    const quickMessage = document.getElementsByClassName("quickMessage")[0];
    quickMessage.innerText = txt;

    setTimeout(() => (quickMessage.innerText = ""), 1500);
}

function updateInfo() {
    if (
        Array.isArray(loadedData) ||
        (loadedData && toCount.checked) ||
        Array.isArray(inputData)
    ) {
        const info = { resultSize: "N/A", inputSize: "N/A" };

        if (Array.isArray(loadedData)) {
            info.resultSize = loadedData.length;
        } else if (loadedData && toCount.checked) {
            let acc = 0;

            for (let i in loadedData) {
                acc += loadedData[i];
            }

            info.resultSize = acc;
        }
        if (Array.isArray(inputData)) {
            info.inputSize = inputData.length;
        }
        hiddenInfo.innerText = JSON.stringify(info, undefined, 2);
    } else {
        hiddenInfo.innerText = "Information only available for lists";
    }
}

////////////////////////////
//////// Bootstrap /////////
////////////////////////////

(() => {
    document.getElementById("jsonFile").addEventListener("change", function () {
        var fr = new FileReader();
        fr.onload = function () {
            fileInput = fr.result;
            loadFile.disabled = false;

            if (!uploadFile.classList.contains("positiveHightlight")) {
                uploadFile.classList.add("positiveHightlight");
            }
        };

        fr.readAsText(this.files[0]);
    });

    loadLastQuery();
})();
