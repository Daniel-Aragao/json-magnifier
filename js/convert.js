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
        showQuickMessage("Using delimiter: " + (delimiter === "\t" ? "tab": delimiter))
        const pretty = tableStringToJson(data.value, delimiter);
        data.value = JSON.stringify(pretty, undefined, 2);
    } catch {
        showQuickMessage("Invalid table");
    }
}

function convertFromCSV() {
    let delimter = prompt("Delimiter", ",");

    convertTableToJson(delimter);
}