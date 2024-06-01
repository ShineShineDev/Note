file:///C:/Users/shine%20shine/Downloads/express%20lession/How%20to%20make%20input%20validation%20simple%20and%20clean%20in%20your%20Express.js%20app.html





 ##                                                                                                                                                                                User Input Validation

> `You should never just trust data which is is sent in a request to your API as it could easily contain mistakes, or worse it might contain malicious data which has been crafted by an attacker in an attempt to crash your application or steal data. This means that you should always validate any data which is sent to your API before you do anything else with it e.g. store it in a database.`
>
> `There are many ways to validate data in Node.js like` **`express-validtor` ** ,**`express-json-validator-middleware`** `and so on`



## express-validator

-  `express-validator is a set ofexpress.js middlewares that wraps` [validator.js](https://github.com/chriso/validator.js) `validator and sanitizer functions.`
- `The module implements five important API’s:`
  - `Check API`
  - `Filter API`
  - `Sanitization chain API`
  - `Validation chain API`
  - `Validation Result API`



#### Installation

- `Install it using npm (make sure that you have Node.js 8 or newer):`

  ```shell
  npm install --save express-validator
  ```



#### Include **module** 

- `Include module in your app`

  ```js
  const expressValidator = require('express-validator')
  app.use(expressValidator())
  // alternative 
const { body, validationResult  } = require('express-validator')
  ```
  
  

####  Simple validation 

- `let's make basic Simple validation `

  ```js
  const { body, validationResult } = require('express-validator'); // to handle incoming input 
  app.post('/login',
           body('username').notEmpty(),
           body('password').isLength({ 
              min: 6  
           }),
           (req, res) => {
               const errors = validationResult(req);
               if (!errors.isEmpty()) {
                   console.log(errors.array());
                   return res.status(400).json({
                       success: false,
                       errors: errors.array()
                   });
               }
               res.status(200).json({
               success: true,
               message: 'Login successful',
           })
      });
  ```

  



#### Schema Validation

- `Schema validation offers a cleaner approach to validating data. Instead of calling numerous functions, we specify the validation rules for each field and pass the schema into a single middleware function called` **`checkSchema()`**.

  ```js
  const {body, checkSchema, validationResult} = require('express-validator');
  
  const registrationSchema = {
      // username validation 
      username: {
          custom: {
              options: value => {
                  return User.find({
                      username: value
                  }).then(user => {
                      if (user.length > 0) {
                          return Promise.reject('Username already in use')
                      }
                  })
              }
          }
      },
      // gender validation 
      gender: {
          notEmpty: true,
          errorMessage: "Gender field cannot be empty"
      },
      // password validation 
      password: {
          isStrongPassword: {
              minLength: 8,
              minLowercase: 1,
              minUppercase: 1,
              minNumbers: 1
          },
          errorMessage: "Password must be greater than 8 and contain at least one uppercase letter, one lowercase letter, and one number",
      },
      // phone validation 
      phone: {
          notEmpty: true,
          errorMessage: "Phone number cannot be empty"
      },
      // email validation 
      email: {
          normalizeEmail: true,
          custom: {
              options: value => {
                  return User.find({
                      email: value
                  }).then(user => {
                      if (user.length > 0) {
                          return Promise.reject('Email address already taken')
                      }
                  })
              }
          }
      }
  }
  
  app.post('/signup', checkSchema(registrationSchema), (req, res) => {
      // Validate incoming input
      const errors = validationResult(req);
  
      if (!errors.isEmpty()) {
          return res.status(400).json({
              errors: errors.array()
          });
      }
  
      res.status(200).json({
          success: true,
          message: 'Registration successful',
      });
  })
  ```





#### Validator methods

- **`isEmail()`** : `This validator function checks if the incoming string is a valid email address.`
- **`isLength()`**: `This validator checks if the length of a string falls in a specified range. In our case, the range specified is a minimum of 6 characters.`
- **`isNumeric()`** - `Checks if the input is numeric`
- **`contains()`** - `Checks if the input contains a certain value`
- **`isBoolean()`** - `Check is the input is a boolean value`
- **`isCurrency()`** - `Checks if the input is currency-formatted`
- **`isJSON()`** - `Checks if the input is JSON`
- **`isMobilePhone()`** - `Checks is the input is a valid mobile phone number`
- **`isPostalCode()`** - `Checks if the input is a valid postal code`
- **`isBefore()`** and **`isAfter()`** - `Checks if a date is before or after another date`





## Simple Validation example  

```js
const express = require('express')  // lightweight web application framework 

const bodyParser = require('body-parser'); // for parse incoming user inputs to the req.body object

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

const { body, validationResult } = require('express-validator'); // to handle incoming input validation.
// show login form
app.get('/',(req,res)=>{
    res.send(`<div style="position:absolute;top:20%;left:40%;"><form style="padding:10px;border : 1px solid #002ead;" method="post" action="/login">
               <h5 class='text-center text-info mb-3 mt-1 p-2'>Login</h5>
               <input type="text" name='username' placeholder="Username"/> <br><br>
               <input type="password" name='password' placeholder="Password" /> <br><br>
               <input type="submit" value='login' class='btn btn-info mt-0'/>
            </form><div> 
    `)
})
// route for loging
app.post('/login',
         body('username').notEmpty(),
         body('password').isLength({ 
            min: 6  
         }),
         (req, res) => {
             const errors = validationResult(req);
             if (!errors.isEmpty()) {
                 console.log(errors.array());
                 return res.status(400).json({
                     success: false,
                     errors: errors.array()
                 });
             }
             res.status(200).json({
             success: true,
             message: 'Login successful',
         })
    });

app.listen(8000, (err)=> {   
    if(err) return  console.log(err.message);
  console.log('Sever running on port:%s',8000);  
});  
```





## Simple Schema Validation

```js
const express = require('express')  // lightweight web application framework 

const bodyParser = require('body-parser'); // for parse incoming user inputs to the req.body object

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

const {body, checkSchema, validationResult} = require('express-validator');


// show login form
app.get('/',(req,res)=>{
    res.send(`<div style="position:absolute;top:20%;left:40%;"><form style="padding:10px;border : 1px solid #002ead;" method="post" action="/login">
               <h5 class='text-center text-info mb-3 mt-1 p-2'>Login</h5>
               <input type="text" name='username' placeholder="Username"/> <br><br>
               <input type="password" name='password' placeholder="Password" /> <br><br>
               <input type="submit" value='login' class='btn btn-info mt-0'/>
            </form><div> 
    `)
})
const loginSchema = {
    // username validation 
    username: {
        notEmpty: true,
        errorMessage: "Username field cannot be empty"
    },
    // password validation 
    password: {
        isStrongPassword: {
            minLength: 8,
            minLowercase: 1,
            minUppercase: 1,
            minNumbers: 1
        },
        errorMessage: "Password must be greater than 8 and contain at least one uppercase letter, one lowercase letter, and one number",
    },
}

app.post('/login', checkSchema(loginSchema), (req, res) => {
    // Validate incoming input
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        });
    }

    res.status(200).json({
        success: true,
        message: 'Registration successful',
    });
})

app.listen(8000, (err)=> {   
    if(err) return  console.log(err.message);
  console.log('Sever running on port:%s',8000);  
});  
```







## express-json-validator-middleware

> [how you can get it integrated and validating your requests in no time](https://simonplend.com/how-can-you-handle-request-validation-in-your-express-based-api/)!*





### How to make input validation simple and clean in your Express.js app



