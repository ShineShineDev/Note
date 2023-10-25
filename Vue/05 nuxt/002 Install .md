## Installation

> `node(We recommend you have the latest LTS version installed)`



#### Install create-nuxt-app

- `To install Nuxt.js, you can use create-nuxt-app `

  ```bash
   npm i -g create-nuxt-app
  ```

  

#### Install  Nuxt

- `Make sure you have installed yarn, npx (included by def ault with npm v5.2+) or npm (v6.1+).`

  ```js
  //stallation
  npm init nuxt-app <project-name> //with npm
  npx create-nuxt-app <project-name> //with npx
  yarn create nuxt-app <project-name> //with yarn
  
  //Go to project folder 
  cd <project-name>
  
  //Run 
  yarn dev //Run with yarn
  npm run dev //Run with npm
  
  
  //set NODE_OPTIONS=--openssl-legacy-provider
  ```





#### Understanding Nuxt.js Folder Structure 

```js
├── .nuxt
├── assets
├── components
├── layouts
├── middleware
├── mode_modules
├── output
├── pages
    ├──index.vue
├── plugins
├── static
├── store
	├──.editorconfig
	├──.gitignore
	├──.nuxt.config.js
	├──.package.json
	├──.README.md

```

- `.nuxt`

  -  `This folder contains everything needed to generate your vue application and is required that you do not make changes to any file in this directory.`

- `output`

  - .`output folder holds all build files when building your Nuxt application to production (nuxt build). It is also required that you do not touch files in this directory when deploying your application to production.`
  
- `assets`
  - ` In this directory, we can store different types of assets that we are going to use in our app like images, fonts, audio files, logo, and styles.If this directory does not exist in your app then you can create it by simply adding a folder with the name ‘assets’.`

- `components`
  - `The components directory simply contains your single file Vue components.  Nuxt 3 auto imports all our components created in this folder so we don’t have to manually import them before using them.`
  
- `layout`

  - `for extracting common UI or code patterns into reusable layout`

- `middleware`

  - ` Basically contains custom JavaScript functions that run right before a page or group of pages, i.e. a layout, is rendered.`
  - `allowing users to only allow access to particular areas of your site if a specified set of criteria is met`
  - `For example, imagine you want to check whether a user has the right credentials to access a page. In this case, you might have a file named middleware/auth.js` `

- `Pages`
  - `In this directory, we can create pages for our NuxtJs app. You just have to create a new .vue file inside the page’s directory to create a new page. After that NuxtJs will automatically scan the pages and create the router for the app. You can also create nested pages by creating new folders inside the pages directory.`
  
- `Plugins`

  - ` In this directory, we can add the plugins that we are going to use in our NuxtJs app. After installing the plugins we have to create a new file for that plugin inside our Plugins directory.`

- `Static`

  - ` In this directory, we will store the static files that are not going to change like robot.txt, sitemaps, or favicons.`

- `store`

  - `The store directory contains your Vuex Store files. The Vuex Store comes with Nuxt out of the box but is disabled by default. Creating an `index.js` file in this directory enables the store.`

- `Nuxt config`
  -   `The nuxt.config.js files allows you to configure your Nuxt project, from default SEO, to custom URL loaders, global CSS and SCSS and API driven dynamic route generation amongst other things`

