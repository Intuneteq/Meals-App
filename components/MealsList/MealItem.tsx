import React from "react";
import {
  GestureResponderEvent,
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

import Meal from "../../models/meal";
import MealDetails from "./../MealDetail/MealDetails";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../App";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type Props = {
  meal: Meal;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Overview">;

export default function MealItem({
  meal: { id, title, imageUrl, duration, complexity, affordability },
}: Props) {
  const navigation = useNavigation<NavigationProp>();

  function pressHandler(_event: GestureResponderEvent) {
    navigation.navigate("MealDetail", {
      mealId: id,
    });
  }

  return (
    <View style={styles.container}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.innerContainer,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={pressHandler}
      >
        <View>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <MealDetails
          duration={duration}
          complexity={complexity}
          affordability={affordability}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.35,
    shadowOffset: { width: 0.25, height: 2 },
    shadowRadius: 16,
    overflow: Platform.select({ ios: "visible", android: "hidden" }), // hiding overflow on ios will remove the box shadow
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  buttonPressed: {
    opacity: 0.5,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
});
