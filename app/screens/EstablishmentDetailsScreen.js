import React, { useState } from "react";
import { View, StyleSheet, Image, FlatList, ScrollView } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import AppText from "../components/Text";
import colors from "../config/colors";
import Icon from "../components/Icon";
import ListItemSeparator from "../components/lists/ListItemSeparator";
import ListItem from "../components/lists/ListItem";
import routes from "../navigation/routes";
import SectionLabel from "../components/SectionLabel";
import { getUser } from "../services/userService";

export default function EstablishmentDetailsScreen({ navigation, route }) {
  const [showFoods, setShowFoods] = useState(true);
  const [showReviews, setShowReviews] = useState(true);

  const { typeValue, id, foods, name, location, image, reviews } = route.params;

  const handleReviewEditNavigation = item => {
    navigation.navigate(routes.REVIEW_EDIT, {
      establishment: { id, location, name, typeValue },
      foodType: item.name,
    })
  };

  return (
    <ScrollView>
      <Image style={styles.image} source={image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{name}</AppText>
        <View style={styles.rowContainer}>
          <View style={styles.locationContainer}>
            <MaterialCommunityIcons
              style={styles.locationIcon}
              name="map-marker"
              size={25}
              color={colors.secondary}
            />
            <AppText style={styles.location}>{location}</AppText>
          </View>
          <AppText style={styles.id}>Id {id}</AppText>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.container}>
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
                  onPress={() => handleReviewEditNavigation(item)}
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
        </View>
        <SectionLabel
          label='Reviews'
          expanded={showReviews}
          onPress={() => setShowReviews(!showReviews)}
        />
        {showReviews && (
          <FlatList
            data={reviews}
            ItemSeparatorComponent={ListItemSeparator}
            keyExtractor={review => review.foodType + review.reviewerId}
            renderItem={({ item }) => (
              <ListItem
                key={item.review + item.reviewerId}
                image={require('../../assets/user.png')}
                title={getUser(item.reviewerId).name}
                subTitle={item.review}
              />
            )
            }
          />
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  body: {
    paddingHorizontal: 8,
  },
  detailsContainer: {
    backgroundColor: colors.light,
    padding: 15,
    marginBottom: 15,
  },
  id: {
    padding: 10,
    backgroundColor: colors.secondary,
    borderRadius: 70,
    color: colors.white,
    fontWeight: '800'
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
    marginBottom: 10
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
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    color: colors.danger,
    fontSize: 25,
    fontWeight: "700",
    marginBottom: 5,
    marginRight: 5,
  },
  userContainer: {
    marginVertical: 40,
  },
});
