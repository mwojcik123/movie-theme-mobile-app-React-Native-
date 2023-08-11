import React, {Component, useEffect} from 'react';
import {
  NavigationContainer,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import Home from "../screens/Home";
import HomePage from '../screens/HomePage';

const ContentStack = createNativeStackNavigator();

function HomeNav() {
  return (
    <ContentStack.Navigator screenOptions={{headerShown: true}}>
      <ContentStack.Screen
        name="HomePage"
        component={HomePage}
        options={{
          headerTintColor: 'white',
          headerStyle: {backgroundColor: 'indigo'},
          cardStyle: {flex: 1},
        }}
        //   cardStyle={{backgroundColor: 'transparent' }}
      />
    </ContentStack.Navigator>
  );
}

export default HomeNav;
