import React from 'react';
//import { StyleSheet, Text, View } from 'react-native';
import  { StatusBar } from 'react-native'

import Home from './src/pages/Home';

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent/>
    </>
    
  );
}

/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d4d4d4',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/
