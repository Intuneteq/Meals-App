import React from "react";
import { FlatList, ListRenderItemInfo } from "react-native";
import { DrawerScreenProps } from "@react-navigation/drawer";
import { CompositeScreenProps } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import Category from "../models/category";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";
import { RootDrawerParamList, RootStackParamList } from "../App";

type Props = CompositeScreenProps<
  DrawerScreenProps<RootDrawerParamList, "CategoriesDrawer">,
  NativeStackScreenProps<RootStackParamList, "Categories">
>;

function Categories({ navigation }: Props) {
  function renderCategoryItem({ item }: ListRenderItemInfo<Category>) {
    function pressHandler() {
      navigation.navigate("Overview", { categoryId: item.id });
    }

    return (
      <CategoryGridTile
        title={item.title}
        color={item.color}
        onPress={pressHandler}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}

export default Categories;
