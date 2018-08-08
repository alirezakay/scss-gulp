# scss-gulp
> Using gulp to compile scss files (sass format) automatically and create the corresponding packed and minified css file

## Getting Started

***Note That:*** by this tutorial, you'll be able to make a config for scss file to be parsed to css files with **[Gulp](https://gulpjs.com/)**  

And this tutorial is goog for the ones who want to use scss usages in **React Apps** created by `create-react-app` command.

### FIRST
Install the needed *Modules* by

#### npm
```
npm install --dev gulp gulp-cli
npm install gulp-sass gulp-clean-css gulp-uglify gulp-rename gulp-changed
```

#### yarn
```
yarn add --dev gulp gulp-cli
yarn add gulp-sass gulp-clean-css gulp-uglify gulp-rename gulp-changed
```

### SECOND
Add this file to the **root directory** of your project: **[gulpfile.js](./gulpfile.js)**

***NOTE THAT***

With this configuration, you give two `paths`.

One for ***SCSS Src File Path***

And the other for ***CSS File Destination Path***

> In default the src/dest is look alike below:
```
var SCSS_SRC = './src/assets/scss/**/*.scss';
var SCSS_DEST = './src/assets/css';
```

Change the path, where you intend.

### THIRD
Now, every thing is prepared to use the gulp command.

Open **Terminal** (or cmd), go to *gulpfile.js path* and type and enter the command below:
```
gulp
```

<hr />


### Authors
- ALireza Kavian

### License
This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details
