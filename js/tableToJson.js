function tableStringToJson(tableStr, delimiter) {
    let result = [];

    let lines = tableStr.split("\n").map(line => line.split(delimiter));

    let head = lines[0];

    for(let i = 1; i < lines.length; i++) {
        let line = lines[i];

        let entry = {}

        line.forEach((cell, i) => {
            entry[head[i]] = cell;
        });

        result.push(entry);
    }

    return result;
}