// App.js
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { HomeNavigator } from './src/Home/components/HomeStack';
import { ProfileNavigator } from './src/Profile/components/ProfileStack';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeNavigator}

        />
        <Tab.Screen
          name='Profile'
          component={ProfileNavigator} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
