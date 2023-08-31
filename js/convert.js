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
    let delimiter = promptUser("Delimiter", ",");

    if(delimiter) {
        if(data.value.includes(delimiter)) {
            convertTableToJson(delimiter);
        } else {
            showQuickMessage("Invalid Delimiter: " + delimiter);
        }
    }
}

function convertFromExcel(fileArrayBuffer) {
    try{
        let workbook = xlsx.read(fileArrayBuffer);
        let sheets = workbook?.Sheets

        let firstHeader = Number(promptUser("Header first column", "A"));
        let firstLine = Number(promptUser("First line", 0));

        let options = {header: firstHeader, raw: false, range: firstLine, defval: ''};

        let result = workbook.SheetNames.reduce((result, sheetName) => {
            result[sheetName] = xlsx.utils.sheet_to_json(sheets[sheetName], options)
            return result;
        }, {});

        return JSON.stringify(result);
    } catch(e) {
        showQuickMessage("Invalid sheet");
    }
}
