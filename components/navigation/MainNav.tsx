import React, {Component, useEffect} from 'react';
import {
  NavigationContainer,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import Home from "../screens/Home";
import Introduction from '../screens/Introduction';
import HomeNav from './HomeNav';
import HomePage from '../screens/HomePage';

const Stack = createNativeStackNavigator();

function MainNav() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Introduction" component={Introduction} />
        <Stack.Screen name="Home" component={HomeNav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNav;
