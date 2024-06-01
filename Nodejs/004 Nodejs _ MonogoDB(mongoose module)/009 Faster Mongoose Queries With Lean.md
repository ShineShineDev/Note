## Faster Mongoose Queries With Lean

> `The` [lean option](https://mongoosejs.com/docs/api.html#query_Query-lean) `tells Mongoose to skip` [hydrating](https://mongoosejs.com/docs/api.html#model_Model.hydrate) `the result documents. This makes queries faster and less memory intensive, but the result documents are plain old JavaScript objects (POJOs), not`[Mongoose documents](https://mongoosejs.com/docs/documents.html). 
>
> **`If you're executing a query and sending the results without modification to, say, an`** [Express response](http://expressjs.com/en/4x/api.html#res), **`you should use lean.`**
>
> ` If you do not modify the query results and do not use` [custom getters](https://mongoosejs.com/docs/api.html#schematype_SchemaType-get), `you should use` `lean()`.
>
> ` If you modify the query results or rely on features like getters or` [transforms](https://mongoosejs.com/docs/api.html#document_Document-toObject), `you should not use` `lean()`.
>
>  [See More Lean](https://mongoosejs.com/docs/tutorials/lean.html#using-lean)







 ### [Using Lean](https://mongoosejs.com/docs/tutorials/lean.html#using-lean)

- `By default, Mongoose queries return an instance of the` [Mongoose `Document` class](https://mongoosejs.com/docs/api.html#Document). 

- `Documents are much heavier than vanilla JavaScript objects, because they have a lot of internal state for change tracking.`

-  `To Enable the` **`lean`** `option tells Mongoose to skip instantiating a full Mongoose document and just give you the POJO.`

- `The downside of enabling `lean` is that lean docs don't have:`

  - `Change tracking`

  - `Casting and validation`

  - `Getters and setters`

  - `Virtuals`

  - `save()`

  ```ja
const leanDoc = await MyModel.findOne().lean();
  ```
  
  





### How much smaller are lean documents? Here's a comparison.

```js
const schema = new mongoose.Schema({ name: String });
const MyModel = mongoose.model('Test', schema);

await MyModel.create({ name: 'test' });

// Module that estimates the size of an object in memory
const sizeof = require('object-sizeof');

const normalDoc = await MyModel.findOne();
// To enable the `lean` option for a query, use the `lean()` function.
const leanDoc = await MyModel.findOne().lean();

sizeof(normalDoc); // >= 1000
sizeof(leanDoc); // 86, 10x smaller!

// In case you were wondering, the JSON form of a Mongoose doc is the same
// as the POJO. This additional memory only affects how much memory your
// Node.js process uses, not how much data is sent over the network.
JSON.stringify(normalDoc).length === JSON.stringify(leanDoc.length); // true
```







### Lean With Express Example

- **`GET`** `routes are good candidates` **`for lean()`** `in a` [RESTful API](https://en.wikipedia.org/wiki/Representational_state_transfer).
- `This route does not modify the `**`person`** `doc and doesn't rely on any Mongoose-specific functionality.`
- `On the other hand, `**`PUT, POST, etc.`** r`outes generally` **`should not use lean()`.**

  ```js
  // As long as you don't need any of the Person model's virtuals or getters,
  // you can use `lean()`.
  app.get('/person/:id', function(req, res) {
    Person.findOne({ _id: req.params.id }).lean().
      then(person => res.json({ person })).
      catch(error => res.json({ error: error.message }));
  });
  
  // This route should not use lean() because lean means no `save()`.
  app.put('/person/:id', function(req, res) {
    Person.findOne({ _id: req.params.id }).
      then(person => {
        assert.ok(person);
        Object.assign(person, req.body);
        return person.save();
      }).
      then(person => res.json({ person })).
      catch(error => res.json({ error: error.message }));
  });
  ```

  





### [Lean and Populate](https://mongoosejs.com/docs/tutorials/lean.html#lean-and-populate)



