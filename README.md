This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Please see below React boilerplate for developer notes.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

### Concept

This web app is intended as a simple resourcing tool for teachers, allowing them to quickly build "fill-the-gap" style exercises. I have designed and built this MVP version with teacher user-case in mind:

Name: Tom. 
 
age : 30

education: Undergraduate degree
	
Works as a teacher in secondary school. 

As a teacher, Tom must prepare resources for up to five lessons a day. Amongst these, he must also prepare assessment for learning tools that give his students an opportunity to check there understanding of the topics covered in lessons. A standard approach to this is to create 'cloze exercises' out of summary paragraphs, with the keywords removed, for students then to fill in. However, creating these exercises manually is time consuming, involving fiddily wordprocessing work. These exercises then need ot be formatted for print. Tom would like a tool that instantly creates cloze exercises from a submitted paragraph and automatically formats it for mass printing. This would save hime significant time to spend on his other duties.
 

Comments at time of project submission:

Things I would like still to do:

- Implement a more refined version of the keyword selection system. I'm looking into react compatitible natural language toolkits such as retext to do this.

- Integrate ReactToPrint successfully. This may need the use of 'hooks', as Result component is currently built as a functional component. 

- Improve styling

