import React, { useLayoutEffect } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  View,
  StyleSheet,
  FlatList,
  ListRenderItemInfo,
  GestureResponderEvent,
} from "react-native";

import Meal from "../models/meal";
import { RootStackParamList } from "../App";
import MealItem from "../components/MealItem";
import { MEALS, CATEGORIES } from "../data/dummy-data";

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

  function pressHandler(_event: GestureResponderEvent, id: string) {
    navigation.navigate("MealDetail", {
      mealId: id,
    });
  }

  function renderMealItem({ item }: ListRenderItemInfo<Meal>) {
    return <MealItem meal={item} onPress={(e) => pressHandler(e, item.id)} />;
  }

  useLayoutEffect(() => {
    const category = CATEGORIES.find((category) => category.id === categoryId);
    navigation.setOptions({
      title: category?.title,
    });
  }, [categoryId, navigation]);

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealOverview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
