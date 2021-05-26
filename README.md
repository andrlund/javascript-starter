# Javascript-starter
 A bare bones NodeJS, JavaScript starter project with testing. It uses (Rollup)[https://rollupjs.org/guide/en/] for module bundling and (Jasmine)[https://jasmine.github.io/] for testing. Please note, this project is not meant for development of apps meant to run in a browser.

 ## Installation

 After `git clone https://github.com/andrlund/javascript-starter.git`:

```bash
npm install
```
## Build

The starting point for your code is ./src/app.js and are built/bundled by:

```bash
npm run build
```
The build script will put a bundled file (./dist/app.js) into the dist folder.

## Run

Run the app with: 

```bash
npm start
```

## Test
Tests, including Jasmine describes and its are written in ./test/test.spec.js. At this stage, the only support for multiple spec files is by means of importing spec files into ./test/test.spec.js.


The tests are run in watch mode. First, start the build process for the tests:

```bash
npm run test:build
```

Second, start the test runner:

```bash
npm run test:run
```

## Todos

Tests are supposed to be both built and executed, through:

```bash
npm run test
```

However, the output of the build process seems to take precedence of the output of the test report. Thus, it is invisible to the developer.

