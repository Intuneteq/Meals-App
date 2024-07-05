import React, { useLayoutEffect } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

import { MEALS } from "../data/dummy-data";
import { RootStackParamList } from "../App";
import List from "../components/MealDetail/List";
import SubTitle from "../components/MealDetail/SubTitle";
import MealDetails from "../components/MealDetail/MealDetails";
import FavoriteIconButton from "../components/Icons/FavoriteIconButton";

type Props = NativeStackScreenProps<RootStackParamList, "MealDetail">;

function MealDetail({
  route: {
    params: { mealId },
  },
  navigation,
}: Props) {
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  if (!selectedMeal) throw new Error("Meal Not Found");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <FavoriteIconButton
          icon="star"
          onPress={headerButtonPressHandler}
          color="white"
        />
      ),
    });
  }, [navigation, headerButtonPressHandler]);

  function headerButtonPressHandler() {
    console.log("Tapped!");
  }

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />

      <Text style={styles.title}>{selectedMeal.title}</Text>

      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />

      <View style={styles.listContainer}>
        <SubTitle>Ingredients</SubTitle>
        <List data={selectedMeal.ingredients} />

        <SubTitle>Steps</SubTitle>
        <List data={selectedMeal.steps} />
      </View>
    </ScrollView>
  );
}

export default MealDetail;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listContainer: {
    width: "80%",
    marginHorizontal: "auto",
  },
});
