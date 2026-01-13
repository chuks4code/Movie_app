import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import Colors from "@/constants/colors";
import { Ionicons } from "@expo/vector-icons";

type HeaderSectionProps = {
  title: string;
  actionTextRight?: string;          // optional
  onPress?: () => void;         // optional
};

const HeaderSection: React.FC<HeaderSectionProps> = ({
  title,
  actionTextRight,
  onPress,
}) => {
  return (
    <View style={styles.HeaderSection}>
      <Text style={styles.title}>{title}</Text>

      {actionTextRight && (
        <Pressable
          onPress={onPress}
          style={({ pressed }) => pressed && { opacity: 0.8 }}
        >
          <Text style={styles.action}>{actionTextRight}</Text>
        </Pressable>
      )}
    </View>
  );
};

export default HeaderSection;

const styles = StyleSheet.create({
  HeaderSection: {
    marginTop: 16,
    paddingHorizontal: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    color: Colors.text,
    fontSize: 16,
    fontWeight: "600",
  },
  action: {
    color: Colors.primary,
    fontSize: 14,
  },
});



