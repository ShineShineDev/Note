## Validating

- `Validation is defined in the` [SchemaType](https://mongoosejs.com/docs/schematypes.html)

- `Validation is` [middleware](https://mongoosejs.com/docs/middleware.html). `Mongoose registers validation as a`**`pre('save')`** `hook on every schema by default.`

- `You can disable automatic validation before save by setting the` [validateBeforeSave](https://mongoosejs.com/docs/guide.html#validateBeforeSave) `option`

- `You can manually run validation using `**`doc.validate(callback) or doc.validateSync()`**

- `You can manually mark a field as invalid (causing validation to fail) by using` [`doc.invalidate(...)`](https://mongoosejs.com/docs/api.html#document_Document-invalidate)

- `Validators are not run on undefined values. The only exception is the` [`required` validator](https://mongoosejs.com/docs/api.html#schematype_SchemaType-required).

- `Validation is asynchronously recursive; when you call` [Model#save](https://mongoosejs.com/docs/api.html#model_Model-save), `sub-document validation is executed as well. If an error occurs, your` [Model#save](https://mongoosejs.com/docs/api.html#model_Model-save) `callback receives it`

- `Validation is customizable`

  

<hr class="separate-api" style="
    margin-top: 55px;
    margin-bottom: 45px;
    border: 0px;
    height: 3px;
    background: -webkit-gradient(linear, 0% 0%, 100% 0%, from(rgba(0, 0, 0, 0)), color-stop(0.5, rgba(0, 0, 0, 0.33)), to(rgba(0, 0, 0, 0)));
">



### [Built-in Validators](https://mongoosejs.com/docs/validation.html#built-in-validators)

`❝ Mongoose has several built-in validators.❞ `

- `All` [SchemaTypes](https://mongoosejs.com/docs/schematypes.html) `have the built-in` [required](https://mongoosejs.com/docs/api.html#schematype_SchemaType-required) `validator. The required validator uses the `[SchemaType's `checkRequired()` function](https://mongoosejs.com/docs/api.html#schematype_SchemaType-checkRequired) `to determine if the value satisfies the required validator.`

- [Numbers](https://mongoosejs.com/docs/api.html#schema-number-js) `have `[`min` and `max`](https://mongoosejs.com/docs/schematypes.html#number-validators) `validators.`

- [Strings](https://mongoosejs.com/docs/api.html#schema-string-js) `have` [`enum`, `match`, `minLength`, and `maxLength`](https://mongoosejs.com/docs/schematypes.html#string-validators) `validators.`

  ```js
  const breakfastSchema = new Schema({
    eggs: {
      type: Number,
      min: [6, 'Too few eggs'],
      max: 12
    },
    bacon: {
      type: Number,
      required: [true, 'Why no bacon?']
    },
    drink: {
      type: String,
      enum: ['Coffee', 'Tea'],
      required: function() {
        return this.bacon > 3;
      }
    }
  });
  const Breakfast = db.model('Breakfast', breakfastSchema);
  ```





[See More](https://mongoosejs.com/docs/validation.html#validation)