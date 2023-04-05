import { readFileSync } from 'fs';
import {runQuery} from './processor.js';

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

let result = runQuery(data, query, {count: count});

console.log(JSON.stringify(result, undefined, 2));
