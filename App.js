import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Allcontacts from './Components/Allcontacts'
import Favorites from './Components/Favorites'


import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import { store, persistor } from './store/store';

import * as Sentry from 'sentry-expo';
import stackScreen from './Components/stackScreen';

// Sentry.init({
//   dsn: 'https://7f24c49241204411969cc98552e688ab@o397658.ingest.sentry.io/5253304',
//   enableInExpoDevelopment: true,
//   debug: true,
// });
const Tab = createMaterialTopTabNavigator();


export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Tab.Navigator style={{ marginTop: 40 }}
            tabBarOptions={{
              labelStyle: { fontSize: 20, color: "white" },
              style: { backgroundColor: 'black' },
            }}>
            <Tab.Screen name="Contacts" component={stackScreen} t />
            <Tab.Screen name="Favorites" component={Favorites} />
          </Tab.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>

  );
}