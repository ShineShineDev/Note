## Loops

> `used to repeatedly run a set of instruction while a given condition is true or false`
>
> `Python has two primitive loop commands`
>
> - `For loop`
> - `While loop` 





###  while Loop

- `The while loop requires relevant variables to be ready`

- `You must be increment relevant variables, or else the loop will continue forever.`

  ```python
  lst = ['one','two','three']
  i = 0 # init 
  while i < len(lst):
     print(lst[i])
     i+= 1 #increment relevant variables,
  ```

  







### The break Statement

- `With the break statement we can stop the loop even if the while condition is true`

  ```python
  i = 1
  while i < 6:
    print(i)
    if i == 3:
      break
    i += 1
  ```

  







### The continue Statement

- `With the continue statement we can stop the current iteration, and continue with the next`

  ```python
  i = 0
  while i < 6:
    i += 1
    if i == 3:
      continue
    print(i)
  ```

  





### The else Statement

- `With the else statement we can run a block of code once when the condition no longer is true`

  ```python
  i = 0
  while i < 6:
     print(i)
     i += 1
  else:    
     print('Finished!')
  ```

  