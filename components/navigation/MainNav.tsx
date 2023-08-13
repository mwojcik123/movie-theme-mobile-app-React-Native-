import React, {Component, useEffect, useState} from 'react';
import {
  NavigationContainer,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import Home from "../screens/Home";
import Introduction from '../screens/Introduction';
import HomeNav from './HomeNav';
import HomePage from '../screens/HomePage';
import {useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Stack = createNativeStackNavigator();

function MainNav() {
  const [isFirstTime, setFirstTime] = useState(false);
  useEffect(() => {
    // Update the document title using the browser API
    getUser();
  });

  // getting data
  const getUser = async () => {
    let isShow = await AsyncStorage.getItem('isShow');
    isShow == 'true' ? setFirstTime(true) : null;
  };
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {true ? (
          <Stack.Screen name="Introduction" component={Introduction} />
        ) : null}
        <Stack.Screen name="Home" component={HomeNav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNav;
