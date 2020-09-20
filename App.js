
import React,{useEffect,useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Nav from './src/navigation/index';
import {StoreProvider} from './src/context/store';
import Loader from './src/components/Loader';

const App = () => {
  return (
    <StoreProvider>
      < Nav />
      <Loader />
    </StoreProvider>
  )
}

export default App;