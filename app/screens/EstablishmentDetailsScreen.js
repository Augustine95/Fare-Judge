import React, { useState } from "react";
import { View, StyleSheet, Image, FlatList, ScrollView } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import { deleteEstablishment } from '../services/establishmentsService';
import AppText from "../components/Text";
import Button from '../components/Button';
import colors from "../config/colors";
import ListItemSeparator from "../components/lists/ListItemSeparator";
import ListItem from "../components/lists/ListItem";
import SectionLabel from "../components/SectionLabel";
import Icon from "../components/Icon";
import routes from "../navigation/routes";

export default function EstablishmentDetailsScreen({ navigation, route }) {
  const [showFoods, setShowFoods] = useState(true);

  const { typeValue, id, foods, name, location, image } = route.params;

  const handleEstablishmentDelete = () => {
    deleteEstablishment(id);
    navigation.navigate(routes.FEED);
  };

  return (
    <ScrollView>
      <Image style={styles.image} source={image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{name}</AppText>
        <View style={styles.locationContainer}>
          <MaterialCommunityIcons
            style={styles.locationIcon}
            name="map-marker"
            size={25}
            color={colors.secondary}
          />
          <AppText style={styles.location}>{location}</AppText>
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
            data={foods}
            renderItem={({ item }) => (
              <ListItem
                title={item.name}
                onPress={() =>
                  navigation.navigate(routes.REVIEW_EDIT, {
                    establishment: { id, location, name, typeValue },
                    foodType: item.name,
                  })
                }
                key={item.name}
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
        <Button title='Delete' onPress={handleEstablishmentDelete}/>
      </View>
    </ScrollView>
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
