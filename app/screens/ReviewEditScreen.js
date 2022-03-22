import React, { useEffect, useState } from "react";
import {Alert, StyleSheet} from "react-native";
import * as Yup from "yup";

import { Form, FormField, FormPicker, SubmitButton } from "../components/forms";
import { getEstablishmentType, getEstablishmentTypes } from '../services/establishmentTypesService';
import { getEstablishment } from "../services/establishmentsService";
import EstablishmentPickerItem from "../components/EstablishmentPickerItem";
import Screen from "../components/Screen";
import routes from "../navigation/routes";

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

const initialValues = {
    id: "",
    establishmentName: "",
    establishmentType: null,
    foodType: "",
    location: "",
    description: "",
};

const user = { id: 10, name: "Augustine Awuori", reviews: [] };

export default function ReviewEditScreen({ navigation, route }) {
    const [values, setValues] = useState(initialValues);

    // useEffect(() => {
    //     setValues(getValues());
    // });

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
            establishmentType: getEstablishmentType(typeValue),
            foodType,
            location,
            description: "",
        };
    }

    const handleSubmit = ({ description, foodType, id }) => {
       const establishment = getEstablishment(id);
       if (!establishment)
           return Alert.alert("REVIEW FAILED", "No establishment with the given ID was found", [
               { text: "Ok" }
           ]);

       const review = {
           establishmentId: id,
           foodType,
           reviewerId: user.id,
           review: description
       };
       establishment.reviews.push(review);
       user.reviews.push(review);

       setValues(initialValues);
       navigation.navigate(routes.FEED);
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
                    items={getEstablishmentTypes()}
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
                <SubmitButton title="Post" />
            </Form>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
});
