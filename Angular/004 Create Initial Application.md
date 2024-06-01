## Prerequisites

- `Node.js`

- `npm`

  ```cmd
  $ node -v
  v20.3.0
  $ npm -v
  9.6.7
  ```



### Install the Angular CLI

```
npm install -g @angular/cli
```

>```js
>//On Windows client computers, the execution of PowerShell scripts is disabled by default. To allow the execution of PowerShell scripts run below command
>Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
>```



### Create initial application

```js
ng new my-app
```



### Run the application

- `The` **`ng serve`** `command launches the server, watches your files, and rebuilds the app as you make changes to those files`
- `The` **`--open`** (or just `-o`) `option automatically opens your browser to http://localhost:4200/`.

```js
cd my-app
ng serve --open
```

> `The Angular CLI includes a server, for you to build and serve your app locally.`



<img src="assets/app-works.png"/>
