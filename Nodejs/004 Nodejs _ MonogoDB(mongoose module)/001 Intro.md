

##                                                                                                             MongoDB  Database with Mongoose



> **`MongoDB`** `is is one of the most popular NoSQL(document database) database for the scalability and flexibility`
>
> ` MongoDB stores data in flexible, JSON-like documents, meaning fields can vary from document to document and data structure can be changed over time unlike your RDBMS where it stores the data in relational format(tabled-structure)`
>
> `You can download a free MongoDB database at` [https://www.mongodb.com](https://www.mongodb.com/)`or get started right away with a MongoDB cloud service at` https://www.mongodb.com/cloud/atlas.
>
> **`Mongoose`** `is an Object Document Mapper(ODM) package or object modeling tool `
>
> **`Mongoose`** `provides a simple schema-based solution to model your app data,that is mapped to a MongoDB document. `
>
> ` It includes built-in type casting, validation, query building, business logic hooks and more, out of the box.`







### [What is the best way to interact with a database?](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose#what_is_the_best_way_to_interact_with_a_database)

- `There are two common approaches for interacting with a database: `

  - **`Native query language (e.g. SQL)`** `and`
  - **` Object Data Model (ODM) or an Object Relational Model (ORM)`**

  





### Native query language 

- `Using the databases' native query language they are very best performance,that can be gained by using SQL or whatever query language is supported by the database `







### Object Data Model or Object Relational Model (ODM or ORM )

- `An ODM/ORM represents the website's data` **`as JavaScript objects`**, `which are then mapped to the underlying database`.
- ` Some ORMs are tied to a specific database, while others provide a database-agnostic backend.`
-  `ODM's are often` **`slower`**` because they use translation code to map between objects and the database format, `
- `Using ODM/ORMs often results in` **`lower costs for development and maintenance`**! `Unless you're very familiar with the native query language or performance is paramount`
- `The benefit of using an ORM is that` **`programmers can continue to think in terms of JavaScript objects rather than database semantics`** — `this is particularly true if you need to work with different databases (on either the same or different websites).`









### [What ORM/ODM should I use?](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose#what_ormodm_should_i_use)

- `There are many ODM/ORM solutions available on the NPM package manager site (check out the` [odm](https://www.npmjs.com/browse/keyword/odm) and [orm](https://www.npmjs.com/browse/keyword/orm) `tags for a subset!).`
- `A few solutions that were popular at the time of writing are:`
  - [Mongoose](https://www.npmjs.com/package/mongoose): `Mongoose is a` [MongoDB](https://www.mongodb.org/) `object modeling tool designed to work in an asynchronous environment.`
  - [Waterline](https://www.npmjs.com/package/waterline): `An ORM extracted from the Express-based` [Sails](http://sailsjs.com/) `web framework. It provides a uniform API for accessing numerous different databases, including Redis, MySQL, LDAP, MongoDB, and Postgres.`
  - [Bookshelf](https://www.npmjs.com/package/bookshelf): `Features both promise-based and traditional callback interfaces, providing transaction support, eager/nested-eager relation loading, polymorphic associations, and support for one-to-one, one-to-many, and many-to-many relations. Works with PostgreSQL, MySQL, and SQLite3.`
  - [Objection](https://www.npmjs.com/package/objection): `Makes it as easy as possible to use the full power of SQL and the underlying database engine (supports SQLite3, Postgres, and MySQL).`
  - [Sequelize](https://www.npmjs.com/package/sequelize) `is a promise-based ORM for Node.js and io.js. It supports the dialects PostgreSQL, MySQL, MariaDB, SQLite, and MSSQL and features solid transaction support, relations, read replication and more.`
  - [Node ORM2](https://node-orm.readthedocs.io/en/latest/) `is an Object Relationship Manager for NodeJS. It supports MySQL, SQLite, and Progress, helping to work with the database using an object-oriented approach.`
  - [GraphQL](https://graphql.org/): `Primarily a query language for restful APIs, GraphQL is very popular, and has features available for reading data from databases.`



### Built With Mongoose

> `According to` [GitHub](https://github.com/Automattic/mongoose), `there are over 870,000 projects that depend on Mongoose. Here are a few of our favorite apps that are built with Mongoose.`



#### [Terra Vera](https://terravera.com/)

- `Terra Vera produces on-demand antimicrobial chemistry for agriculture and surfaces. Terra Vera's on-site generators convert water, electricity, and a proprietary blend of salts and amino acids into an organic solution that eliminates many common pathogens (like mold, powdery mildew, and viruses), but is safe for plants, people, and pets.`

  [![img](https://terravera.com/images/avatar.png)](https://terravera.com/)



#### [SixPlus](https://sixplus.com/)

- `SixPlus is an online marketplace for corporate event professionals to book private dining spaces in restaurants and hotels across the US. You can book your next company event at venues like [Refinery Rooftop](https://sixplus.com/venue/refinery-rooftop-at-refinery-hotel/) or [Good Behavior](https://sixplus.com/venue/good-behavior-at-made-hotel/) on SixPlus.`

  [![img](https://res-2.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_120,w_120,f_auto,b_white,q_auto:eco/v1452784634/wipgioqzev0omt4ezsay.jpg)](https://sixplus.com/)



#### [Payment Ninja](https://payment.ninja/partners/mongoose/?ref=5e2c6ea94e9158a6d2cc2af2)

- `Payment Ninja is an online payment gateway that lets you save up to 50% on payment processing over processors like PayPal and Stripe.`

  [![img](https://res-1.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_120,w_120,f_auto,b_white,q_auto:eco/v1503059272/h8tzm8hqqabjknhj9cts.png)](https://payment.ninja/partners/mongoose/?ref=5e2c6ea94e9158a6d2cc2af2)



#### [Mixmax](https://mixmax.com/?utm_source=invite&utm_medium=link&utm_campaign=saasquatch&rsCode=VALERIKARPOV&rsShareMedium=DIRECT&rsEngagementMedium=EMBED)

- `Mixmax is a app that sends engaging emails with instant scheduling, free unlimited email tracking, polls, and surveys right in Gmail.`

  [![img](https://res-2.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_120,w_120,f_auto,b_white,q_auto:eco/v1426108234/rb6qztygayubxme8f4tx.png)](https://mixmax.com/?utm_source=invite&utm_medium=link&utm_campaign=saasquatch&rsCode=VALERIKARPOV&rsShareMedium=DIRECT&rsEngagementMedium=EMBED)



#### [Builder Book](http://builderbook.org/)

- `Learn how to build a full-stack, production-ready JavaScript web application from scratch. You'll go from 0 lines of code in Chapter 1 to over 10,000 lines of code by Chapter 8.`

  [![img](https://storage.googleapis.com/builderbook/logo.svg)](http://builderbook.org/)





