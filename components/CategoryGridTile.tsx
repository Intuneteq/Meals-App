import React from "react";
import {
  GestureResponderEvent,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

import Category from "../models/category";

type Props = Omit<Category, "id"> & {
  onPress: (event: GestureResponderEvent) => void;
};

function CategoryGridTile({ title, color, onPress }: Props) {
  return (
    <View style={styles.gridItems}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={onPress}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItems: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: "white", // Needed for ios box shadow
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0.25, height: 2 },
    shadowRadius: 8,
    overflow: Platform.select({ ios: "visible", android: "hidden" }), // hiding overflow on ios will remove the box shadow
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
