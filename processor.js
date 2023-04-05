import jsonQuery from 'json-query';

function addOrCount(obj, key) {
    if(!obj.hasOwnProperty(key)) {
        obj[key] = 0;
    }

    obj[key]++;
}

export function runQuery(data, query, args) {
    let result = jsonQuery(query, {data: JSON.parse(data)}).value;
    
    if(args.count && Array.isArray(result)) {
        
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

    return result;
}