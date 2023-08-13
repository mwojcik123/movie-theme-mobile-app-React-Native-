import React, {Component, useEffect} from 'react';
import {
  NavigationContainer,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import Home from "../screens/Home";
import HomePage from '../screens/HomePage';
import DetailPage from '../screens/DetailPage';
const ContentStack = createNativeStackNavigator();

function HomeNav() {
  return (
    <ContentStack.Navigator screenOptions={{headerShown: false}}>
      <ContentStack.Screen
        name="HomePage"
        component={HomePage}
        options={{
          headerTintColor: 'white',
          headerStyle: {backgroundColor: 'indigo'},
        }}
        //   cardStyle={{backgroundColor: 'transparent' }}
      />
      <ContentStack.Screen
        name="DetailPage"
        component={DetailPage}
        options={{
          headerTintColor: 'white',
          headerStyle: {backgroundColor: 'indigo'},
        }}
        //   cardStyle={{backgroundColor: 'transparent' }}
      />
    </ContentStack.Navigator>
  );
}

export default HomeNav;
