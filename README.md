# B Academy

This repository content is based on the Bootcamp of B.Academy.

The Bootcamp outline is available at [Bootcamp React.js](https://fdaciuk.notion.site/Bootcamp-React-js-B-Academy-04beed6c0dda4b79a28709b0f4cf6042)

I didn't participate of the official bootcamp but I've implemented all examples, challenges and projects to learn more about React.

# Contents

* [Introduction to React](/01)
* [JSX and Virtual DOM](/02)
* [Create React App](/03)
  * [Offical docs](https://create-react-app.dev/)
  * I'm using yarn so I use `yarn create react-app app-name`
  * It comes with Webpack config built-in so we can use a lot of features like import css files, use JSX, etc
  * We also have scripts to run a dev server with hot-reload, build our application, etc
  * CRA is like an awesome start point where we can get our hands dirty instead of thiking about configuration files, dev packages, etc
* [Exploring Create React App](/04)
* [DevTools, custom components and Fragment](/05)
  * Custom components are functions
  * We need to wrap our siblings tags with a parent tag
  * We can use Fragment to wrap our sibling children and don't render the parent
* [Props and Attributes](/06)
  * Props are the state of a component received as an argument
  * Components can receive arguments like a function
* [Children prop and component composition](/07)
  * We can access the content of a tag using the children prop
  * We can have components inside components allowing us to connect components to build our interface
