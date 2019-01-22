---
path: "/React-Native-3"
date: "Jan 4, 2109"
title: "How to use “react-native init” from scratch"
sub_title: "Playing around React Native — #3"
author: "Matheswaaran"
category: "React Native"
image: '../images/blog/RN-1.jpeg'
---

Hello folks, here we are going to get started with a new react native project. But we need to set-up the environment for it. To do so see my previous post.

The basic Project Environment setup for a React Native Application using react-native-cli.
medium.com	
To convert your awesome ideas to Applications we should the basic things like what are the files present and what it does in an empty react native project. We are going to see these details in this post.

To get started we are gonna create an empty project using “**react-native init**”. Try out the following command in a Terminal or Command Prompt.

```console
react-native init YourAwesomeProject
```

> **Note:** Replace <YourAwesomeProject> with your own project Name.

This command will create some files and install all the required packages for a common basic React Native app. Some of the basic packages required are “react, react-native, babel” and so on.

You will find a folder with the name YourAwesomeProject where you executed the command. Open it in any of your favorite IDEs(Webstorm, VSCode or Sublime Text).

You will see a lot of files and folder in that directory as I shown below. Now let us discuss the usage and purpose of all the files and directories created.

#### android/
This directory contains a native Android application like the one developed in Android Studio. Here you can change the package name of the application, generate release builds change Gradle configurations, dependencies and so on.

#### ios/
This directory contains a native iOS application like the one developed in Xcode. Here you can change the bundle identifier, app version, adding and using cocoapods, changing between debug and release builds and so on.

#### node_modules/
This directory contains all the node packages and their dependencies required for a basic React Native application. We can add more packages to it using “npm install” command.

#### index.js
In this file, we specify the component that has to be mounted after the app is launched. This operation can be done using the following code found here.

```javascript
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
AppRegistry.registerComponent(appName, () => App);
```

The app is the component that is exported form “App.js” file and appName is a string that denotes the name of the application mentioned in the app.json file. “AppRegistry.registerComponent()” registers the component “App” to the respective directories based on the platform.

#### App.js
Here, we define the App component which is imported in “index.js”. The App component can be a functional or a class component using the lifecycle methods like render(), componentDidMount() and so on.

#### app.json
This file contains the name and display name and display name of the Android and iOS applications.

#### package.json
This file contains all the meta-data relevant to the project like project name, author, Project URL, etc., and the node packages that are installed in the project. It also does so much more like its mentioned here.

#### .babelrc
This is the configuration file for the Babel package. Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backward compatible version of JavaScript in current and older browsers or environments.

#### .buckconfig
This is the configuration file for the Buck package. Buck is a build system developed and used by Facebook. It encourages the creation of small, reusable modules consisting of code and resources, and supports a variety of languages on many platforms.

#### .flowconfig
It is the configuration file for the Flow package. Flow is a static type checker for your JavaScript code. It makes you write code faster by checking the syntax and some logic of the codes.

#### .gitattributes
A “.gitattributes” file is a simple text file that gives attributes to pathnames. Each line in this file is of the form: “pattern attr1 attr2 …”. Check out here to know more.

#### .gitingnore
This file contains all the name and type of files and directories that should not be included in the git repository of the project. Check out here to know more.

#### .watchmanconfig
Here exists the configuration of the watchman package. Watchman monitors the files of the project for any changes and executes certain commands or functions you specified in “.watchmanconfig” file.

That’s all folks, now you should have a pretty good idea about what each file does in a basic React Native project. On the next post, we will see about creating your first application and running it in debug and release mode.

“Running your first ReactNative App” post is being cooked, will be served hot soon in my next post.

Say Hi, Its free. [@matheswaaran_S](https://twitter.com/matheswaaran_S) or [https://matheswaaran.com](https://matheswaaran.com)