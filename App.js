import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
} from 'react-native';
import MainNavigation from './navigation/MainNavigation';
import { NavigationContainer } from '@react-navigation/native';



const App=()=>{
  return (
    <NavigationContainer>
      <StatusBar barStyle={'dark-content'}/>
      <MainNavigation />
    </NavigationContainer>
  );
};


export default App;
