/*
  OVERVIEW OF MODERN JAVASCRIPT:

  The way we write javascript has changed tremendously in last couple of years. Now we compile ES6 javascript and even newer versions of javascript code down to ES5. We use module bundlers, task runners,
  external packages and other dev tools.

  WEBPACK:

  The web applications are becoming large and large and therefore writing all of the code in one single css file or javascript file becomes unmanageable very quickly. Now we can simply write the code in
  different javascript files and then use these files as a script tag in our html file. However problem with this is that most of these javascript files are dependent on each other and our code will not
  work correct if we didn't used them in correct order. Similarly we might have external dependencies as well like 'jquery.js', 'lodash.js', 'bootstrap.js' etc. So what will webpack do is that it will
  bundle all of these internal and external dependencies into one 'bundle.js' (we can use any name) file. Similarly it can also bundle different css files into one big css file.

  We also need to use ES6 modules in order to make our code more moduler and easier to maintain by seperating different parts of our apps into different files. In ES6 we can do that by implementing modules.
  However the problem with these modules is that right now browsers do not support that functionality yet and so we have to bundle these modules together into a single file using something called a module
  bundler. The most popular module bundler is called 'webpack'. Now webpack can do so much more than just bundling modules, like code splitting, loading many types of assets like 'sass' or 'images', decreasing
  our javascript bundle size using an algorithm called 'tree shaking' and much much more and we willl look in mose of these.

  SETTING PACKAGE.JSON FILE:

  Because we already have node and npm installed in our system we will simply go ahead and create the 'package.json' file for our project. So after navigating to our project directory using terminal, we will
  write 'npm init' and complete the detail wizard. Now the 'package.json' should appear in our project directory.
  
  INSTALLING WEBPACK:

  We will install webpack npm package and we will save this as a development dependency of our project. So we will write 'npm install webpack --save-dev'. Now these packages that we installed as '--save-dev'
  or just 'save', they are locally installed and this means they are installed only for this project. But we can also install packages globally and we can use and access these packages from anywhere from our
  computer.

  CONFIGURING WEBPACK:

  We are going to use webpack version 4 which is the latest version at the moment and this version comes with a 'zero-configuration' option where we don't even need a configuration file. If we want to do that
  we will just need to have one 'src' folder in the root and in this 'src' folder one 'index.js' file and then webpack will automatically create the 'distribution' folder and put the bundled file in there.
  But this option is just for very small apps and we are not going to do that and instead we will write some configuration. So first we will create the 'webpack.config.js' file in the root folder. In this
  file we will have just one object (i-e '{}') in which we will have all of the configuration for webpack. We will also need to export this object by writing 'module.export' (node.js syntax for exporting a
  module) before this object so that webpack can take it and work with it as required. 
  
  To configure webpack we need to know that in webpack there are four core concepts called 'entry point', 'output', 'loaders' and 'plugins'. 
  
  ENTRY POINT: 
  
  So first thing that we will do in the object is write the 'entry' property and this will be the path to our main javascript file that this 'webpack' will take and start looking for all of the dependencies 
  and after that webpack will bundle all of these together. So we don't need to tell webpack about all of the javascript files, instead we will simply tell the webpack one file which imports all of other files
  and webpack will then look into that file and get all of the dependencies and dependencies of the dependencies and so on. This way we don't have to worry about the order of the files. Now our app can also 
  have more than 1 entry point files but in our case we have only one and that is 'index.js' file in the 'src' folder.
  
  OUTPUT DIRECTORY AND FILE:

  Next we need to define the 'output' property which will tell webpack where to save our bundled file. Now for 'output' property we will actually create an object and in this object first property will be the
  'path' and then the 'filename' as second property. Now 'path' needs to be an absolute path and to define that path we will use a built in node package called 'path'. So first we will require it and save in
  a variable called 'path'. Then we will use the 'path.resolve()' method and first input into this method will be '__dirname' and second input will be the path from the 'root' directory of our app which in
  our case will be 'dist/js'. Then for 'filename' we want it to create a filename by the name of 'bundle.js'. However we can't set it to simply 'bundle.js' because if we do so then webpack-dev-server will 
  bundle our modules fine but then it tries to inject this 'bundle.js' into an html file that is in the same folder i-e 'dist/js' which is not the case because actually our html file is in 'dist' folder and
  not in the 'dist/js'. So what we will do is instead of setting 'path' to 'dist/js' folder we will set it to 'dist' and for file name we will make it 'js/bundle.js'. All we are doing is that instead of 
  setting the output folder to be 'dist/js' we are setting it to be entire 'dist' folder.

  


  WRITING SCRIPTS AND INSTALLING WEBPACK-CLI:

  One last thing that we need is to add an npm script for opening webpack. So in the script section of package.json file we will add an script 'build' and set it to 'webpack'. And now whenever we will write
  'npm run build' the webpack will open, it will look in our configuration file and bundle the modules into one big 'bundle.js' file. We need to create the script for it because it is the best way to launch
  our locally install dev dependencies like webpack. However in order to make this work we actually need to install 'webpack-cli' which allows to access the webpack from the command line interface. So we
  will install 'webpack-cli' using 'npm i 'webpack-cli --save-dev' command.

  Then we will just need to write 'npm run dev' in our terminal and that will make the 'bundle.js' file in our 'js' folder. Next we will create 'index.html' file and at the botoom we will add an script to 
  include this 'bundle.js' file.



                          WEBPACK.CONFIG.JS:

                                            module.exports = {
                                              entry : './src/js/index.js
                                              output : {
                                                path : path.resolve(__dirname, 'dist'),
                                                filename : 'js/bundle.js',
                                                publicPath: '../'                       // So we are saving the bundle.js file in the 'dist/js/bundle.js' and later we will also output our html templates
                                                                                        // in the 'dist/views' directory. So by setting the 'publicPath' property to '../' we are setting the 'src' attribute
                                                                                        // of the script tag in our html to '../js/bundle.js'.
                                              }
                                            }

                          PACKAGE.JSON:
                                           "scripts": {
                                                        "build": "webpack"
                                                      }


  WEBPACK LOADERS:
  
  Webpack was designed to bundle all of our dependencies into one single file. But what kind of dependencies are we talking about here. Usually dependencies are other javascript modules that our main javascript
  file needs in order to do its job. However webpack can do more than that. In webpack we can import css files into javascript files (we will get into why we need to do that). We can import sass, less,
  handlebars, xml and so much more. Javascript loaders are the libraries that help us to do all of this stuff. Next we will use various loaders that we need most of the time in our application.

  1) HANDLING IMAGES WITH WEBPACK:

    WHEN WE ARE USING IMAGES IN JAVASCRIPT FILE:

    With webpack we can import images in our javascript files. So lets say we need to create (inject) an img element in our html from our javascript using an image that we have saved in our project folder.
    We know that html img element also has 'alt', 'width', and 'src' attribute, so we create the img element as follows:

                                            import Kiwi from './kiwi.jpg'

                                            function addImage() {
                                              const img = document.createElement('img');
                                              img.alt = 'kiwi';
                                              img.width = 300;
                                              img.src = Kiwi

                                              const body = document.querySelector('body');
                                              body.appendChild(img);
                                            }

                                            export defaul addImage;

    So first we are importing the image from the file system and saving it in variable 'Kiwi'. Next we are creating a function that will create the img element and then append it in the body of our web app. 
    Finally we are exporting this function so that we can import in our main js file. Next in our main js file we will import and invoke this function.

                                            import addImage from './add-image.js';

                                            addImage();

    However this won't work yet because webpack doesn't know how to deal with the images imports. In order to tell webpack we will create another field in our 'webpack.config.js' file called 'module' and this
    will be an object. Inside this object we will have another property called 'rules' which will be an array containing javascript objects. For each of the object we create a 'test' property and for test
    property we write regular expression. For images we will write regular expression to test for if the img ends with the '.png' or '.jpg' extension. Second property inside the 'rules' object is called the
    'use' property and it is an array and inside this array we need to specify which loader should webpack use when it needs to import png or jpg files. In this case we will use 'file-loader'. 
    
    
                                            module: {
                                              rules [
                                                {
                                                  test: /\.(png|jpg)$/,
                                                  use: [
                                                    'file-loader'
                                                  ]
                                                }
                                              ]
                                            }
    
    So what will happen is that everytime our javascript file will try to import an image, webpack will check if it has a rule set for it in configuration file. If it doesn't find a suitable rule it will give 
    an error. Now for some kind of files webpack doesn't need to have a rule set and it knows how to import such types of files by default without any rules set configuration. Example for such type are javascript
    files. For js files webpack doesn't need any loader or rules. However for other kind of files webpack will first check if it has a defualt way to deal with that file type. In case of images it doesn't so
    it will go in the rules and check if we have defined the rule set for that file type. 

    Now we need to install the 'loaders' that we are using. In this case we will need to install the 'file-loader' and we install it as an npm package.

                                            npm install file-loader --save-dev

    Now when we will run webpack using the scripts that we wrote, we will see that the image is not loaded and we will get the error in console saying "file not found". However when go to the 'Elements' tab
    we will see that 'img' element is created however the src attribute is not correct. Actually what happens is that webpack will go into the javascript file and for image it will create a copy of that image
    into the 'dist' folder and changing its name from 'kiwi.jpg' to md5 hash and then the jpg extension. Then for the 'src' attribute of 'img' element in our html file it will simply put that name. However
    note that our index.html file is in 'src' folder but the image is in the 'dist' folder so our index.html file won't be able to find it. In short we need to tell webpack where our image is located i-e in
    the 'dist' directory. For this we will need to add another in the 'output' object by the name of 'publicPath' and set it to 'dist/' (ending slash is important).

                                    
                                        WEBPACK.CONFIG.JS:

                                            module.exports = {
                                              entry : './src/js/index.js
                                              output : {
                                                path : path.resolve(__dirname, './dist'),
                                                filename : 'bundle.js',
                                                publicPath : 'dist/' 
                                              }
                                            }

    And now when we will the the 'npm run buid' script our index.html file will have an image element with the correct src attribute something like 'src=dist/s5d4f65sd4f654s6adf4.jpg'.
    
    
    Now lets assume that we deployed our website and registered the domain 'http://the-most-awesome-website.com'. Then in order to correctly show our images in this domain we will change the public path from
    'dist/' to 'http://the-most-awesome-website.com/'. And now if we build this our 'src' will be 'http://the-most-awesome-website.com/sa56f4s65f45ds4g64.jpg'.

    WHEN WE ARE USING IMAGES IN HTML FILE:

    Now we have seen how to deal with the images that are being imported in the js files but webpack still won't be able to handle the images that we have used directly in our html files. Also it will be nice 
    to have the same name in the output file and also we will want to set the sub directory inside the 'dist' directory by the name of 'img' where we will want to put all of the output images. We will create 
    the following configuration:

                                          {
                                              test: /\.(jpe?g|png|gif|svg|ico)$/,
                                              use: [{
                                                loader: 'file-loader',
                                                options: {
                                                  name: '[name].[ext]',           // Output filename will have the same name as the original image
                                                  outputPath: 'img/',             // All of the images will go in the 'img' directory inside the 'img' directory
                                                  esModule: false,                // By default when we compile our modules in the 'src' attribute of our output
                                                                                  // html file, for each of the img's 'src' attribute will be like [object module]
                                                                                  // and won't have the correct src path. To get our 'src' attribute to resolve
                                                                                  // correctly we can either do something like following for all of our images src
                                                                                  // attribute:

                                                                                  //    <img src="require('assets/logo.png').default"/>

                                                                                  // The 2nd option that we can use is to use 'esModule' and set it to false and
                                                                                  // this is what we are doing here. 
                                                }

                                              }
                                              ]
                                            }


    HANDLING CSS WITH WEBPACK:

    WHEN WE ARE CREATING A COMPONENT IN JAVASCRIPT:

    One of the coolest things that Webpack allows us to do is to import the css files into the javascript files. Now we have already seen how we can import the images in our javascript files but why being able
    to import css into javascript is a big deal? The reason is that the modern frameworks like react, it has become a best practice to divide our application into many small components. Each componenet
    has its own behavior described by javascript and styles described by css. So when the behavior and styles are in the same place then it becomes very easy to find bugs and correct them, add new features
    and use it multiple times.

    So to understand it how it is usefull lets create a new file called 'hello-world.js' and in it we will create a button and when a user clicks on it it will write hello world into the browser. By doing this
    we will also understand how the frameworks like react actually work under the hood. So we will create a directory called 'components' and inside it we will create another directory 'hello-world-button'
    and it will then contain the file 'hello-world.js'. We will create a 'Class' named 'HelloWorldButton' and the function of it will be to render a button and when somebody clicks on it it will write 
    'hello-world' into the browser.

    In order to do that we will use the 'render' method function in the 'class' and init we will create a button element with the caption of 'Hello World' and then append it into the body. And at the end
    we will export it in our 'index.js' file and after instantiating it we will call its 'render' method.

                                            hello-world.js

                                              class HelloWorldButton {
                                                render() {
                                                  const button = document.createElement('button');
                                                  button.innerHTML = 'Hello World';
                                                  const body = document.querySelector('body');
                                                  body.appendChild(button);
                                                }
                                              }

                                              export default HelloWorldButton

                                            index.js

                                              import HelloWorldButton from ./components/hello-world-button/hello-world.js;

                                              const HelloWorldButton = new HelloWorldButton();

                                              HelloWorldButton.render();

    And now if we run webpack we will get the button saying 'Hello World' in our browser. However this button doesn't do anything and also its without any styles. So lets go into our 'HelloWorldButton' class
    and add the functionality such that when we click on the button, a paragraph element saying 'Hello World' appears in our website. So before appending the button we will add following code in our 'render'
    function.
    
                                                button.onclick = function() {
                                                  const p = document.createElement('p');
                                                  p.innerHTML = 'Hello World';
                                                  body.appendChild(p);
                                                }

    Now everytime we will click on the button we will get the paragraph element saying 'Hello World'. However in most of the cases we will also want to have some styling applied on our button and 'p' elements.
    So we will use the 'classList' method on button and p and 'add' the 'hello-world-button' and 'hello-world-text' classes respectively. Then we will create a css file in the same directory and call it
    'hello-world-button.css' and init we will create following styles:

                                          'hello-world-button.css'

                                                .hello-world-button {
                                                  font-size: 20px;
                                                  padding: 7px 15px;
                                                  background: green;
                                                  color: white;
                                                  outline: none
                                                }

                                                .hello-world-text {
                                                  color: green;
                                                  font-weight: bold;
                                                }

    After creating it we will import this css file in our 'hello-world.js' file as follows:

                                          'hellow-world.js'

                                          import './hello-world-button.css';
  
    This is how the developers organize there code in modern front end frameworks like react. However webpack doesn't know how to import css files in javascript. In order to tell it we will go to our config
    file and create another object inside the 'rules' array. 
                                              {
                                                test: '/\.css$/',
                                                use: [
                                                  'style-loader', 'css-loader'
                                                ]
                                              }

    Notice that we can also combine multiple loaders inside one rule object and in case of using css in our js we need to use these two loaders. This rule tells webpack that each time it encounter css file it 
    should use 'css-loader' and 'style-loader' in order to import it. Now 'css-loader' will import the css while the 'style-loader' will create style text inside our html page and puts css into it. However we 
    need to install both of these loaders.

    Now when we run our webpack and refresh our webpage, we will see that our button has the above styled applied to them. If we go in our development console inside the element tab we will see that all of
    the above styles are injected in the html inside the 'style' tag. So css file itself is not referenced in our 'index.html' file as a link sheet, instead 'css-loader' will first convert the css code into 
    javascript representation and then 'style-loader' will then take that styles and kind of like inject them into the 'style' tag in our html file.

    WHEN WE SIMPLY WANT TO OUTPUT OUR CSS OR SASS FILES INTO OUTPUT DIRECTORY:

    However when we simply want to get our css or sass files to be compiled on the file and outputed in the output directory we will simply import that file in our main javascript file after all of the above
    options.

    HANDLING SASS:

    We can also write our styles using 'sass' or 'less' and webpack will make it work for us. First we will simply change our css file to 'scss' by renaming it and also change the styles as follows:

                                              'hello-world-button.scss'

                                                $font-size: 20px;
                                                $button-background-color: green;
                                                $button-font-color: white;
                                                $text-font-color: red;


                                                .hello-world-button {
                                                  font-size: $font-size;
                                                  padding: 7px 15px;
                                                  background: $button-background-color;
                                                  color: $button-font-color;
                                                  outline: none
                                                }

                                                .hello-world-text {
                                                  color: $text-font-color;
                                                  font-weight: bold;
                                                }

    We will import the sass file into our js file similarly as we did for css. Next we need to create the rule for handling our sass files in the 'rules' array. 

                                              {
                                                test: '/\.scss$/',
                                                use: [
                                                  'style-loader', 'css-loader', 'sass-loader'
                                                ]
                                              }

    The order in which we use the loaders is very important. Webpack actually loads the loaders from right to left. So it will first load 'sass-loader' and it will convert our 'sass' to css, then it will load
    the 'css-loader' which will take that converted css and convert it into javascript representation and only then webpack will invoke 'style-loader' which will create style text inside our html file and put
    css into the 'style' element. Nowever ofcourse we will need to install 'sass-loader'
    
    Now if we run the webpack again everything will be working and the new sass styles will be applied now.

  BABEL:
  
  We use babel to convert cutting edge javascript like ES6, ES7 or even ES8 back to ES5 so that all browsers are capable of understanding our code. In a few years from now it may not be necessary but for
  the time it is an important process in our development process. For example we are using the ES-6 'class' syntax to create and render the button. Now most of the browser support the class methods however
  they still don't support the class properties. So lets say we create a property for the button class as follows:
  
                                              class HelloWorldButton {
                                                buttonCssClass = 'hello-world-button';
                                              }

  And then modify the 'render' method and use this class property to add a class in our button element.

                                              button.classList.add(this.buttonCssClass);

  And now if we call webpack to build our project we will get an error and it will also suggest us that we should use the appropriate loader to handle the error. And webpack is right, we need to use a special
  loader called 'babel'.

  Babel is a javascript compiler in order to use next generation javascript today. In order to use babel we need to download couple of packages called 'babel-core', 'babel-preset-env' and 'babel-loader'. This 
  'babel-core' is the main babel package and contains the core functionality of the compiler, 'babel-preset-env' that takes care of converting all the modern javascript into ES5 and finally 'babel-loader' is
  needed for 'webpack' in order to actually load the babel files. Now we can install all of these as dev dependencies in one go:

                                            npm i babel-core babel-preset-env babel-loader --save-dev

  The first thing that we need is to add 'babel-loader' in webpack configuration because 'babel' is the one that will convert this 'ES6' back to 'ES5'. So to configure the loaders in 'webpack.config.js' 
  file we will add another loader inside the 'rules' array and for babel 'test' for all of the 'javascript' files and therefore we will write '/\.js$/'. And for the use property we will use 'babel-loader'
  One more option that we can specify is 'exclude' which allows us to exclude certain folders. Now we need to do that because we don't want to convert the javascript files inside the node modules. So we
  will use the 'exclude' property and set it to '/node_module/'.

                       WEBPACK.CONFIG.JS AFTER PLUGINS:
                       
                                            module: {
                                              rules: [
                                                {
                                                  test: /\.js$/,
                                                  exclude: /node_modules/,
                                                  use: {
                                                    loader: 'babel-loader'
                                                  }
                                                }
                                              ]
                                            }

  Next we also need to create 'babel configuration' file and for that convention is to use '.babelrc' as the file name. This is different from the 'webpack.config.js' file because it is not a javascript file
  and just a 'dot' file. Now in this file we will create an object and first property in this object is the "preset" property and it will be an array and in this array we will write 'env' which means that
  the preset that we want is 'env'. Now this 'preset' is a collection of code transforming plugins which are the pieces of code that apply actual transformation to our code. The 'preset' that we set here is
  the 'env' which stands for environment. We actually installed this before as a npm package 'babel-preset-env'. Now the environment here actually means the browsers and so along with 'env' we will also
  pass an object and inside that we will specify the "target" field and it will be another object. Now this object will contain the "browser" property which will be an array and in there we write something
  like 'last 5 versions'. By writing this 'babel' automatically configurs which ES6 features it need to convert in order to work in last 5 versions of all the browsers. Instead of 5 we can use any number. We
  can also say something like 'ie >= 8' which means that we want to configure the code to work with internet explorers version 8 or greater.

                                            {
                                              "presets": [
                                                ["env", {
                                                  "targets": {
                                                    "browsers": [
                                                      "last 5 versions",
                                                      "ie >= 8"
                                                    ]
                                                  }
                                                }]
                                              ]
                                            }

  Now there are some features or methods that cannot be converted into ES5 because they were not present in that version and there is no way that they can be converted. Such things need to be 'polyfilled'. 
  These include 'promises' or methods like 'Array.from'. Polyfilling means that we need to add these in our code. So promises are not present in ES5 but we can implement some code to include them in ES5 so
  that we can then use that features. And that is exactly what polyfill does. To do that we need to install a npm package called 'babel-polyfill' and because this needs to be included in our final files, we
  need it to be installed as real dependency and not dev dependency. 

                                            npm i babel-polyfill --save

  After installing it we need it to add in our 'webpack.config.js' file in our 'entry' point. Now we know that there could be multiple entry points and this is what we will do here. So now we will set the
  'entry' to be an array where first element will be 'babel-polyfill' and second element will be the path to our source javascript file i-e './src/js/index.js'. 

                                            entry: ['babel-polyfill', './src/js/index.js']

  And thats all that we need to configure babel.

  WEBPACK PLUGINS:

  Previously we used loaders for importing different files into javascript files and bundling javascript modules as well. However sometimes we need to do something more than just importing the other files.
  Plugins are additional javascript libraries that do everything that loaders cannot do. For example we can declare 'global constants, we can minify our bundle.js file so that it takes less space and we
  can also generate more files other then 'bundle.js'.

  MINIFICATION OF THE RESULTING WEBPACK BUNDLE:

  In order to minify our 'bundle.js' file we will add a special plugin called 'Terser Plugin'. First we will install this plugin as an npm package.
  
                                            npm install terser-webpack-plugin --save-dev

  Now to use plugins we will create a new property 'plugins' after the module property and it will be an array. We will first import this plugin and then in the 'plugins' array we will simply create a new 
  instance of it and also import this plugin at the top of our config file.

                                            const TerserPlugin = require('terser-webpack-plugin');

                                            plugins: [
                                              new TerserPlugin()
                                            ]

  And now when we will run webpack our 'bundle.js' file will be minified and will be taking much less space than before. Now previously uglify was used mostly and we can use that too for minifying our js files
  but now using 'terser-webpack-plugin' is a recommended way to minify our js files.

  EXTRACTING CSS INTO A SEPERATE BUNDLE WITH 'mini-css-extract-plugin':

  Now previously we used 'css-loader' to import the file into the javascript file and then 'style-loader' to inject the style in the 'style' tag in the HTML element. Now this is fine for development purposes
  however this is not good for production. The problem is that our bundle.js file will become very big and it will take longer time to load our website. So instead of that we will extract all of the styles
  and generate a seperate css files alongside the bundle.js file. 
  
  In order to do that we will install the 'mini-css-extract-plugin' and then use it by creating a new instance of it after requiring it.

                                            npm install mini-css-extract-plugin --save-dev

                                            const MiniCssExtractPlugin = require('mini-css-extract-plugin');

                                            plugins: [
                                              new TerserPlugin(), new MiniCssExtractPlugin({

                                              })
                                            ]

  Now we can pass some options into this plugin by creating an object inside the parenthesis.

                                            new MiniCssExtractPlugin({
                                              filename: 'styles.css'
                                            })

  Next we also need to modify our 'css' and sass' loaders  rules as well. So in 'css' rule instead of 'style-loader' we will now use 'MiniCssExtractPlugin.loader'. Similarly for sass rule we will instead of
  'style-loader' we will use 'MiniCssExtractPlugin.loader'.

  And now when we will run webpack we will get 'styles.css' file along with the 'bundle.js' file in the 'dist' folder and init all of the styles will be present that we wrote in our original css file. However 
  it won't be automatically used inside our 'index.html' file which is in the 'src' directory so we will create a new 'link' tag and put the address of it in the 'href' attribute.
  
                                            <link rel="stylesheet" href="./dist/styles.css"/>       // Don't know why didn't we used '../dist/styles.css'

  Now lets create another component called 'heading' and what it will do is simply create a heading element saying 'Webpack is awesome'.

                                            heading.scss

                                            p1 {
                                              color: grey;
                                            }

                                            heading.js

                                            import './heading.css';

                                            class Heading {
                                              render() {
                                                const h1 = document.createElement('h1');
                                                h1.innerHTML = 'Webpack is awesome'

                                                const body = document.querySelector('body');
                                                body.appendChild(h1)
                                              }
                                            }

                                            export default Heading;
  And then in our main js file we will import it and use it by creaing an instance of it and calling its 'render' method.
  
                                            index.js

                                            import Heading from './components/Heading/heading.js'

                                            const heading = new Heading();

                                            heading.render();

  Now our index.js file is importing two components and calling each of it's render method. So what will happen is that styles from both sass files will be compiled and bundled into 'styles.css' inside the
  'dist' directory.

  BROWSER CACHING:

  Every time a user goes to or refreshes a webpage the browser will have to download all of the javascript and css that it needs to render that page. However we can implement browser caching. What this does
  is that browser will save the javascript file in a place called 'cache' and if the user loads the same page the browser will simply use the cached js file. However this will cause a problem. Imagine if we
  have changed something in javascript code (may be because of an event listener) then that change will not appear to the user because user is simply loading the old js file without new changes. So we need
  a mechanism such that if nothing is changed then the browser uses the same cached file however if there has been a change then it should download that new file. 
  
  One of the popular approaches for this is to create a new bundle with a different name everytime we have changed something in our js file. However instead of changin the js file name manually we will use
  webpack to do that for us. So previously for output we used the filename as 'bundle.js' but now we will change it to 'bundle.[contenthash].js'. What will happen is that everytime something is changed a
  new js file will be created in dist directory and it will be something like 'bundle.s5f465sad4f65s4df.js'. We can implement the same approach for css files and in our 'plugins' array, for the 'filename'
  property of 'mini-css-extract-plugin' and change it from 'styles.css' to 'styles.[contenthash].css'.

  And now everytime something is changed in our 'css' or 'js' files new files will be created. However the problem with this will be that our 'dist' folder will become very cluttered very soon so we need to
  clean it. Webpack has a plugin called 'clean-webpack-plugin' for this purpose. So we will install and require it and then use it by creating a new instance of it in the 'plugins' array.
  
                                            npm install clean-webpack-plugin;

                                            const CleanWebPackPlugin = require('clean-webpack-plugin');

                                            new CleanWebPackPlugin();

  And now if we run 'webpack' it will simply clean all of the old js files and only keep the updated one.

  GENERATING HTML FILES AUTOMATICALLY DURING WEBPACK BUILD PROCESS:

  The problem is that our website (index.html) will not be able to load the js and css files because the filenames for both of these files will be changing everytime something changes in our js or css because
  of the [contenthash] we are using inside the 'filename' property. So we need to update the src attribute for scripts and href attribute for 'link' tag, however instead of doing this manually we will do it
  using another plugin called 'html-webpack-plugin'.

  So what this plugin does is that it will copy the code from our html page i-e index.html from 'src' directory and it will create a new index.html file into the 'dist' folder and then automatically inject 
  the bundle js script and style sheet link into that new html file. So we will install it as a npm package and require it as 'HtmlWebpackPlugin' in this 'webpack.config.js' file. Then in the plugins array 
  we will will use it by creating its instance. 
  
                                            npm install html-webpack-plugin;

                                            const HtmlWebpackPlugin = require('html-webpack-plugin');

                                            new HtmlWebpackPlugin();
  

  After doing that when we start the webpack again then our web page will open with all of the html and it copied all of the code from the './src/index.html' file. However we have one thing to adjust now and
  that is the 'href' and 'src' attributes will have the 'dist/' prefix before the filenames however now our 'index.html' is also in the 'dist' folder so we don't need that prefix anymore. This prefix is coming
  from the 'publicPath' property in the 'output' property object which we have set to 'dist/'. So now we will change it to empty string. Now if run our build again we will see that we don't have any prefix 
  before our js and css filenames and our website should work properly.

  However if we look into the newly generated html file we will see that the webpack has change the title to 'webpack app' while before it was something that we used here. In order to make it so that title 
  will always be what we want then we can pass some options object to to the 'HtmlWebpackPlugin'. Now can change the 'title', 'filename' and also 'meta' tag as follow:

                                            new HtmlWebpackPlugin({
                                              title: 'Hello World',
                                              filename: 'subfolder/custom_filename.html',
                                              meta: {
                                                viewport: 'width=device-width, initial-scale=1'
                                              }
                                            })

  So now if we run our build we will another folder in the 'dist' folder with the name of 'subfolder' and it will contain 'custom_filename.html' file init and it will have the 'meta' tag that we specified.
  Now there are also many other options that we can pass here and we can go and take a look in the github repository for this 'html-webpack-plugin'.

  INTEGRATION WITH TEMPLATING ENGINE:

  This 'html-webpack-plugin' also allows us to use create our own templates using different template engines like 'pug', 'ejs', 'handlebars' etc. Lets say we want to use the 'handlebars' for our templates
  so first we will create a new template with the 'hbs' extenstion in the src directory ('hbs' is the extension of 'handlebars' files). Next we will need to create a new loader rule in the 'loaders' property 
  and test for 'hbs' files and use the 'handlebars-loader' to load the handlebars files.

                                            {
                                              test: '/\.hbs$/',
                                              use: [
                                                'handlebars-loader'         // We need to install this loader as well.
                                              ]
                                            }

  Next inside the options object of the 'html-webpack-plugin' we will create another property called 'template' and set it to 'src/index.hbs'.

                                            new HtmlWebpackPlugin({
                                              title: 'Hello World',
                                              template: 'src/index.hbs'
                                              }
                                            })

  After installing the handlebars-loader if we run the build command again we will get the 'html' file and it will use the 'index.hbs' template for building it.

  WHEN WE ARE USING PLAIN HTML WITHOUT ANY TEMPLATING ENGINE:

  If we are not using any templating engine we will test for '.html' files and use the 'html-loader'. Then in the instance of our 'html-webpack-plugin' we will use the 'template' property and set it to the
  address of the source html file.

                                            {
                                              test: '/\.html$/',
                                              use: [
                                                'html-loader'
                                              ]
                                            }

                                            new HtmlWebpackPlugin({
                                              title: 'Hello World',
                                              template: 'src/index.html'
                                              }
                                            })

  MORE PLUGINS:

  In webpack it is said that everything is a plugin and that is because we have a plugin in webpack to handle every kind of files. If we need to add a feature we will simply search for that plugin that gives
  us that functionality and use it in our webpack configuration file.

  DEVELOPMENT AND PRODUCTION MODE:

  We can build our final files in two ways depending upon our environment. Usually when we want to build the files for production we want these to be small in size so we want these to be minified. However when
  we are in development we want to see some additional information inside our javascript code, for example source maps. So what we will do is first we will look at the differences between production and
  development builds and how to make our webpack configuration so that it serves for both kinds.

  From webpack 4 we have a special option called 'mode' which enable certain built in optimizations for production built and developmeent built. The 'mode' property comes after the 'output' property and can
  take one of the 3 values i-e 'none', 'production' or 'developmenet'. Now if we set the 'mode' to 'production', it will enable a long list of plugins including the terser-plugin, even if we don't have used
  that plugin in our plugins array. Along with that it will do following things:

          1) Sets 'process.env.Node_ENV' to value of 'production'
          2) Enables many more plugins along with terser plugin

  In order to understand this we will also create an if condition in our main 'index.js' file that will simply check the value of 'process.env.NODE_ENV' and depending on its value it will either log 'Production
  mode' or 'Development mode'. Another difference is that these two modes also handle errors differently. So to test for that also we will delibrately create a error by calling a method from our button class
  that is not defined.

  After doing all of that if we start build process we will get a minified version of bundle.js file. And if we open chrome developer tools we will get a log of 'Development mode' and also an error saying that 
  'something is not a function'. However it won't tell us the exact location of the error and simply tell that the error is in line 1 of bundle.js file and if we click on that error it will get us to that 
  minified file. It is very hard to understand anything from there.

  So we will simply change the mode to 'development' and now if we run the build script again again we will get the log in our chrome console saying 'Production mode' and an error saying that it is not a 
  function. However this time we will get specific information that 'hellowWorldButton.methodThatDoesNotExist' is not a function and also instead of pointing us to the built bundle.js file it will point us
  to 'index.js' file along with the line number. This is because development mode uses source map by default.

  MANAGING WEBPACK CONFIG FOR PRODUCTION AND DEVELOPMENT USE CASES:

  So what we need is that while developing we will set the 'mode' to 'development' but later when we will want to build the files for production we will come back here and change it to 'production'. However
  this is not very convenient. So instead we will create two seperate configuration file, one for production builds namely 'webpack.production.config.js' and one for development builds and we will name it
  'webpack.dev.config.js'. All of the code will be same but we will simply change the 'mode' property in them.
  
  Now from 'webpack.production.config.js' we will remove terser plugin because it is included by default in production mode. Everything else is ok.

  From 'webpack.dev.config.js' we will 'remove' [contenthash] which we used for browser caching because we won't need it while developing. We will also remove terser plugin from here because we don't need
  to minify in development mode. We will also remove 'mini-css-extract-plugin' from this file because we don't need to extract the css from the js and create a seperate css file (not sure if we should do this).

  In order to run these files we will create two seperate scrips in our 'package.json' file.

                                            "build": "webpack --config webpack.production.config.js",
                                            "dev": "webpack --config webpack.dev.config.js"
  
  THE WEBPACK DEV SERVER:

  Now every time when we update our code we will have to run the 'npm run dev' in our terminal and then manually reload the page. So it is waste of our time as a developer and the solution is to add the 
  webpack development server. So to install it we we will write 'npm i webpack-dev-server --save-dev' in our terminal. After installing we will need to add some configuration in the 'webpack.dev.config.js' 
  file. So after 'mode' field we will add another field by the name of 'devServer' and for its value we will set it to another object. In this object we will pass 3 options. First options is 'contentBase' 
  and this will be the folder from where the webpack serves our files and in our case that is the 'dist' folder but we need to specify the absolute path. Next field that we need to specify in this object
  is 'index' and it will take the name of our html file which is 'index.html'. Final option that we need to specify is the 'port' and lets set to 9000.

  Next we will create another script in package.json file called 'watch' and set it as follow:

                                            "watch": "webpack-dev-server --config webpack.dev.config.js --hot"

  MULTIPLE PAGE APPLICATIONS:

  Until now we have benn using webpack in order to take all of our modules and put them together in one single bundle.js file and this bundle.js file contains all of our code. This approach is widely used
  for single page applications. However in some projects we need to have more than one page, specially if this html pages are rendered from the server side. So what happens is that depending on the request
  url server sends different html pages to the browser. So at the moment we have a hello-world page which simply has a heading and button but now we will create another page componenet which create a heading
  and and kiwi picture. Now it is also possible that these two pages have a common dependency like 'lodash' library. In that case we also need to handle these common dependencies.

  So what we will do is that we will make another component that that will create a heading and also an image element and we will call it 'kiwi-image'. So we will create a directory 'kiwi-image' and init
  we will create our 'kiwi-image.js' file, 'kiwi-image.sass' file and also import 'kiwi.jpg' file. In 'kiwi-image.js' file we will write following code:


                                            import kiwi from './kiwi.jpg';
                                            import './kiwi-image.sass';

                                            class KiwiImage {
                                              render() {
                                                const img = document.createElement('img');
                                                img.src = kiwi;
                                                img.alt = 'kiwi';
                                                img.classList.add('kiwi-image');

                                                const bodyElement = document.querySelector('body);
                                                bodyElement.appendChild(img);
                                            }

                                            export default class KiwiImage;

  Next in 'kiwi-image.sass' file we will create following styles:

                                            .kiwi-image {
                                              display: block;
                                              width: 400px;
                                              height: auto;
                                            }

  CODE SPLITTING IN WEBPACK: MULTIPLE JS AND CSS BUNDLES:

  Now what we want is to create two seperate bundles so that we can use one bundle for our 'Hello-world' page and other for the 'kiwi-image' page that we will create later. So we will create another js file
  in the 'src' directory and name it 'kiwi.js'. This will be similar to the 'index.js' as it will only import the 'Heading' component and 'KiwiImage' component that we created above.
  
                                            import Heading from './components/heading/heading.js;
                                            import KiwiImage from './components/heading/KiwiImage.js;

                                            const heading = new Heading();
                                            heading.render();
                                            const kiwiImage = new KiwiImage();
                                            kiwiImage.render();

  Next we will also rename the 'index.js' file to 'hello-world.js'.

  So now basically we have two seperate javascript files and each represent two different entry points that should be included in two different html files. So we will tell webpack to create two seperate js
  files out of these two files. So we will go into our configuration file and change the 'entry' property such that it will now become a object. Now in the entry object we will create a seperate field for
  each js file and there value will be the location of the file which will be used by webpack to get all of the code.

  And since now we have two seperate entry points and out of which we will get two seperate output files it will be nice that the names of the output files will also contain the name of the input files. At
  the moment these will be like 'bundle.s56f46s4f6s4f.js' but it should be something like 'hello-world.s5f46sf46s54f.js' and 'kiwi.5s4f654saf654.js'. In order to do that in the output property we will change
  the 'filename' property from 'bundle.[contenthash].js' to '[name].[contenthash].js' and now the in the output js files the [name] will be replaced whatever we used the keys in the 'entry' object.
  
                                            entry: {
                                              'hello-world': '.src/hello-world.js',
                                              'kiwi': './src/kiwi.js'
                                            }

                                            output: {
                                              filename: '[name].[contenthash].js',
                                            }

  We can do the same for our css files to change the names of output css files. In order to do that we will go into the 'mini-css-extract-plugin' and for the 'filename' we will also use '[name].[contenthash].css'.
  And now when we will run our build in the dist folder we will have 2 js files, 2 css files and one image file.
  
  GENERATING MULTIPLE HTML FILES:

  Now although we have created different bundles so that we can use them for our different html pages, but if we look at our output html file both of the js and also both of the css files will be included in
  that html file i-e in the 'index.html'. However instead of this we want to have two different html pages and then we want one js and css bundle on one page and other on the other html page. At the moment
  in our 'webpack config file we have used an 'html-webpack-plugin' which is looking at the 'index.hbs' file in the 'src' directory and whatever is in it, it will copy it to the 'index.html' file in the 'dist'
  directory and also include all of the js and css bundles into it. However if we want it to look at two seperate html files and then create two seperate html files we will create another instance of the
  'html-webpack-plugin' as follows:

                                            plugins: [

                                              new HtmlWebpackPlugin({
                                                filename: 'hello-world.html',         // Because we are creating two output files we should use custom names
                                                title: 'Hello World',
                                                description: 'Hello World',
                                                template: 'src/hello-world.hbs'       // We will also need to tell which template to use for this output file.
                                              }),

                                               new HtmlWebpackPlugin({
                                                filename: 'kiwi.html',
                                                title: 'Kiwi',
                                                description: 'Kiwi',
                                                template: 'src/kiwi.hbs'
                                              })
                                            ]

  However now we also need to tell webpack which bundles to include in which output template. For this we will use another property called '[chunks]' in the option object above and for its value we will use
  the name of the output js bundles and these will correspond to whatever we used in the 'entry' object for our js files names.

  So now when we will run build script we will get two html files naming 'hello-world.html' and 'kiwi.html' and only the js and css corresponding to them will be included into them.


*/