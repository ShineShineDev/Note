##                                                        Model

- ` Model are fancy constructors compiled from Schema definitions. An instance of a model is called a `[document](https://mongoosejs.com/docs/documents.html). 

- `In Mongoose`, **`a document`** `generally means` **`an instance of a model`**. `You should not have to create an instance of the Document class without going through a model.`

- `Models are responsible for creating and reading documents from the underlying MongoDB database.`

- [See more](https://mongoosejs.com/docs/api/model.html#model_Model)

  
  
  



### Compiling Model

- `You can compile a model from schema with`**`mongoose.model()`**`method`.

-  `Mongoose automatically looks for the plural, lowercased version of your model name.Thus, for the example above, the` **`model Tank`** `is for the` **`tanks collection`** `in the database.`

- `This method take tow parameters `

  - `The first argument is the singular name of the collection your model `
  - `The second argument is Schema definitions`

  ```js
  const mongoose = require('mongoose');
  
  const UserSchema = new mongoose.Schema(
      {
          name: String,
          age : Number
    }
  );
  
  const UserModel = mongoose.model('Users', UserSchema);
  
  console.log(UserModel);
  
  // create doc or model instance
  const newUserDoc= new UserModel()
  
  // a document generally means an instance of a model
  newUserDoc instanceof UserModel; // true
  newUserDoc instanceof mongoose.Model; // true
  newUserDoc instanceof mongoose.Document; // true
  ```
  
  



### Create Document

```js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        name: String,
        age : Number
  }
);
const UserModel = mongoose.model('Users', UserSchema);

// create doc or model instance
const newUserDoc= new UserModel()

```









### Different Between SQL and NOSQL

| SQL     | NoSQL        |
| ------- | ------------ |
| `Table` | `Collection` |
| `Row`   | `Document`   |

