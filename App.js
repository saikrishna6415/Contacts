import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import { store, persistor } from './store/store';

import * as Sentry from 'sentry-expo';
import tabScreen from './Components/tabScreen';
import contactInfo from './Components/contactInfo';

Sentry.init({
  dsn: 'https://7f24c49241204411969cc98552e688ab@o397658.ingest.sentry.io/5253304',
  enableInExpoDevelopment: true,
  debug: true,
});
const stack = createStackNavigator();


export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <stack.Navigator >
            <stack.Screen options={{ headerShown: false }} name="Contacts" component={tabScreen} t />
            <stack.Screen name="contactInfo" component={contactInfo} />
          </stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>

  );
}