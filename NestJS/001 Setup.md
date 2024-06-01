## Setup

#### Prerequisites
 - `Node.js (version >= 16)`



### Install Nest CLI

```js
 $ npm i -g @nestjs/cli
```



### Create New Nest App

```js
$ nest new project-name
```

> `To create a new project with TypeScript's` [stricter](https://www.typescriptlang.org/tsconfig#strict) `feature set, pass the --strict flag to the nest new command.`

### Project Folder 

```json
dist
.eslintrc.js
.git
.gitignore
nest-cli.json
node_modules
package.json
package-lock.json
.prettierrc
README.md
src
  ├── app.controller.spec.ts
  ├── app.controller.ts
  ├── app.module.ts
  ├── app.service.ts
  └── main
test
tsconfig.build.json
tsconfig.json
```



### Run

```bash
$ npm run start 

$ npm run start:dev
```

> `http://localhost:3000/`

