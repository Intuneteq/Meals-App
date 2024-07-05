import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet } from "react-native";

type Props = {
  onPress: () => void;
  icon: keyof typeof Ionicons.glyphMap;
  color: string;
};

function FavoriteIconButton({ icon, color, onPress }: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <Ionicons name={icon} size={24} color={color} />
    </Pressable>
  );
}

export default FavoriteIconButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});
