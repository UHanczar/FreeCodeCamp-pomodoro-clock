//////
yarn init

Babel CLI comes with two executables: babel, which compiles ES6 files into new ES5 files, and babel-node, which you can use to replace your call to the node binary and execute ES6 files directly on the fly
/////
yarn add --dev babel-cli


babel-preset-env to install a Babel preset package called env, which contains configurations for the most recent ECMAScript features supported by Babel.

/////
yarn add --dev babel-preset-env


Create a .babelrc file at the root of your project, which is a JSON file for your Babel configuration. Write the following to it to make Babel use the env preset


NOW IT DOESN'T UNDERATAND 'import' YET;

ESLINT
Check out Airbnb's most recent instructions to install the config package and all its dependencies correctly. As of 2017-02-03, they recommend using the following command in your terminal: slint-config-airbnb, eslint-plugin-import, eslint-plugin-jsx-a11y, and eslint-plugin-react

//////
yarn add --dev eslint-config-airbnb@latest

because it installs only eslint-config-airbnb, so you should install these too

/////
 yarn add --dev eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react

 --create .eslintrc.JSON and extends airbnb

 --install eslint precisely
 /////
 yarn add -D eslint

 --add test script "eslint src"


 --Compat is a neat ESLint plugin that warns you if you use some JavaScript APIs that are not available in the browsers you need to support. It uses Browserslist, which relies on Can I Use.

/////
 yarn add --dev eslint-plugin-compat

--and write in pacckage.json
"browserslist": ["> 1%"]

--and in eslintrc in rules 'compat/compat': 2

--add nodemon.  Nodemon is a utility to automatically restart your Node server when file changes happen in the directory.
/////
yarn add --dev nodemon

--change package.json like
"start": "nodemon --ignore lib --exec babel-node src/app.js"
