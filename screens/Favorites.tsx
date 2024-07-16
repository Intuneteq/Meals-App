import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { MEALS } from "../data/dummy-data";
import { useAppSelector } from "../store/redux/hooks";
import { selectFavoriteMealsIds } from "../store/redux/slices/favorites";

import MealsList from "../components/MealsList/MealsList";

type Props = {};

function Favorites({}: Props) {
  const ids = useAppSelector(selectFavoriteMealsIds);

  const favoriteMeals = MEALS.filter((meal) => ids.includes(meal.id));

  if (!favoriteMeals.length) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals Yet</Text>
      </View>
    );
  }
  return <MealsList meals={favoriteMeals} />;
}

export default Favorites;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
