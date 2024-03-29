let fileInput = undefined;
let loadedData = undefined;
let inputData = undefined;
let visibleHistory = false;

const QUERY_HISTORY = "QUERY_HISTORY";
const QUERY_HISTORY_LIMIT = 100;
const LAST_QUERY = "LAST_QUERY";
const LAST_QUERY_COUNT = "LAST_QUERY_COUNT";
const LAST_QUERY_JSON = "LAST_QUERY_COUNT_JSON";
const UI_DELAY = 2000;

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
        showQuickMessage("Error running query")
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
    result.innerText = "Results...";
    query.value = "";
    toCount.checked = false;
    jsonFile.value = "";
    loadFileBtn.disabled = true;
    fileInput = undefined;

    if (uploadFile.classList.contains("positiveHightlight")) {
        uploadFile.classList.remove("positiveHightlight");
    }
}

function copy(btn, field) {
    const text = field.innerText || field.value;
    if (text?.trim()) {
        navigator.clipboard.writeText(text);

        btn.classList.add("positiveHightlight");

        setTimeout(() => {
            btn.classList.remove("positiveHightlight");
        }, UI_DELAY);
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
        let fileReader = new FileReader();
        let file = this.files[0];
        let isSheet = false;

        fileReader.onload = function () {
            if(isSheet) {
                fileInput = convertFromExcel(fileReader.result);
            } else {
                fileInput = fileReader.result;
            }

            loadFileBtn.disabled = false;

            if (!uploadFile.classList.contains("positiveHightlight")) {
                uploadFile.classList.add("positiveHightlight");
            }
        };

        if(file.type === 'application/vnd.ms-excel' || file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
            isSheet = true;
            fileReader.readAsArrayBuffer(file)
        } else {
            fileReader.readAsText(file);
        }
    });

    loadLastQuery();
})();
