## Set up parcel with preact

1. Create an empty directory.

2. cd to the directory, give command npm init and press enter for default setup.

* `npm init`

3. Install parcel bundler to the dev dependencies

* `npm i --save-dev parcel-bundler`

4. Install preact

* `npm i preact`

5. Create folder, example - src in this setup. Inside src create index.html and index.js

6. Create your components, main component in this setup is App.jsx

7. In package.json add scripts like - start or dev, build, test etc

### `"scripts": { "start": "parcel src/index.html", "build": "parcel build src/index.html" }`

* `src/index.html` is the entery point. Can customize your own.


## Start

`npm start` to start the app.
`npm build` to build the app.

Happy hacking!

## Advantages of Parcel

* Less configuration compare to webpack.
* No parser required for handling SCSS.
* Native Performance
* for more details visit `https://parceljs.org/`


