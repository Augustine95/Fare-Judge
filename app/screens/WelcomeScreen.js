import React from "react";
import { View, StyleSheet, ImageBackground, Image, Text } from "react-native";

import Button from "../components/Button";
import colors from "../config/colors";
import routes from "../navigation/routes";

export default function WelcomeScreen({ navigation }) {
    return (
        <ImageBackground
            blurRadius={6}
            source={require("../../assets/background.jpg")}
            style={styles.background}
        >
            <View style={styles.logoContainer}>
                <Image
                    style={styles.logo}
                    source={require("../../assets/logo-red.png")}
                />
                <Text style={styles.tagline}>Love It, Review It</Text>
            </View>
            <View style={styles.buttonsContainer}>
                <Button title="Login" onPress={() => navigation.navigate(routes.LOGIN)} />
                <Button
                    title="Register"
                    color="secondary"
                    onPress={() => navigation.navigate(routes.REGISTER)}
                />
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        alignItems: "center",
        flex: 1,
        justifyContent: "flex-end",
    },
    buttonsContainer: {
        width: "100%",
        padding: 10,
    },
    container: {},
    logo: {
        alignSelf: "center",
        top: 0,
        height: 150,
        width: 150,
        borderRadius: 75,
    },
    logoContainer: {
        alignItems: "center",
        position: "absolute",
        top: 70,
    },
    tagline: {
        fontSize: 18,
        color: colors.white,
    },
});
