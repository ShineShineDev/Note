

https://www.freecodecamp.org/news/javascript-es-modules-and-module-bundlers/



#### Create a package.json

```js
npm init -y
yarn init -y //Alternatively, you can use Yarn
```



 

#### Install the Webpack module bundler

- `Install *webpack* and *webpack-cli* locally into your project as development dependency libraries`

- `The *webpack-cli* package makes running webpack on the command line possible.`

  ```js
  npm install webpack webpack-cli --save-dev
  yarn add webpack webpack-cli --dev //with Yarn
  ```





#### Create your project's directories

- Create a "source" code folder (`./src`) and a "distribution" code folder (`./dist`).

  ```bash
  mkdir src dist
  ```

  



#### Create your source code files

- `Create the following files inside the newly created source code directory`

  `index.html`

  `index.js`





#### Add the JavaScript file to your HTML document

- `Open your index.html file and replicate the code below`

  ```html
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>ES Module - CodeSweetly</title>
    </head>
    <body id="body">
      <h1>Module Bundler Tutorial</h1>
      <button id="button">Click Me to Change Color!</button>
  
      <script src="./index.js"></script>
    </body>
  </html
  ```

  



#### Install some dependencies

```js
npm install randomcolor --save
```





#### Import your dependencies

- `Import your dependencies into your JavaScript source code with the require() method or the import statement.`

- `The import statement is JavaScript's native way of importing modules.`

- `The require() function is the CommonJS syntax for importing modules into a script.`

- `An alternative way to import your project's dependencies is to implicitly load them with your HTML document's <script> tag. However, such a technique pollutes the global scope. So, using the import or require() syntax is better.`

  ```js
  // index.js
  import randomColor from "randomcolor";
  const randomColor = require("randomcolor"); //The require() method equivalence of the snippet 
  ```

  



### Use the dependencies

```js
// index.js

import randomColor from "randomcolor";

const bodyElement = document.getElementById("body");
const buttonElement = document.getElementById("button");

function changeBodyColor() {
  const color = randomColor();
  bodyElement.style.backgroundColor = color;
}

buttonElement.addEventListener("click", changeBodyColor);
```





###  Start the build step

- `After running the command above, webpack will do the following:`

  - `It will use your index.js as its entry point.`

  - `It will create a bundle (the output file) in your project's dist folder containing the content of the entry point and its dependencies.`

- `By default, Webpack generates its bundle as a main.js file—which it will save in the distribution folder you created . However, you can change the default setting by creating a configuration file`

- `NPX is Node's package runner that will automatically find and execute Webpack.`

  ```bash
  npx webpack
  ```

  



### Refer browsers to the newly created bundle

- So, now that you have created a browser-compatible bundle file, you need to tell browsers to use it instead of the `index.js` source code file.\

- Therefore, go to your HTML file and substitute the reference to your JavaScript source code with Webpack's distribution bundle.

- For instance, instead of using `"./index.js"` in the `<script>` tag of your HTML file, you would use `"../dist/main.js"` like so:

  ```html
  <body id="body">
      <h1>Module Bundler Tutorial</h1>
      <button id="button">Click Me to Change Color!</button>
      <script src="../dist/main.js"></script>
  </body>
  ```

  

  

#### How to Make Webpack Auto-Generate Your App's HTML File

- `Webpack allows you to use the HtmlWebpackPlugin to auto-generate and manage your project's index.html file`.

  `Follow the steps below to learn how to use HtmlWebpackPlugin to auto-generate and manage your project's HTML file.`

  ```bash
  npm install html-webpack-plugin --save-dev
  ```

  

###  Create a configuration file

- `Create a Webpack configuration file in your project's root folder`

  ```bash
  touch webpack.config.js
  ```





#### Add the plugin to webpack's configuration

- `Open your webpack.config.js file and add the HtmlWebpackPlugin plugin `

  ```js
  // webpack.config.js
  
  const HtmlWebpackPlugin = require("html-webpack-plugin");
  
  module.exports = { 
    plugins: [new HtmlWebpackPlugin()] 
  }
  ```

  



### Run the build step

- `Once you've installed and added HtmlWebpackPlug into your project, recompile your modules `

- `After running the build step, HtmlWebpackPlugin will do the following:`

  - It will auto-generate a new `index.html` file.

  - The plugin will automatically insert the bundles that Webpack generated into the newly created HTML document.

  - It will auto-save the new HTML file inside your project's distribution folder.

  ```bash
  npx webpack
  ```

  ```js
  //dist/index.html
  <!doctype html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>Webpack App</title>
      <meta name="viewport" content="width=device-width,initial-scale=1">
      <script defer src="main.js"></script>
    </head>
    <body>
    </body>
  </html>
  ```

  Notice that the HTML document generated by `HtmlWebpackPlugin` does not contain [your source file](https://www.freecodecamp.org/news/javascript-es-modules-and-module-bundlers/#step-7-add-the-javascript-file-to-your-html-document)'s `<h1>` and `<button>` elements.

  In other words, suppose you open the `dist/index.html` file in the browser. In that case, the browser will open an empty HTML page.

  The `HtmlWebpackPlugin` omitted the content of the source code's `<body>` element because it did not create the new file from the original document. Instead, it automatically created a brand-new HTML page that includes only the bundles Webpack generated.

  However, you can also tell `HtmlWebpackPlugin` to use your source file as a template. Let's see how below.





###  Update your configuration file

- Open your project's `webpack.config.js` file and update `HtmlWebpackPlugin`'s settings like so:

  ```js
  // webpack.config.js
  
  const HtmlWebpackPlugin = require("html-webpack-plugin");
  
  module.exports = { 
    plugins: [new HtmlWebpackPlugin({
      template: "./src/index.html"
    })] 
  }
  ```

  So, if you now run the `npx webpack` command, `HtmlWebpackPlugin` will use `./src/index.html` as a template to generate the new `dist/index.html` file.

  Therefore, the newly created HTML distribution file will look like so:

  ```html
  <!doctype html>
  <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>ES Module - CodeSweetly</title>
      <script defer="defer" src="main.js"></script>
    </head>
    <body id="body">
      <h1>Module Bundler Tutorial</h1>
      <button id="button">Click Me to Change Color!</button>
    </body>
  </html>
  ```



###  Check your app in the browser

Open the newly generated `dist/index.html` file in the browser to confirm that the browser can successfully read your app and its dependencies.





## How to Rerun Webpack Automatically

Suppose you wish to automate the process of rerunning the build step. In that case, you can add a `watch` property to your [package.json](https://www.codesweetly.com/package-json-file-explained/)'s `scripts` field.

For instance, do the following:

### 1. Add `watch` to the `scripts` fields

Open your project's `package.json` file and add a `watch` property to its `scripts` field like so:

```json
{
  "name": "your_package",
  "version": "1.0.0",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "watch": "webpack --progress --watch"
  }
}
```





### Run the `watch` script

Using your terminal, invoke your `package.json`'s `watch` script like so:

```bash
npm run watch
```

```js
//src/index.js

import randomColor from "randomcolor";

const bodyElement = document.getElementById("body");
const buttonElement = document.getElementById("button");

function changeBodyColor() {
  const color = randomColor();
  bodyElement.style.backgroundColor = color;
  console.log(color);
}

buttonElement.addEventListener("click", changeBodyColor);
```

Afterward, save your changes. Then refresh your browser.

After the refresh, do the following:

1. Open your browser's console.
2. Click your app's `"Click Me to Change Color!"` button.



You can see that the `--watch` flag automatically recompiled your modules when you saved your source code's changes.

Therefore, you no longer need to run the `npx webpack` command manually again. Instead, the `--watch` flag will watch and automatically recompile your modules whenever you save changes.



## How to Reload the Browser Automatically

Suppose you wish to automate the process of reloading your browser. In that case, you can use Webpack's [dev server](https://github.com/webpack/webpack-dev-server) package.

The following steps will show you how to configure and use the package.

### Step 1: Install webpack's web server

Using your terminal, install the `webpack-dev-server` package like so:

```bash
npm install webpack-dev-server --save-dev
```

Or, if your package manager is Yarn, run:

```bash
yarn add webpack-dev-server --dev
```

**Note:** The `webpack-dev-server` package enables watch mode by default. Therefore, you do not need to enable a `watch` script manually whenever you use the dev server.

In other words, once you've decided to use Webpack's dev server, do the following:

1. Use `ctrl + c` on windows or `cmd + c` on mac to stop `watch`'s execution (if the script is still running).
2. Delete the `watch` property you [previously added](https://www.freecodecamp.org/news/javascript-es-modules-and-module-bundlers/#how-to-rerun-webpack-automatically) to your `package.json` file.

### Step 2: Specify your files' location

Tell the web server where it should get the files that Webpack did not generate by adding a `devServer` option to the configuration file you [created previously](https://www.freecodecamp.org/news/javascript-es-modules-and-module-bundlers/#step-2-create-a-configuration-file):

```js
// webpack.config.js

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = { 
  plugins: [new HtmlWebpackPlugin({
    template: "./src/index.html"
  })],
  devServer: {
    static: "./dist"
  }
}
```

The configuration snippet above tells the dev server to serve contents Webpack did not build from the project's `dist` folder.

Note that the dev server serves files on `localhost:8080` by default. However, you can specify the port you wish to use by adding a `port` property to the `devServer` option like so:

```js
// webpack.config.js

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = { 
  plugins: [new HtmlWebpackPlugin({
    template: "./src/index.html"
  })],
  devServer: {
    static: "./dist",
    port: 5001
  }
}
```

**Note:**

- `webpack-dev-server` uses [output.path](https://www.codesweetly.com/javascript-module-bundler#outputpath)'s directory to serve bundled files.
  In other words, the dev server will use `http://[devServer.host]:[devServer.port]/[output.publicPath]/[output.filename]` to generate the bundled file's URL.
- We will discuss how to use a configuration file [later](https://www.freecodecamp.org/news/javascript-es-modules-and-module-bundlers/#what-exactly-is-webpack-s-configuration-file) in this guide.

Let's now see how to run the dev server.

### Step 3: Run the dev server

There are two ways to run the dev server.

- Use NPX on your CLI
- Use `package.json`'s scripts field

Let's discuss both ways below.

#### How to run Webpack's dev server by using NPX on your CLI

Using the terminal, navigate to your project's root directory—where the `webpack.config.js` file is—then use NPX to run the dev server like this:

```bash
npx webpack serve --mode development --open
```

The snippet above uses NPX to do the following:

1. Run the build step by executing Webpack.
2. Serve the build step's output file from memory, not your hard disk.

**Note:**

- The dev server requires an HTML document (usually an `index.html` file) to serve the build step's output.
- The `--mode development` flag tells Webpack to run the build step in development mode.
- The `--open` flag tells the dev server to open your default browser.

Keep in mind that the dev server does not save the build step's output file to any of your project's directories. Instead, it does the following:

1. It keeps the build step's output files [in memory](https://en.wikipedia.org/wiki/In-memory_processing) (your system's RAM).
2. It serves the output files from memory, not your system's [hard drive](https://www.computerhope.com/jargon/m/memory.htm#storage).

Using your system's memory to build and serve the output file makes the dev server fast at serving your bundle.

However, when your app is ready for production, remember to run the `npx webpack` compilation command to save your bundle in your project's distribution folder—rather than in memory.

Let's now discuss the second way to run the dev server.

#### How to run Webpack's dev server by using `package.json`'s scripts field

An alternate way to run the dev server is to add the `"webpack serve --mode development --open"` command to your `package.json`'s `scripts` field like so:

```json
{
  "name": "your_package",
  "version": "1.0.0",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "webpack serve --mode development --open"
  }
}
```

Afterward, you can use `npm run start` on your terminal to execute the `webpack serve --mode development --open` command.

Once you've started the dev server—via either option 1 or 2, your default browser will automatically open with your project's HTML page.

Then, anytime you save changes to your source code, the dev server will automatically reload your browser to reflect the recent updates.

**Note:**

- After running `npm run start`, your currently opened terminal will continue to process the dev server's activities. So, you won't be able to input any command on that terminal until you stop the server. However, you can open a new terminal window while using the current one to process the server. In other words, use one terminal to run the dev server and another to input commands.
- To stop the dev server's execution, use `ctrl + c` on windows or `cmd + c` on mac.
- You can rename the `"start"` key (or any other [scripts' key](https://www.codesweetly.com/package-json-file-explained/#scripts)) to any other name you prefer.
- Check out [Webpack's documentation](https://webpack.js.org/configuration/dev-server) for more ways to configure the dev server.

Remember that we used a configuration file in [step 2](https://www.freecodecamp.org/news/javascript-es-modules-and-module-bundlers/#step-2-specify-your-files-location). Let's talk more about what the file does.
