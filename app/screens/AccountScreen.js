import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ListItem from "../components/lists/ListItem";

import colors from "../config/colors";
import Screen from "../components/Screen";
import ListItemSeparator from "../components/lists/ListItemSeparator";
import Icon from "../components/Icon";
import routes from "../navigation/routes";
import useAuth from "../auth/useAuth";

const menuItems = [
    {
        title: "My Reviews",
        icon: {
            name: "email",
            backgroundColor: colors.secondary,
        },
        target: routes.MY_REVIEWS,
    },
];

export default function AccountScreen({ navigation }) {
    const { user, logOut } = useAuth();

    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem
                    title={user.name}
                    subTitle={user.email}
                    image={require("../../assets/user.png")}
                />
            </View>
            <View style={styles.container}>
                <FlatList
                    data={menuItems}
                    keyExtractor={(item) => item.title}
                    ItemSeparatorComponent={ListItemSeparator}
                    renderItem={({ item }) => (
                        <ListItem
                            IconComponent={
                                <Icon
                                    name={item.icon.name}
                                    backgroundColor={item.icon.backgroundColor}
                                />
                            }
                            title={item.title}
                            onPress={() => navigation.navigate(item.target)}
                        />
                    )}
                />
            </View>
            <ListItem
                title="Log out"
                IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
                onPress={() => logOut()}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    },
    screen: {
        backgroundColor: colors.light,
    },
});
