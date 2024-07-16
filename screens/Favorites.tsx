import React, { useContext } from "react";
import { MEALS } from "../data/dummy-data";
import { StyleSheet, Text, View } from "react-native";
import MealsList from "../components/MealsList/MealsList";
import { FavoritesContext } from "../store/context/favorites-context";

type Props = {};

function Favorites({}: Props) {
  const { ids } = useContext(FavoritesContext);

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
