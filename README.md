# React Native CSS modules

**Quick links:** **[Features](#example-app-features)** • **[Screenshots](#screenshots)** • **[Documentation](https://github.com/kristerkari/react-native-css-modules#documentation)** • **[Try it](#try-it)**

<a href="https://facebook.github.io/react-native/"><img src="images/react-native-logo.png" width="160"></a><img src="images/plus.svg" width="100"><a href="https://github.com/css-modules/css-modules"><img src="images/css-modules-logo.svg" width="170"></a>

A simple example app that shows how you can use CSS modules with React Native and React (for browser).

Have a look at the [src](/src) folder to see code examples.

## Example App features

#### React Native and Web

* Allows you to use both `className={myStyles.myClass}` and `style={{ color: "red" }}` properties on React Native elements such as `<Text>` or `<View>`.
* [Supports 2 syntaxes for using multiple CSS classes](https://github.com/kristerkari/babel-plugin-react-native-classname-to-style#multiple-classes) that work with React Native CSS modules and regular CSS modules.
* CSS Hot reloading.
* Uses [Sass](src/Buttons.scss) and [CSS](src/ProfileCard.css) for styles, but you can choose which one to use.
* [Uses custom stylelint config for React Native CSS modules](https://github.com/kristerkari/stylelint-config-react-native-css-modules)

#### React Native specific

* Uses [React Native CSS modules](https://github.com/kristerkari/react-native-css-modules)
* You can use platform specific file extensions, e.g. `styles.ios.scss`, `styles.android.scss`, `styles.native.scss`.

#### Web specific

* Uses [Webpack](https://webpack.js.org/) + [CSS modules](https://github.com/css-modules/css-modules).
* Uses [React Native for Web](https://github.com/necolas/react-native-web) to make most React Native elements work in the browser.

## Try it

### Step 1: Install depencies to run React Native

Make sure that you have `react-native-cli` installed and [XCode](https://developer.apple.com/xcode/)/[Android Studio](https://developer.android.com/studio/index.html) installed and working.

* Go to "Building Projects with Native Code" tab and follow the guide: https://facebook.github.io/react-native/docs/getting-started.html

### Step 2: Clone the repo and move to project

```sh
git clone git@github.com:kristerkari/react-native-css-modules-example.git
cd react-native-css-modules-example
```

### Step 3: Install project dependencies

```sh
npm install
```

### Step 4: Run React native packager

You can open a new terminal tab for the packager.

```sh
npm start
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
