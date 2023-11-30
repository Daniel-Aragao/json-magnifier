import jsonQuery from 'json-query';

function addOrCount(obj, key) {
    if(!obj.hasOwnProperty(key)) {
        obj[key] = 0;
    }

    obj[key]++;
}

const helpers = {
    select: function (input) {
        if (Array.isArray(input)) {
          var keys = [].slice.call(arguments, 1)
          return input.map(function (item) {
            return Object.keys(item).reduce(function (result, key) {
              if (~keys.indexOf(key)) {
                result[key] = item[key]
              }
              return result
            }, {})
          })
        }
      },
      first: function (input, key) {
        if(Array.isArray(input)) {
          if(Array.isArray(input[0][key])) {
            return input.map(item => item[key][0])
          }
        }

        return input;
      },
      last: function (input, key) {
        if(Array.isArray(input)) {
          if(Array.isArray(input[0][key])) {
            return input.map(item => item[key][item[key].length - 1])
          }
        }

        return input;
      },
      sum: function (input, ...keys) {
        if(Array.isArray(input)) {
          return input.reduce((prev, current) => { 
            keys.forEach(key => {
              if(!isNaN(current[key])){
                prev[key] = prev[key] ?? 0;
                prev[key] += Number(current[key]);
              }
            });
            
            return prev;
          }, {});
        }
      }
}

export function runQuery(data, query, args) {
    let result = jsonQuery(query, {data: JSON.parse(data), locals: helpers}).value;
    
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