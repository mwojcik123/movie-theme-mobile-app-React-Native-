
import React from 'react';
import {
  SafeAreaView,

  StyleSheet,
  Text,

  View,
} from 'react-native';


function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>my app 123</Text>
    </SafeAreaView>
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
