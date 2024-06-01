## Lambda

- `A lambda function is a small anonymous function.`

- `The power of lambda is better shown when you use them as an anonymous function inside another function.`







### Create Lambda or Anonymous  Function 

- `A lambda function can take any number of arguments, but can only have one expression.`

- `Syntax : lambda arguments : expression`

  ```python
  add = lambda a,b : a + b
  print(add(1,3))
  ```

  





### Anonymous function inside another function

```python
def multiplied(n):
    return lambda a : a * n

call = multiplied(2)

print(call(2))
```



