import React, { useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import { ErrorMessage, Form, FormField, SubmitButton } from "../components/forms";
import Screen from '../components/Screen';

const validationSchema = Yup.object().shape({
    name: Yup.string().required().label("Name"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
});

export default function RegisterScreen({ }) {
    const [registrationFailed, setRegistrationFailed] = useState(false);

    const handleSubmit = (values) => {
        console.log(values);
    };

    return (
        <Screen style={styles.container}>
            <Form
                initialValues={{ name: "", email: "", password: "" }}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                <ErrorMessage
                    error='Username already exist.'
                    visible={registrationFailed}
                />
                <FormField
                    autoComplete="none"
                    icon="account"
                    name="name"
                    placeholder="Name"
                />
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
                <SubmitButton title='Register' />
            </Form>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 5
    },
});
