##                                                                   Queries

> `Mongoose` [models](https://mongoosejs.com/docs/models.html) `provide several static helper functions for` [CRUD operations](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete). `Each of these functions returns a `[mongoose `Query` object](http://mongoosejs.com/docs/api.html#Query).

- [`Model.deleteMany()`](https://mongoosejs.com/docs/api.html#model_Model.deleteMany)
- [`Model.deleteOne()`](https://mongoosejs.com/docs/api.html#model_Model.deleteOne)
- [`Model.find()`](https://mongoosejs.com/docs/api.html#model_Model.find)
- [`Model.findById()`](https://mongoosejs.com/docs/api.html#model_Model.findById)
- [`Model.findByIdAndDelete()`](https://mongoosejs.com/docs/api.html#model_Model.findByIdAndDelete)
- [`Model.findByIdAndRemove()`](https://mongoosejs.com/docs/api.html#model_Model.findByIdAndRemove)
- [`Model.findByIdAndUpdate()`](https://mongoosejs.com/docs/api.html#model_Model.findByIdAndUpdate)
- [`Model.findOne()`](https://mongoosejs.com/docs/api.html#model_Model.findOne)
- [`Model.findOneAndDelete()`](https://mongoosejs.com/docs/api.html#model_Model.findOneAndDelete)
- [`Model.findOneAndRemove()`](https://mongoosejs.com/docs/api.html#model_Model.findOneAndRemove)
- [`Model.findOneAndReplace()`](https://mongoosejs.com/docs/api.html#model_Model.findOneAndReplace)
- [`Model.findOneAndUpdate()`](https://mongoosejs.com/docs/api.html#model_Model.findOneAndUpdate)
- [`Model.replaceOne()`](https://mongoosejs.com/docs/api.html#model_Model.replaceOne)
- [`Model.updateMany()`](https://mongoosejs.com/docs/api.html#model_Model.updateMany)
- [`Model.updateOne()`](https://mongoosejs.com/docs/api.html#model_Model.updateOne)
- [See More](https://mongoosejs.com/docs/api/query.html#query_Query)

`A mongoose query can be executed in one of two ways. First, if you pass in a callback function, Mongoose will execute the query asynchronously and pass the results to the callback`.





### Create Documents

- ` ModelInstanec.save() and Model.insetMany() for insert doc`

  ```js
  // require module
  const mongoose = require('mongoose');
  
  // db url
  const mongoDB = 'mongodb://localhost/mongoose_db';
  
  // Set up default mongoose connection with error handling
  mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true}).
    then(()=> console.log('You are now connected to Mongo!')).
  catch( err => console.error('MongoDB connection error:', err));
  
  // define schema
  const PostSchema = mongoose.Schema({
      title: String,
      body : String
  })
  // compile PostModel from PostSchema
  const PostModel = mongoose.model('Post',PostSchema);
  
  const newPost = new PostModel({
      title : 'Post one',
      body : 'Hi there ! this is post one'
  })
  
  // insert single 
  // newPost is PostModel instance
  newPost.save(err =>{ 
       if (err) return console.log(err);
       console.log('Saved !');
  })
  
  // insert mutiple
  PostModel.insertMany(
      [
          { 
              title : 'Post One',
              body : 'Hi There! this is the post one'
          },
          { 
              title : 'User Two',
              body : 'Hi There! this is the post Two'
          },
          { 
              title : 'Post Three',
              body : 'Hi There! this is the post Three'
          }
      ], (err,log) => {
       if (err) return console.log(err);
       console.log('Saved !' + log.length + 'Records');
      }
  );
  ```

  







### Read  Documents

- `Model.find() and Model.fineOne() for Read docs`

```js
// require module
const mongoose = require('mongoose');

// db url
const mongoDB = 'mongodb://localhost/mongoose_db';

// Set up default mongoose connection with error handling
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true}).
  then(()=> console.log('You are now connected to Mongo!')).
catch( err => console.error('MongoDB connection error:', err));

// define schema
const PostSchema = mongoose.Schema({
    title: String,
    body : String
})
// compile PostModel from PostSchema
const PostModel = mongoose.model('Post',PostSchema);

// find all
PostModel.find((err,res) =>{
     if (err) return console.log(err);
     console.log(res);
})

/* find specify 
PostModel.findOne( title: 'Post one',(err,res) =>{
     if (err) return console.log(err);
     console.log(res);
})
*/
```







### Update Documents

- `Model.updateOne and Model.updateMany for  update doc`

  ```js
  // require module
  const mongoose = require('mongoose');
  
  // db url
  const mongoDB = 'mongodb://localhost/mongoose_db';
  
  // Set up default mongoose connection with error handling
  mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true}).
    then(()=> console.log('You are now connected to Mongo!')).
  catch( err => console.error('MongoDB connection error:', err));
  
  // define schema
  const PostSchema = mongoose.Schema({
      title: String,
      body : String
  })
  // compile PostModel from PostSchema
  const PostModel = mongoose.model('Post',PostSchema);
  
  // update one
  PostModel.updateOne({title: 'Post one'},{title: 'Post one Updated'},(err,res) =>{
       if (err) return console.log(err);
       console.log(res);
  })
  
  // update many
  PostModel.updateMany({title: 'Post one'},{title: 'Post one Updated'},(err,res) =>{
       if (err) return console.log(err);
       console.log(res);
  })
  
  ```

  





### Delete Documents

- `Model.deleteOne and Model.deleteMany for  delete doc`

  ```js
  // require module
  const mongoose = require('mongoose');
  
  // db url
  const mongoDB = 'mongodb://localhost/mongoose_db';
  
  // Set up default mongoose connection with error handling
  mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true}).
    then(()=> console.log('You are now connected to Mongo!')).
  catch( err => console.error('MongoDB connection error:', err));
  
  // define schema
  const PostSchema = mongoose.Schema({
      title: String,
      body : String
  })
  // compile PostModel from PostSchema
  const PostModel = mongoose.model('Post',PostSchema);
  
  // delet one
  PostModel.deleteOne({title: 'Post one Updated'},(err,res) =>{
       if (err) return console.log(err);
       console.log(res);
  })
  
  // update many
  PostModel.deleteMany({title: 'Post one Updated'},(err,res) =>{
       if (err) return console.log(err);
       console.log(res);
  })
  // { n: 3, ok: 1, deletedCount: 3 }
  ```

  

