import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import EstablishmentsScreen from "../screens/EstablishmentsScreen";
import EstablishmentDetailsScreen from "../screens/EstablishmentDetailsScreen";
import routes from "./routes";

const Stack = createStackNavigator();

export default function FeedNavigator({ onDelete }) {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={routes.FEED} component={EstablishmentsScreen} />
            <Stack.Screen
                name={routes.ESTABLISHMENT_DETAILS}
                component={EstablishmentDetailsScreen}
            />
        </Stack.Navigator>
    );
}
