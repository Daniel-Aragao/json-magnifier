# Json magnifier

This projects purpose is to provide a simple script to run queries on json files without the need of using untrustworthy websites. It can also be hosted as a web project

> The project might also be found in [web version](https://daniel-aragao.github.io/json-magnifier/)

## Web version

Hosted as a github page you can

1. Load the JSON file
2. or paste the JSON data directly in the `Data...` field
3. or even edit the loaded JSON file by click one button
4. Write a query
5. Get the results by pressing `Run`
   1. If there is a large dataset been imported you can also click on `Count` to group list of strings of list of objects

> Be aware that large files may cause your browser to slowdown and may not be suited for editing. In this case if using a list you can first query by "[1]" to filter a single item to help you build the query

![guide](/misc/imgs/guide.png)

Sample of query
![guide](/misc/imgs/sample%201.png)
Sample of `Count`
![guide](/misc/imgs/sample%202.png)

Credits to [SWAPI](https://swapi.dev/) for the data used
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

## Helpers

Here are the added helpers
<details>

```JSON
[
  {
    "name": "Luke Skywalker",
    "height": "172",
    "mass": "77",
    "hair_color": "blond",
    "skin_color": "fair",
    "eye_color": "blue",
    "birth_year": "19BBY",
    "gender": "male",
    "homeworld": "https://swapi.dev/api/planets/1/",
    "films": [
      "https://swapi.dev/api/films/1/",
      "https://swapi.dev/api/films/2/",
      "https://swapi.dev/api/films/3/",
      "https://swapi.dev/api/films/6/"
    ],
    "species": [],
    "vehicles": [
      "https://swapi.dev/api/vehicles/14/",
      "https://swapi.dev/api/vehicles/30/"
    ],
    "starships": [
      "https://swapi.dev/api/starships/12/",
      "https://swapi.dev/api/starships/22/"
    ],
    "created": "2014-12-09T13:50:51.644000Z",
    "edited": "2014-12-20T21:17:56.891000Z",
    "url": "https://swapi.dev/api/people/1/"
  },
  {
    "name": "C-3PO",
    "height": "167",
    "mass": "75",
    "hair_color": "n/a",
    "skin_color": "gold",
    "eye_color": "yellow",
    "birth_year": "112BBY",
    "gender": "n/a",
    "homeworld": "https://swapi.dev/api/planets/1/",
    "films": [
      "https://swapi.dev/api/films/1/",
      "https://swapi.dev/api/films/2/",
      "https://swapi.dev/api/films/3/",
      "https://swapi.dev/api/films/4/",
      "https://swapi.dev/api/films/5/",
      "https://swapi.dev/api/films/6/"
    ],
    "species": [
      "https://swapi.dev/api/species/2/"
    ],
    "vehicles": [],
    "starships": [],
    "created": "2014-12-10T15:10:51.357000Z",
    "edited": "2014-12-20T21:17:50.309000Z",
    "url": "https://swapi.dev/api/people/2/"
  },
  {
    "name": "R2-D2",
    "height": "96",
    "mass": "32",
    "hair_color": "n/a",
    "skin_color": "white, blue",
    "eye_color": "red",
    "birth_year": "33BBY",
    "gender": "n/a",
    "homeworld": "https://swapi.dev/api/planets/8/",
    "films": [
      "https://swapi.dev/api/films/1/",
      "https://swapi.dev/api/films/2/",
      "https://swapi.dev/api/films/3/",
      "https://swapi.dev/api/films/4/",
      "https://swapi.dev/api/films/5/",
      "https://swapi.dev/api/films/6/"
    ],
    "species": [
      "https://swapi.dev/api/species/2/"
    ],
    "vehicles": [],
    "starships": [],
    "created": "2014-12-10T15:11:50.376000Z",
    "edited": "2014-12-20T21:17:50.311000Z",
    "url": "https://swapi.dev/api/people/3/"
  },
  {
    "name": "Darth Vader",
    "height": "202",
    "mass": "136",
    "hair_color": "none",
    "skin_color": "white",
    "eye_color": "yellow",
    "birth_year": "41.9BBY",
    "gender": "male",
    "homeworld": "https://swapi.dev/api/planets/1/",
    "films": [
      "https://swapi.dev/api/films/1/",
      "https://swapi.dev/api/films/2/",
      "https://swapi.dev/api/films/3/",
      "https://swapi.dev/api/films/6/"
    ],
    "species": [],
    "vehicles": [],
    "starships": [
      "https://swapi.dev/api/starships/13/"
    ],
    "created": "2014-12-10T15:18:20.704000Z",
    "edited": "2014-12-20T21:17:50.313000Z",
    "url": "https://swapi.dev/api/people/4/"
  }
]
```

</details>

### :select

Generate new objects with the selected fields

```text
:select(name)
```

```JSON
[
  {
    "name": "Luke Skywalker"
  },
  {
    "name": "C-3PO"
  },
  {
    "name": "R2-D2"
  },
  {
    "name": "Darth Vader"
  }
]
```

### :first and :last

If the informed field is an array pick the first or last item of the field

```text
:first(films)
```

```JSON
[
  "https://swapi.dev/api/films/1/",
  "https://swapi.dev/api/films/1/",
  "https://swapi.dev/api/films/1/",
  "https://swapi.dev/api/films/1/"
]
```
