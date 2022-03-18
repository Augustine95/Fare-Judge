import React from 'react';
import { NavigationContainer } from "@react-navigation/native";

import AccountScreen from './app/screens/AccountScreen';
import AppNavigator from './app/navigation/AppNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}
