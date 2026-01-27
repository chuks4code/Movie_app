

import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  View,
  Image,
  Pressable,
  StyleSheet,
  Text,
  ViewStyle,
  ImageSourcePropType,
  DimensionValue,
} from "react-native";
import { hs, ms, vs } from "@/screen-dimention";
import Colors from "@/constants/colors";

type ContinueWatchingMovieCardProps = {
  title: string;
  genres: string[] | string;
  imageMock: ImageSourcePropType; // require(...) OR { uri: "https://..." }
  onPress?: () => void;
  style?: ViewStyle;
};

const ContinueWatchingMovieCard: React.FC<ContinueWatchingMovieCardProps> = ({
  title,
  genres,
  imageMock,
  onPress,
  style,
}) => {

    
  const getRandomPercentage = (): DimensionValue => {
    const min = 10;
    const max = 100;
    const value = Math.floor(Math.random() * (max - min + 1)) + min;
    return `${value}%`;
  };

  const randomPlayPercentage = getRandomPercentage();
  const genreText = Array.isArray(genres) ? genres.join(" | ") : genres;

  return (
    <Pressable
      style={({ pressed }) => [styles.container, style, pressed && { opacity: 0.8 }]}
      onPress={onPress}
    >
      <View style={styles.posterWrap}>
        <Image style={styles.image} source={imageMock} />

        {/* Play icon overlay (only this is absolute) */}
        <View style={styles.playOverlay}>
          <Ionicons name="play" size={24} color="#faf9f9" />
        </View>
      </View>

      <View style={styles.progressbarcontainer}>
        <View style={[styles.progress, { width: randomPlayPercentage }]} />
      </View>

      <Text numberOfLines={1} style={styles.title}>
        {title}
      </Text>

      <Text numberOfLines={1} style={styles.genres}>
        {genreText}
      </Text>
    </Pressable>
  );
};

export default ContinueWatchingMovieCard;

const styles = StyleSheet.create({
  container: {
    width: hs(240),
    marginHorizontal: 8,
    marginTop: 14,
  },
  posterWrap: {
    position: "relative",
  },
  image: {
    height: vs(170),
    width: "100%",
    borderRadius: 6,
  },
  playOverlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  progressbarcontainer: {
    marginTop: 8,
    height: 3,
    width: "100%",
    borderRadius: 4,
    overflow: "hidden",
    backgroundColor: Colors.text,
  },
  progress: {
    height: "100%",
    borderRadius: 4,
    backgroundColor: Colors.primary,
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

