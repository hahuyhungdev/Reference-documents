## ENVIRONMENT VARIABLES

**Note: environment and tools**
<br/>
Versions in the project:

- Node: v14.20.0 ( you can use nvm to manage node versions )
- Yarn: v1.22.19

  **Note: Should and must use yarn. While NPM installs dependencies in sequence, Yarn installs in parallel. As a result, Yarn performs faster than NPM when installing larger file. Newer versions also provide a more secure form of version locking.**

## Points to pay attention to in this project:

- Because the application requires realtime continuously from the moment you enter the website, managing components and states will be difficult while the server is firing continuously. Impact on website speed and performance
- This project uses typescript so need to properly format the types of data and props, state. That will help factory code, Write clean, standard, easy to maintain code, easy to expand later, when it works well, there will be very few bugs.
- The project uses canvas a lot, so they have to study canvas and maybe the dev will have to study ThreeJs (3D programming framework for Web on webGL, (openGL)) and threejs is quite difficult to learn.

  **All of the above are noted until March 1, 2023**

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn server`

Runs the server in the development mode.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
