##                                     Schema

- `The Schema represents a documents(table) of database.`
- ` Simply Schema creation is similar to table creation of SQL.`
- `The` **`Schema`**` allows you to` **`define`** `the` **`fields stored in each document(shape of the documents)`** `along with their` **`validation requirements and default values.`**
- **`Schemas`** `are then` **`compiled into models`** `using the` **`mongoose.model()`** `method`. `Once you have a model you can use it to find, create, update, and delete objects of the given type.`
- `You can define` **`static and instance helper methods`** `to make it easier to work with your data types, and also virtual properties that you can use like any other field, but which aren't actually stored in the database`
- `Each schema maps to a MongoDB collection and defines the shape of the documents within that collection.`
- [See More Schema](https://mongoosejs.com/docs/api/schema.html#schema_Schema)
- [See More SchemaTypes](http://mongoosejs.com/docs/schematypes.html) 







### Simple Schema Creation

- `Everything in Mongoose starts with a Schema.`

- ``Use the Schema constructor to create a` **`new schema instance`**

- `By default, Mongoose adds an `**`_id`** `property to your schemas.But you can also overwrite Mongoose's default _id with your own _id. `

- `To use our schema definition, we need to convert our blogSchema into a Model `

  ```js
  const mongoose = require('mongoose');
  
  const PostSchema = new mongoose.Schema({
      title:  String, // String is shorthand for {type: String}
      author: {type: String},
      body:   String,
      comments: [{ body: String, date: Date }],
      likes : Number,
      date: { type: Date, default: Date.now },
      hidden: Boolean,
  });
  
  // compile model from schema
  const PostModel = mongoose.model('Post', PostSchema);
  
  // create model
  const newPost = new PostModel({
      title : 'Post one',
      ....
  })
  ```







### [What is a SchemaType?](https://mongoosejs.com/docs/schematypes.html#what-is-a-schematype)

- `You can think of a Mongoose schema as the configuration object for a Mongoose model. `
- `A SchemaType is then a configuration object for an individual property. `
- `A SchemaType says what type a given path should have, whether it has any getters/setters, and what values are valid for that path.`

- `The permitted SchemaTypes `
  - [String](https://mongoosejs.com/docs/schematypes.html#strings)
  - [Number](https://mongoosejs.com/docs/schematypes.html#numbers)

  - [Date](https://mongoosejs.com/docs/schematypes.html#dates)

  - [Buffer](https://mongoosejs.com/docs/schematypes.html#buffers)

  - [Boolean](https://mongoosejs.com/docs/schematypes.html#booleans)

  - [Mixed](https://mongoosejs.com/docs/schematypes.html#mixed)

  - [ObjectId](https://mongoosejs.com/docs/schematypes.html#objectids)

  - [Array](https://mongoosejs.com/docs/schematypes.html#arrays)

  - [Decimal128](https://mongoosejs.com/docs/api.html#mongoose_Mongoose-Decimal128)

  - [Map](https://mongoosejs.com/docs/schematypes.html#maps)

  - [See More SchemaTypes](https://mongoosejs.com/docs/schematypes.html#schematypes)







###  add() method

- `If you want to add additional keys later, use the` [Schema#add](https://mongoosejs.com/docs/api.html#schema_Schema-add) `method.`

- `syntax`: **`YourSchema.add(obj,prefix)`**

  ```js
  PostSchema.add({
      viewer : Number
  })
  ```

  



### get() method

- `If we want to get value of an option which is defined for a schema we can use` **`Schmea.get('name')`**

- `Syntax`: **`YourSchema.get(optionkey)`**

  ```js
  console.log(PostSchema.get('title'));
  console.log(PostSchema.get('body'));
  ```





### set() method 

- `To Sets/gets a schema option.`

- `Syntax`:  **`set(key, [value])`**

  ```js
  UserSchema.set('capped',false);
  ```





### index() method 

- `If we want to create an index to a schema, we can use` [Index](https://mongoosejs.com/docs/guide.html#indexes) `method .`

- `Compound index creation is not possible at schema definition (in schema() or add()) using index() method only we can create compound index.`

- `Syntax`: **`index(fields, [options], [options.expires=null])`**
  
  ```js
  PostSchema.index({author:1},{name:'authorindex',unique:true})
  ```
  
  






### Add Instance method

- `We can add custom instance method for a schema with` **`Schema.method`** `method.`

- ⚠️ `Do not declare function with ES6 arrow functions (=>),this declaring can make error `

- `Syntax` : **`Schema.method('methodname', cb)`**

  ```js
  // define schema 
  const PostSchema = new mongoose.Schema({
      title:  String, // String is shorthand for {type: String}
      author: {type: String},
      body:   String,
  });
  
  // add custom instance method
  PostSchema.method("getInfo",function(){
      console.log('title : ' + this.title + ' , author' + this.author); 
  })
  
  // compile model from schema
  const PostModel = mongoose.model('posts',PostSchema);
  
  // create model
  const newPost = new PostModel( { title:'Post one', author : 'Shine Shine', body : 'Lorem ipsum dolor sit amet'});
  
  // call those method
  newPost.getInfo();
  ```

  



### Add Static method

- `You can also add static functions to your model. There are two equivalent ways to add a static:`

  - `Add a function property to `**`schema.statics`**
  - `Call the` [`Schema#static()` function](https://mongoosejs.com/docs/api.html#schema_Schema-static)

- `Do not declare statics using ES6 arrow functions (=>)`. `Arrow functions` [explicitly prevent binding `this`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#No_binding_of_this), `so the above examples will not work because of the value of` **`this`.**

  ```js
  // Assign a function to the "statics" object of our PostSchema
  PostSchema.statics.findByTitle = function(title) {
      return this.find({ title: title });
  };
  
  // Or, equivalently, you can call `PostSchema.static()`.
  PostSchema.static('findByAuthor', function(author) {
      return this.find({ author : author }); 
  });
  
  const PostModel = mongoose.model('Post', PostSchema);
  const names = await PostModel.findByTitle('Shine Shine');
  console.log(names);
  ```

  



### [Query Helpers  methods ](https://mongoosejs.com/docs/guide.html#query-helpers)

- `You can also add query helper functions, which are like instance methods but for mongoose queries`.

- ` Query helper methods let you extend mongoose's` [chainable query builder API](https://mongoosejs.com/docs/queries.html).

  ```js
  PostSchema.query.findByTitle = function(title) {
      return this.where({ title: title })
  };
  const PostModel = mongoose.model('Post', PostSchema);
  
  PostModel.find().findByTitle('post one').exec((err, posts) => {
      console.log(posts);
  });
  
  PostModel.findOne().findByTitle('post one').exec((err, posts) => {
      console.log(posts);
  });
  ```

  





## [See More about Schema](https://mongoosejs.com/docs/guide.html#virtuals)





### Different Between SQL and NOSQL

| SQL     | NoSQL        |
| ------- | ------------ |
| `Table` | `Collection` |
| `Row`   | `Document`   |







<hr style='
    margin-top: 55px;
    margin-bottom: 45px;
    border: 0px;
    height: 3px;
    background: -webkit-gradient(linear, 0% 0%, 100% 0%, from(rgba(0, 0, 0, 0)), color-stop(0.5, rgba(0, 0, 0, 0.33)), to(rgba(0, 0, 0, 0)));
'>

```js
separate-api {
    margin-top: 55px;
    margin-bottom: 45px;
    border: 0px;
    height: 3px;
    background: -webkit-gradient(linear, 0% 0%, 100% 0%, from(rgba(0, 0, 0, 0)), color-stop(0.5, rgba(0, 0, 0, 0.33)), to(rgba(0, 0, 0, 0)));
}
```

