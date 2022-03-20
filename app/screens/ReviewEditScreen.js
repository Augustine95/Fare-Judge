import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import { Form, FormField, FormPicker, SubmitButton } from "../components/forms";
import EstablishmentPickerItem from "../components/EstablishmentPickerItem";
import Screen from "../components/Screen";

const validationSchema = Yup.object().shape({
    id: Yup.string().required().label("Id"),
    establishmentName: Yup.string().required().label("Establishment Name"),
    establishmentType: Yup.object()
        .required()
        .nullable()
        .label("Establishment Type"),
    foodType: Yup.string().required().label("Food Type"),
    location: Yup.string().required().label("Establishment Location"),
    description: Yup.string().label("Description"),
});

const establishmentTypes = [
    {
        label: "Bar",
        value: 1,
        icon: "beer-outline",
        backgroundColor: "dodgerblue",
    },
    { label: "Cafe", value: 2, icon: "tea-outline", backgroundColor: "gold" },
    {
        label: "Restaurant",
        value: 3,
        icon: "silverware-variant",
        backgroundColor: "pink",
    },
];

const initialValues = {
    id: "",
    establishmentName: "",
    establishmentType: null,
    foodType: "",
    location: "",
    description: "",
};

export default function ReviewEditScreen({ route }) {
    const [values, setValues] = useState(initialValues);

    useEffect(() => {
        setValues(getValues());
    }, []);

    function getValues() {
        return (route.params) ? mapToViewModel() : values;
    }

    function mapToViewModel() {
        const {
            establishment: { id, location, name, typeValue },
            foodType,
        } = route.params;

        return {
            id: id.toString(),
            establishmentName: name,
            establishmentType: getType(typeValue),
            foodType,
            location,
            description: "",
        };
    }

    function getType(value) {
        return establishmentTypes.find((t) => t.value === value);
    }

    const handleSubmit = (values) => {
        console.log(values);
    };

    return (
        <Screen style={styles.container}>
            <Form
                initialValues={getValues()}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                <FormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="account-key"
                    maxLength={255}
                    name="id"
                    placeholder="Id"
                    secureTextEntry
                />
                <FormField
                    autoCorrect={false}
                    icon="city"
                    maxLength={255}
                    name="establishmentName"
                    placeholder="Establishment Name"
                    width="70%"
                />
                <FormPicker
                    PickerItemComponent={EstablishmentPickerItem}
                    items={establishmentTypes}
                    name="establishmentType"
                    numberOfColumns={3}
                    placeholder="Establishment Type"
                    width="50%"
                />
                <FormField
                    autoCorrect={false}
                    icon="silverware-fork-knife"
                    name="foodType"
                    placeholder="Food Type"
                    width="50%"
                />
                <FormField
                    autoCorrect={false}
                    icon="map-marker"
                    name="location"
                    placeholder="Location"
                    width="50%"
                />
                <FormField
                    maxLength={255}
                    multiline
                    name="description"
                    numberOfLines={3}
                    placeholder="Description"
                />
                <SubmitButton title="Post" onPress={handleSubmit} />
            </Form>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
});
