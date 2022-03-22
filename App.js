import React from 'react';
import { NavigationContainer } from "@react-navigation/native";

import AppNavigator from './app/navigation/AppNavigator';
import Screen from './app/components/Screen';
import EstablishmentDetailsScreen from './app/screens/EstablishmentDetailsScreen';
import MyReviewsScreen from './app/screens/MyReviewsScreen';

export default function App() {
  return (
    <MyReviewsScreen />
  );
}
    // <NavigationContainer>
    //   <AppNavigator />
    // </NavigationContainer>
