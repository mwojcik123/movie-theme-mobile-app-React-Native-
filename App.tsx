import MainNav from './components/navigation/MainNav';
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {PaperProvider} from 'react-native-paper';

function App() {
  return (
    <PaperProvider>
      <MainNav />
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
