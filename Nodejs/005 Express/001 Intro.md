

## Express.js

- `Express.js, or simply Express,`
- **`Fast, unopinionated, minimalist`** `back end  web framework fo Node.js`
-  `Free and open-source software`
-  `For building web applications and APIs. `
- `The de facto standard server framework for Node.js`

<img src="../assets/img/ex.png"/>





### Why use Express?

- `Express lets you build single page, multi-page, and hybrid web and mobile applications. Other common backend use is to provide an API for a client (whether web or mobile).`
- `It comes with a default template engine, Jade which helps to facilitate the flow of data into a website structure and does support other template engines.`
- `It supports MVC (Model-View-Controller), a very common architecture to design web applications.`
- `It is cross-platform and is not limited to any particular operating system.`
- `It leverages upon Node.js single threaded and asynchronous model.`





### Features of Express.js

- `Routing`
- `Middleware`
- `Templating`
- `Debugging`
- `Error Handling`





### Project Structure of an Express App

> `Since Express does not enforces much on the developer using it, sometimes it can get a bit overwhelming to what project structure one should follow. It does not has a defined structure officially but most common use case that any Node.js based application follows is to separate different tasks in different modules. This means to have separate JavaScript files.`

```js
project-root/
   node_modules/          // This is where the packages installed are stored
   config/
      db.js                // Database connection and configuration
      credentials.js       // Passwords/API keys for external services used by your app
      config.js            // Environment variables
   models/                 // For mongoose schemas
      books.js
      things.js
   routes/                 // All routes for different entities in different files
      books.js
      things.js
   views/
      index.pug
      404.pug
        ...
   public/                 // All static files
      images/
      css/
      javascript/
   app.js
   routes.js               // Require all routes in this and then require this file in
   app.js
   package.json
```

> `This is pattern is commonly known as MVC, model-view-controller. Simply because our database model, the UI of the application and the controllers (in our case, routes) are written and stored in separate files. This design pattern that makes any web application easy to scale if you want to introduce more routes or static files in the future and the code is maintainable.`