import React, { useState } from "react";
import { StyleSheet, Image } from "react-native";
import * as Yup from "yup";

import {
    ErrorMessage,
    Form,
    FormField,
    SubmitButton,
} from "../components/forms";
import defaultStyles from "../config/styles";
import Screen from "../components/Screen";

const validationSchema = Yup.object().shape({
    username: Yup.string().required().email().label("Username"),
    password: Yup.string().required().min(4).label("Password"),
});

export default function LoginScreen({ }) {
    const [loginFailed, setLoginFailed] = useState(false);

    const handleSubmit = ({ email, password }) => {
        console.log(email, password);
    };

    return (
        <Screen style={styles.container}>
            <Image
                style={[styles.logo, { ...defaultStyles.logo }]}
                source={require("../../assets/logo-red.png")}
            />
            <ErrorMessage
                error="Invalid email and/or password combination"
                visible={loginFailed}
            />
            <Form
                initialValues={{ email: "", password: "" }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                <FormField
                    autoCapitalize="none"
                    autoComplete="none"
                    icon="account"
                    keyboardType="email-address"
                    name="email"
                    placeholder="Email"
                    textContentType="emailAddress"
                />
                <FormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="lock"
                    name="password"
                    placeholder="Password"
                    secureTextEntry
                    textContentType="password"
                />
                <SubmitButton title="Login" />
            </Form>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    logo: {
        alignSelf: "center",
    },
});
