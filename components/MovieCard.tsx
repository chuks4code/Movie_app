

import React from "react";
import { Image, Pressable, StyleSheet, Text, ViewStyle, ImageSourcePropType } from "react-native";
import { hs, ms, vs } from "@/screen-dimention";
import Colors from "@/constants/colors";

type MovieCardProps = {
  title: string;
  genres: string[] | string;          // ["Action","Drama"] OR "Action | Drama"
  imageMock: ImageSourcePropType;        // require(...) OR { uri: "https://..." }
  onPress?: () => void;
  style?: ViewStyle;
};

const MovieCard: React.FC<MovieCardProps> = ({
  title,
  genres,
  imageMock,
  onPress,
  style,
}) => {
  const genreText = Array.isArray(genres) ? genres.join(" | ") : genres;

  return (
    <Pressable style={[styles.container, style]} onPress={onPress}>
      <Image style={styles.image} source={imageMock} />

      <Text numberOfLines={1} style={styles.title}>
        {title}
      </Text>

      <Text numberOfLines={1} style={styles.genres}>
        {genreText}
      </Text>
    </Pressable>
  );
};

export default MovieCard;

const styles = StyleSheet.create({
  container: {
    width: hs(110),
    marginHorizontal: 8,
    marginBottom: 14,
    marginTop: 14,
  },
  image: {
    height: vs(150),
    width: "100%",
    borderRadius: 10,
  },
  title: {
    color: Colors.text,
    fontWeight: "600",
    fontSize: ms(14),
    marginTop: vs(6),
  },
  genres: {
    color: Colors.gray,
    fontSize: ms(10),
    marginTop: vs(2),
  },
});
