import React, { useState } from "react";
import { View, StyleSheet, Image, FlatList } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import AppText from "../components/Text";
import colors from "../config/colors";
import Button from "../components/Button";
import ListItemSeparator from "../components/lists/ListItemSeparator";
import ListItem from "../components/lists/ListItem";
import SectionLabel from "../components/SectionLabel";
import Icon from "../components/Icon";

const items = [
  {
    title: "Beer",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
    price: 50,
  },
  {
    title: "Hennesy",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
    price: 20,
  },
  {
    title: "Vodka",
    icon: {
      name: "email",
      backgroundColor: colors.danger,
    },
    price: 10,
  },
];

export default function EstablishmentDetailsScreen() {
  const [showFoods, setShowFoods] = useState(true);

  return (
    <>
      <Image style={styles.image} source={require("../../assets/cafe.jpg")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Cool Bar</AppText>
        <View style={styles.locationContainer}>
          <MaterialCommunityIcons
            style={styles.locationIcon}
            name="map-marker"
            size={25}
            color={colors.secondary}
          />
          <AppText style={styles.location}>Nairobi</AppText>
        </View>
      </View>
      <View style={styles.body}>
        <SectionLabel
          label="Available Food"
          expanded={showFoods}
          onPress={() => setShowFoods(!showFoods)}
        />
        {showFoods && (
          <FlatList
            ItemSeparatorComponent={ListItemSeparator}
            keyExtractor={(item) => item.title}
            data={items}
            renderItem={({ item }) => (
              <ListItem
                title={item.title}
                onPress={() => console.log("navigate to Esta Edit Screen")}
                IconComponent={
                  <Icon
                    name={item.icon.name}
                    backgroundColor={item.icon.backgroundColor}
                    size={40}
                  />
                }
              />
            )}
          />
        )}
        <Button title="Delete" onPress={() => {}} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  body: {
    paddingHorizontal: 5,
  },
  detailsContainer: {
    backgroundColor: colors.light,
    padding: 15,
    marginBottom: 15,
  },
  image: {
    width: "100%",
    height: 250,
  },
  location: {
    fontWeight: "700",
    letterSpacing: 1,
    color: colors.secondary,
    paddingTop: 0,
    fontSize: 20,
  },
  locationContainer: {
    flexDirection: "row",
  },
  locationIcon: {
    marginRight: 1,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 5,
    color: colors.danger,
    marginRight: 5,
  },
  userContainer: {
    marginVertical: 40,
  },
});
