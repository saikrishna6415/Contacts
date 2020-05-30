import React from 'react'
import { View, Text, StyleSheet, ActivityIndicator, Image, TouchableOpacity } from 'react-native'
// import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-community/google-signin';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';



import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import { store, persistor } from './store/store';

import * as Sentry from 'sentry-expo';
// import tabScreen from './Components/tabScreen';
// import contactInfo from './Components/contactInfo';
import Main from './Components/Main';

Sentry.init({
  dsn: 'https://7f24c49241204411969cc98552e688ab@o397658.ingest.sentry.io/5253304',
  enableInExpoDevelopment: true,
  debug: true,
});
// const stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Main />
        </PersistGate>
      </Provider>
    );
  }
}

