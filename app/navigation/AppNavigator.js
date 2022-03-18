import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import AccountScreen from '../screens/AccountScreen';
import EstablishmentsScreen from '../screens/EstablishmentsScreen';
import NewReviewButton from './NewReviewButton';
import ReviewEditScreen from '../screens/ReviewEditScreen';
import routes from "./routes";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen
                component={EstablishmentsScreen}
                name={routes.FEED}
                options={{
                    tabBarIcon: ({ color, size }) =>
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                }}
            />
            <Tab.Screen
                component={ReviewEditScreen}
                name={routes.REVIEW_EDIT}
                options={({ navigation }) => ({
                    tabBarButton: () =>
                        <NewReviewButton onPress={() => navigation.navigate(routes.REVIEW_EDIT)} />,
                    tabBarIcon: ({ color, size }) =>
                        <MaterialCommunityIcons name="plus-circle" color={color} size={size} />
                })}
            />
            <Tab.Screen
                component={AccountScreen}
                name={routes.ACCOUNT}
                options={{
                    tabBarIcon: ({ color, size }) =>
                        <MaterialCommunityIcons name="account" color={color} size={size} />
                }}
            />
        </Tab.Navigator>
    );
}

export default AppNavigator;