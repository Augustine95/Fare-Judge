import React, { useState } from "react";
import { Alert, FlatList, StyleSheet } from "react-native";

import Card from "../components/Card";
import NoResultsNotice from "../components/NoResultsNotice";
import routes from "../navigation/routes";
import Screen from "../components/Screen";
import TextInput from "../components/TextInput";

const initialEstablishments = [
  {
    id: 1,
    name: "Cool Bar",
    location: "Los Angeles",
    image: require("../../assets/bar.jpg"),
    foods: [
      {
        name: "Nachos",
        icon: {
          name: "glass-cocktail",
          backgroundColor: "#fcba03",
        },
      },
      {
        name: "Wings",
        icon: {
          name: "circle-outline",
          backgroundColor: "#fce703",
        },
      },
      {
        name: "Quesadillas",
        icon: {
          name: "glass-wine",
          backgroundColor: "#bafc03",
        },
      },
      {
        name: "Artichoke dip",
        icon: {
          name: "coffee-outline",
          backgroundColor: "#be03fc",
        },
      },
    ],
    typeValue: 1
  },
  {
    id: 2,
    name: "Fast Food Restaurant",
    location: "Nairobi",
    image: require("../../assets/restaurant.jpg"),
    foods: [
      {
        name: "Smoked Pork",
        icon: {
          name: "glass-cocktail",
          backgroundColor: "#fcba03",
        },
      },
      {
        name: "Sushi",
        icon: {
          name: "glass-cocktail",
          backgroundColor: "#fce703",
        },
      },
    ],
    typeValue: 2
  },
  {
    id: 3,
    name: "McDonald",
    image: require("../../assets/cafe.jpg"),
    location: "Beverly Hills",
    foods: [
      {
        name: "Coffee",
        icon: {
          name: "glass-cocktail",
          backgroundColor: "#fcba03",
        },
      },
      {
        name: "Tea",
        icon: {
          name: "glass-cocktail",
          backgroundColor: "#fce703",
        },
      },
      {
        name: "Donuts",
        icon: {
          name: "glass-cocktail",
          backgroundColor: "#fcba03",
        },
      },
    ],
    typeValue: 3
  },
];

export default function EstablishmentsScreen({ navigation }) {
  const [establishments, setEstablishments] = useState(initialEstablishments);
  const [query, setQuery] = useState("");

  const handleDelete = establishment => {
    Alert.alert("Delete", "Are you sure you want to delete this establishment?", [
      { text: "Yes", onPress: () => deleteEstablishment(establishment.id) },
      { text: "No" }
    ]);
  };

  function deleteEstablishment(id) {
    setEstablishments(establishments.filter(e => e.id !== id));
  }

  const filtered = query
    ? establishments.filter((e) =>
      e.name.toLowerCase().startsWith(query.toLowerCase())
    )
    : establishments;

  return (
    <Screen style={styles.container}>
      <TextInput
        icon="selection-search"
        placeholder="Search here..."
        onChangeText={setQuery}
      />
      {filtered.length === 0 ? (
        <NoResultsNotice />
      ) : (
        <FlatList
          data={filtered}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Card
              item={item}
              onPress={() =>
                navigation.navigate(routes.ESTABLISHMENT_DETAILS, item)
              }
              onLongPress={() => handleDelete(item)}
              key={item.id}
            />
          )}
        />
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
  },
});
