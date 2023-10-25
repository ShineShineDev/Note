### Spread operators

- `Useful for Concatenate, Copying,  `

- `The spread operator has the same syntax as the rest parameter`

  ```js
  let arr1 = [1,2,3];arr2 = [4,5,6]
  
  let arrayCopy = [...arr1] // copy in array
  
  let concate1 = arr1.concat(arr2) // merge with concate method in array
  let mergeAndCoy1 = [...arr1,...arr2]  // merge and copy with spread operator in array
  let  mergeAndCoy2 = [...arr1,7,8,9,...arr2]
  // for a large data set it will work slower as when compared to the native concat() method.
  
  
  let obj1 = { nane: "Julian", age: 23, work: 'dev'};
  let obj2 = { nane: "Wailian", age: new Date().getFullYear() - 1998, work: 'devs'};
  
  let objCopy = {...obj1} //copy in Object
  let mergeAndCoyObj = {...obj1,...obj2} // merge and copy in Object
  
  // to copy object we can use  Object.assign({}, obj) 
  let copyObj2 = Object.assign({}, obj1) 
  ```



