## Json

- `JSON is a syntax for storing and exchanging data.`
- `JSON is text, written with JavaScript object notation.`
- `Python has a built-in package called `json`, which can be used to work with JSON data.`







### Convert from JSON to Python

- `If you have a JSON string, you can parse it by using the `**`json.loads()`** `method.`

  ```python
  import json
  
  # some JSON:
  x =  '{ "name":"John", "age":30, "city":"New York"}'
  
  # parse x:
  y = json.loads(x)
  
  # the result is a Python dictionary:
  print(y["age"])
  ```

  







### Convert from Python to JSON

- `If you have a Python object, you can convert it into a JSON string by using the `**`json.dumps()`** `method.`

  ```python
  import json
  
  # a Python object (dict):
  x = {
    "name": "John",
    "age": 30,
    "city": "New York"
  }
  
  # convert into JSON:
  y = json.dumps(x)
  
  # the result is a JSON string:
  print(y)
  ```







### Format the Result

- `The`**`json.dumps()`** `method has parameters to make it easier to read the result`

- `Use the` **`indent`** `parameter to define the numbers of indents`

- `You can also define the separators, default value is (", ", ": "), which means using a comma and a space to separate each object, and a colon and a space to separate keys from values`

  ```python
  json.dumps(x, indent=4)
  json.dumps(x, indent=4, separators=(". ", " = "))
  ```

  







### Convert a Python object containing all the legal data types:

- `You can convert Python objects of the following types, into JSON strings`

  - `dict`

  - `list`

  - `tuple`

  - `string`

  - `int`

  - `float`

  - `True`

  - `False`

  - `None`

    ```python
    import json
    
    print(json.dumps({"name": "John", "age": 30}))
    print(json.dumps(["apple", "bananas"]))
    print(json.dumps(("apple", "bananas")))
    print(json.dumps("hello"))
    print(json.dumps(42))
    print(json.dumps(31.76))
    print(json.dumps(True))
    print(json.dumps(False))
    print(json.dumps(None))
    
    
    x = {
      "name": "John",
      "age": 30,
      "married": True,
      "divorced": False,
      "children": ("Ann","Billy"),
      "pets": None,
      "cars": [
        {"model": "BMW 230", "mpg": 27.5},
        {"model": "Ford Edge", "mpg": 24.1}
      ]
    }
    
    print(json.dumps(x))
    ```

    