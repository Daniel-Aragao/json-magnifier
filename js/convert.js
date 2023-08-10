function beautifyData() {
    try {
        const pretty = JSON.parse(data.value);
        data.value = JSON.stringify(pretty, undefined, 2);
    } catch {
        showQuickMessage("Invalid JSON");
    }
}

function convertTableToJson(delimiter = "\t") {
    try {
        if(data.value.includes(delimiter)) {
            showQuickMessage("Using delimiter: " + (delimiter === "\t" ? "tab": delimiter))
            const pretty = tableStringToJson(data.value, delimiter);
            data.value = JSON.stringify(pretty, undefined, 2);
        } else {
            showQuickMessage("Invalid table");
        }
    } catch {
        showQuickMessage("Invalid table");
    }
}

function convertFromCSV() {
    let delimiter = prompt("Delimiter", ",");

    if(data.value.includes(delimiter)) {
        convertTableToJson(delimiter);
    } else {
        showQuickMessage("Invalid Delimiter: " + delimiter);
    }
}