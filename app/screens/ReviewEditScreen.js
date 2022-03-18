import React from "react";
import { View, StyleSheet } from "react-native";
import * as Yup from "yup";

import { Form, FormField, SubmitButton } from "../components/forms";
import Screen from "../components/Screen";

const validationSchema = Yup.object().shape({
    id: Yup.string().required().label("Id"),
    establishmentName: Yup.string().required().label("Establishment Name"),
    establishmentType: Yup.object()
        .required()
        .nullable()
        .label("Establishment Type"),
    foodType: Yup.object().required().nullable().label("Food Type"),
    location: Yup.object().required().nullable().label("Establishment Location"),
    description: Yup.string().label("Description"),
});

export default function ReviewEditScreen({ }) {
    const handleSubmit = (values) => {
        console.log(values);
    };

    return (
        <Screen style={styles.container}>
            <Form
                initialValues={{
                    id: "",
                    establishmentName: "",
                    establishmentType: null,
                    foodType: null,
                    location: null,
                    description: "",
                }}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                <FormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    autoFocus
                    icon='account-key'
                    maxLength={255}
                    name="id"
                    placeholder="Id"
                    secureTextEntry
                    width="50%"
                />
                {/* establishment type picker component */}
                {/* food type picker component */}
                <FormField
                    autoCorrect={false}
                    icon='map-marker'
                    name="location"
                    placeholder='Location'
                    width='50%'
                />
                <FormField
                    maxLength={255}
                    multiline
                    name="description"
                    numberOfLines={3}
                    placeholder="Description"
                />
                <SubmitButton title='Post' onPress={handleSubmit} />
            </Form>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
});
