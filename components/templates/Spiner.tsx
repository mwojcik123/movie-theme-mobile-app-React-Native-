/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';

import {View, StyleSheet, SafeAreaView, Animated, Easing} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {COLORS} from '../assets/style-theme';

const App = () => {
  const spinValue = new Animated.Value(0);

  const spin = () => {
    spinValue.setValue(0);
    Animated.timing(spinValue, {
      toValue: 10,
      duration: 6000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => spin());
  };
  useEffect(() => {
    spin();
  }, []);

  const rotate = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Animated.View style={{transform: [{rotate}]}}>
          <AntDesign name={'loading1'} color={COLORS.red} size={50} />
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};

export default App;
const styles = StyleSheet.create({
  container: {
    height: 290,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
