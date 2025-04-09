import React, { useEffect, useRef } from 'react';

import {
  AppState,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
} from 'react-native';
// import MainNavigation from './navigation/MainNavigation';
import RootNavigation from './navigation/RootNavigation';
import { NavigationContainer } from '@react-navigation/native';
import  {Provider} from 'react-redux';
import store, { persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { checkToken } from './api/user';



const App=()=>{
  //refernce to the appState
  const appState=useRef(AppState.currentState);
  //have to use useEffect to add eventListener
  useEffect(()=>{
    const subscription = AppState.addEventListener('change', (nextAppState) => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        console.log('You have comeback into the app');
  
        (async () => {
          try {
            await checkToken();
          } catch (error) {
            console.error('Token refresh error:', error);
          }
        })();
      }
  
      // ✅ this should be inside the callback, not as third argument
      appState.current = nextAppState;
    });
  
    // Initial token check
    checkToken();
    console.log('Application has rendered')
  },[]);
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <NavigationContainer>
          <StatusBar barStyle={'dark-content'}/>
          <RootNavigation />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};


export default App;
