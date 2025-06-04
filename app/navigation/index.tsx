// app/navigation/index.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import RoleSwitch     from '../screens/RoleSwitch';
import HomeSeeker     from '../screens/HomeSeeker';
import HomeEmployer   from '../screens/HomeEmployer';

export type RootStackParamList = {
  RoleSwitch   : undefined;
  HomeSeeker   : undefined;
  HomeEmployer : undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="RoleSwitch"   component={RoleSwitch}   />
        <Stack.Screen name="HomeSeeker"   component={HomeSeeker}   />
        <Stack.Screen name="HomeEmployer" component={HomeEmployer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
