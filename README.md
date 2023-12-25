# Ts lowdb node

### node with typescript

```
npm init -y
configure typescript compiler, npm i --save-dev typescript
npx tsc --init , initialize the typescript project
```

* so to run the project now we are having two ways one is compiling the typescript file to js file and run it from dist
* another way is to run the ts file itself

```
  "scripts": {
    "start": "node dist/index.js", // Running compiled JavaScript
    "build": "tsc", // Compiling TypeScript to JavaScript
    "dev": "tsc -w" // Watching for changes and auto-compiling
  },
  you can see with build i.e tsc we are compiling the code and run it from the dist/index.js

  another way
  npm install -g ts-node

  "scripts": {
    "start": "ts-node index.ts" // Run TypeScript file directly
  }
```

* express itself having the routes use it i.e Router()
* setting up the swagger

swagger-ui
```
app.use('/api-doc',swaggerUi.server,swaggerUi.setup(swaggerDoc))
```

swagger.yaml using as swagger doc
```
openapi version
quick info i.e title, description, version
paths i.e method, description, summary, responses with status code
```
