import React, { useLayoutEffect } from "react";
import { GestureResponderEvent } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { RootStackParamList } from "../App";
import { MEALS, CATEGORIES } from "../data/dummy-data";

import MealsList from "../components/MealsList/MealsList";

type Props = NativeStackScreenProps<RootStackParamList, "Overview">;

const MealOverview = ({
  route: {
    params: { categoryId },
  },
  navigation,
}: Props) => {
  const displayedMeals = MEALS.filter((mealItem) =>
    mealItem.categoryIds.indexOf(categoryId)
  );

  useLayoutEffect(() => {
    const category = CATEGORIES.find((category) => category.id === categoryId);
    navigation.setOptions({
      title: category?.title,
    });
  }, [categoryId, navigation]);

  return <MealsList meals={displayedMeals} />;
};

export default MealOverview;
