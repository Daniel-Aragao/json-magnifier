# Json magnifier

This projects purpose is to provide a simple script to run queries on json files without the need of using untrustworthy websites. It can also be hosted as a web project

> The project might also be found in [web version](https://daniel-aragao.github.io/json-magnifier/)

## Dependencies

* json-query@^2.2.2

## Web version

<link rel="stylesheet" href="readme-style.css">

This version will feature:  

* "**Query...**" field allows JSON-query inputs
* "**Data...**" where JSON can be pasted to be queried
* <img src="./icons/play.png" class="iconReadme"/> will run the query
* "**Results...**" I will leave this up for your imagination
* "**Count**" will group the results attributes in a single object with a added counter

* <img src="./icons/file.png" class="iconReadme"/> Load JSON or Excel files
  * Files can be queried directly after loading it but pressing <img src="./icons/play.png" class="iconReadme"/>
  * The file will be ignored if the "**Data...**" field is not empty
* <img src="./icons/edit.png" class="iconReadme"/> Edit the loaded file
  * This prevent heavy files to slowdown the browser if automatically loading, it might not help for heavy excel files.
* <img src="./icons/csvfile.png" class="iconReadme"/> Convert from CSV to JSON
  * The delimiter will be prompt
* <img src="./icons/tabledb.png" class="iconReadme"/> Convert from table to JSON
  * For tables the "\t" delimiter is automatically set
* <img src="./icons/magic-wand.png" class="iconReadme"/> Beautify the "**Data...**" JSON text
* <img src="./icons/copy.png" class="iconReadme"/> Copy the "**Data..**." or "**Results...**" text to the clipboard
* <img src="./icons/information.png" class="iconReadme"/> Reveal the results json utility information if available
* <img src="./icons/clock.png" class="iconReadme"/> Reveal previous results/runs
* <img src="./icons/reset.png" class="iconReadme"/> Reset all the fields to its original state

> Be aware that large files may cause your browser to slowdown and may not be suited for editing. In this case if using a list you can first query by "[1]" to filter a single item to help you build the query

<details>
  <summary>Old samples</summary>

* Guide
  ![guide](/misc/imgs/guide.png)

* Sample of query
  ![guide](/misc/imgs/sample%201.png)
* Sample of `Count`
  ![guide](/misc/imgs/sample%202.png)

</details>

### Excel

To work with Excel, the sheet **header** and **start-line** need to be informed

<details>
  <summary> Examples </summary>

* **A** / **0**
  |   | A | B | C | D | E | F |
  |---|---|---|---|---|---|---|
  | 1 | h | e | a | d | e | r |
  | 2 | i | t | e | m | - | 1 |
  | 3 | i | t | e | m | - | 2 |
  | 4 | i | t | e | m | - | 3 |

* **B** / **0**
  |   | A | B | C | D | E | F | G |
  |---|---|---|---|---|---|---|---|
  | 1 |   | h | e | a | d | e | r |
  | 2 |   | i | t | e | m | - | 1 |
  | 3 |   | i | t | e | m | - | 2 |
  | 4 |   | i | t | e | m | - | 3 |

* **B** / **1**
  |   | A | B | C | D | E | F | G |
  |---|---|---|---|---|---|---|---|
  | 1 |   |   |   |   |   |   |   |
  | 2 |   | h | e | a | d | e | r |
  | 3 |   | i | t | e | m | - | 1 |
  | 4 |   | i | t | e | m | - | 2 |
  | 5 |   | i | t | e | m | - | 3 |

</details>

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

### :sum

The informed keys will be added and the result will be an object with the added numbers per key

```text
:sum(mass, height)
```

```JSON
{
  "mass": 320,
  "height": 637
}
```


## Credits

* [SWAPI](https://swapi.dev/) for the data used  
