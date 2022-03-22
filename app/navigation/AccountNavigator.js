import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AccountScreen from "../screens/AccountScreen";
import MyReviewsScreen from "../screens/MyReviewsScreen";
import routes from "./routes";

const Stack = createStackNavigator();

export default function AccountNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={routes.ACCOUNT}
        component={AccountScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={routes.MY_REVIEWS}
        component={MyReviewsScreen}
        options={{ title: "My Reviews" }}
      />
    </Stack.Navigator>
  );
}
