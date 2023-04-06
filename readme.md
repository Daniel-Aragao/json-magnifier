# Json magnifier

This projects purpose is to provide a simple script to run queries on json files without the need of using unknown websites. It can also be hosted as a web project

> The project might also be found in [web version](https://daniel-aragao.github.io/json-magnifier/)  

## Dependencies

* json-query@^2.2.2

## Run

* npm i
* Open the terminal and execute:

```bash
npm start p="<path-to-json>" q="<query>" count
```

## Arguments

| Argument | Description |
|---|---|
| `p=` | The path to the json file |
| `q=` | The query based on [json-query](https://www.npmjs.com/package/json-query) documentation |
| `count` | To run a count over the query results |

## Observations

* `count` was added to count list items and will work when the results of the query is a  
  * string list  
    * object list, picking up its keys  
