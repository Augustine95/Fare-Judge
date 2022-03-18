import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import Card from "../components/Card";

import Screen from "../components/Screen";
import TextInput from "../components/TextInput";

const initialEstablishments = [
  {
    id: 1,
    name: "Cool Bar",
    location: "Los Angeles",
    image: require("../../assets/bar.jpg"),
    type: "Bar",
  },
  {
    id: 2,
    name: "Fast Food Restaurant",
    location: "Nairobi",
    image: require("../../assets/restaurant.jpg"),
    type: "Restaurant",
  },
  {
    id: 3,
    name: "McDonald",
    image: require("../../assets/cafe.jpg"),
    location: "Beverly Hills",
    type: "Cafe",
  },
];

export default function EstablishmentsScreen({}) {
  const [establishments, setEstablishments] = useState(initialEstablishments);
  const [query, setQuery] = useState("");

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
      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Card item={item} />}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
  },
});
