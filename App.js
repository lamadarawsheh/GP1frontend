import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import Navigation from './src/navigation';
 const  App=()=> {
  return (
    <SafeAreaView style={styles.root}>
     < Navigation/>

    </SafeAreaView>
   
  );
};

const styles = StyleSheet.create({
root: {
  flex:1,
 backgroundColor: '#fff',
 shadowColor:'#fff',


   
  },
});
export default App;