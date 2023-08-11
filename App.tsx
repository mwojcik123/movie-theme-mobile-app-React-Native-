import MainNav from './components/navigation/MainNav';
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {PaperProvider} from 'react-native-paper';
import {Provider as StoreProvider} from 'react-redux';
import store from './components/store';

function App() {
  return (
    <StoreProvider store={store}>
      <PaperProvider>
        <MainNav />
      </PaperProvider>
    </StoreProvider>
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
