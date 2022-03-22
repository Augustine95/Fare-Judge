import React, {useEffect, useState} from "react";
import { Alert, FlatList, StyleSheet } from "react-native";

import Card from "../components/Card";
import NoResultsNotice from "../components/NoResultsNotice";
import routes from "../navigation/routes";
import Screen from "../components/Screen";
import TextInput from "../components/TextInput";
import {getEstablishments} from "../services/establishmentsService";

export default function EstablishmentsScreen({ navigation }) {
  const [establishments, setEstablishments] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    setEstablishments(getEstablishments());
  }, []);

  const handleDelete = ({ id, name }) => {
    Alert.alert("Delete", `Are you sure you want to delete ${name} establishment?`, [
      { text: "Yes", onPress: () => deleteEstablishment(id) },
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
