import React from "react";
import { FlatList, ListRenderItemInfo, StyleSheet, View } from "react-native";
import MealItem from "./MealItem";
import Meal from "../../models/meal";

type Props = {
  meals: Meal[];
};

function MealsList({ meals }: Props) {
  function renderMealItem({ item }: ListRenderItemInfo<Meal>) {
    return <MealItem meal={item} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={meals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
