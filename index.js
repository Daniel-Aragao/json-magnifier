import { readFileSync } from 'fs';
import jsonQuery from 'json-query';

let path="";
let query="";
let count = false;

process.argv.forEach((val, index) => {
    if(index > 1){
        if(val.startsWith("q=")) {
            query=val.split("=")[1];
        } else if(val.startsWith("p=") && !path){
            path=val.split("=")[1];
        } else if("count") {
            count = true;
        } else {
            throw "Acceped arguments: q=<query>, p=<path>, count"
        }
    }
});

const data = readFileSync(path, 'utf8');

let result = jsonQuery(query, {data: JSON.parse(data)}).value;

if(count && Array.isArray(result)) {
    
    function addOrCount(obj, key) {
        if(!obj.hasOwnProperty(key)) {
            obj[key] = 0;
        }

        obj[key]++;
    }
    
    result = result.reduce((prev, current) => {
        if(typeof current === 'object') {
            for(let key in current) {
                addOrCount(prev, key);
            }
        } else {
            addOrCount(prev, current);
        }

        return prev;
    }, {});
}

console.log(JSON.stringify(result, undefined, 2));
