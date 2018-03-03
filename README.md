# React Native CSS modules example

[![Greenkeeper badge](https://badges.greenkeeper.io/kristerkari/react-native-css-modules-example.svg)](https://greenkeeper.io/)

<img src="images/react-native-logo.png" width="160"><img src="images/plus.svg" width="100"><img src="images/css-modules-logo.svg" width="170">

A simple example app that shows how you can use CSS modules with React Native and React (for browser).

Have a look at the `src` folder to see code examples.

Have a look at the documentation if you want to add React Native CSS modules to your own project:

* [React Native CSS modules](https://github.com/kristerkari/react-native-css-modules)

## Example App features

* React Native: uses [React Native CSS modules](https://github.com/kristerkari/react-native-css-modules)
* Web: uses [Webpack](https://webpack.js.org/) + [CSS modules](https://github.com/css-modules/css-modules).
* Web: uses [React Native for Web](https://github.com/necolas/react-native-web) to make most React Native elements work in the browser.
* Allows you to use both `className={myStyles.myClass}` and `style={{ color: "red" }}` properties on React Native elements such as `<Text>` or `<View>`.
* [Supports two syntaxes for using multiple classes](https://github.com/kristerkari/babel-plugin-react-native-classname-to-style#multiple-classes) that work with React Native CSS modules and regular CSS modules.
* Uses [Sass](src/Buttons.scss) and [CSS](src/ProfileCard.css) for styles, but you can choose which one to use.
* You can use platform specific file extensions, e.g. `styles.ios.scss`, `styles.android.scss`, `styles.native.scss`.
* CSS Hot reloading for both React Native and Web
* [Uses Stylelint config for React Native CSS modules](https://github.com/kristerkari/stylelint-config-react-native-css-modules)

## Setup

### Step 1: Install depencies to run React Native

Make sure that you have `react-native-cli` installed and [XCode](https://developer.apple.com/xcode/)/[Android Studio](https://developer.android.com/studio/index.html) installed and working.

* Go to "Building Projects with Native Code" tab and follow the guide: https://facebook.github.io/react-native/docs/getting-started.html

### Step 2: Clone this repo

```sh
git clone git@github.com:kristerkari/react-native-css-modules-example.git
```

### Step 3: Move to project and install project dependencies

```sh
cd react-native-css-modules-example
```

```sh
npm install
```

or if you use Yarn:

```sh
yarn install
```

### Step 4: Run React native packager

You can open a new terminal tab for the packager.

```sh
npm start
```

or if you use Yarn:

```sh
yarn start
```

### Step 5: Run App on Android/iOS/Web

First make sure that your Android emulator or iOS simulator is working, then:

```sh
npm run ios
```

or

```sh
npm run android
```

or

```sh
npm run web
```

or if you use Yarn:

```sh
yarn ios
```

## Screenshots

### iOS

![ios](screenshots/ios.png "iOS")

### Android

![android](screenshots/android.png "Android")

### Web

![web](screenshots/web.png "Web")
