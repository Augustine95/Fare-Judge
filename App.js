import React from 'react';
import { NavigationContainer } from "@react-navigation/native";

import AppNavigator from './app/navigation/AppNavigator';
import Screen from './app/components/Screen';
import EstablishmentDetailsScreen from './app/screens/EstablishmentDetailsScreen';

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}
