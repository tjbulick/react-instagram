## Тестовое React-приложение: Instagram
### Что используется / применяется: 
SPA-приложение, то есть верстка одной страницы. Крупных компонента два - лента и профиль.

Переключение между страницами сделано с помощью react-router.

В самой верстке практически везде, где можно, применяется переиспользование компонентов.

Данные подгружаются асинхронно из базы данных. В качестве примера на dev-сервере использовался json-server с файлом src/posts.json

## Запуск локально

Вам потребуется два разных процесса для запуска двух локальных серверов: для базы даных и самого приложения. Это могут быть две разные вкладки в терминале.

Также потребуется глобальная установка json-server. Это маленький npm-пакет, который будет эмулировать удаленную базу данных. В первой вкладке терминала запустите:
```
$ npm install -g json-server
$ json-server --watch src/posts.json --port=3001
```
База данных запущена и готова принимать запросы на номер порта, который вы указали при запуске. Теперь нужно запустить локальный сервер с самим приложением, предварительно указав порт базы данных в файле instaService.js, по умолчанию установлен 3001. Само приложение запустится на порту 3000. В другой вкладке выполните:
```
$ npm start
```
Теперь локальный сервер с самим приложением запущен. Вкладка с приложением должна открыться автоматически.

Выглядит примерно так: ![alt](./react-instagram.png)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

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

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
