## Schema Validation

> **Schemas** `are a special, object-based way of defining validations or sanitizations on requests`



### Hapi Joi

- **`Hapi Joi`** `is an object schema description language and validator for JavaScript objects. `
- `With` **`Hapi Joi`**, `we create blueprints or schemas for JavaScript objects (an object that stores information) to ensure validation of key information.`
- `It’s easy to get started, easy to use. widely used and popular module for data validation`





#### Install

```js
$ npm i @hapi/joi //install
$ npm ls @hapi/joi //check version
```



#### Requiring module

```js
const joi = require('@hapi/joi')
```



#### Create Validation Schema

```js
// User validation schema
    const JoiSchema = Joi.object({
        username: Joi.string()                  
                     .min(5)
                     .max(30)
                     .required(),
                    
        email: Joi.string()
                  .email()
                  .min(5)
                  .max(50)
                  .optional(), 
                 
        date_of_birth: Joi.date()
                          .optional(),
                         
        account_status: Joi.string()
                           .valid('activated')
                           .valid('unactivated')
                           .optional(),
    }).options({ abortEarly: false });
```



#### Validate

```js
const result = JoiSchema.validate(user)
// check error
if(result.error){ 
    console.log(result.error.details)
}else{
    console.log("Validated Data")
}
```





### Example

```js
// User validation functoin
function validateUser(user){
    // User validation schema
    const JoiSchema = Joi.object({
        username: Joi.string()                  
                     .min(5)
                     .max(30)
                     .required(),
                    
        email: Joi.string()
                  .email()
                  .min(5)
                  .max(50)
                  .optional(), 
                 
        date_of_birth: Joi.date()
                          .optional(),
                         
        account_status: Joi.string()
                           .valid('activated')
                           .valid('unactivated')
                           .optional(),
    }).options({ abortEarly: false });
    // return validatoin
    return JoiSchema.validate(user)
}

//input
const user = {
    username: 'Pritish',
    email: 'pritish@gmail.com',
    date_of_birth: '2020-8-11',
    account_status: 'activated'
}
  
// validate
response = validateUser(user)
  
// check error
if(response.error){ 
    console.log(response.error.details)
}else{
    console.log("Validated Data")
}
```



