import { StyleSheet, Text, ImageBackground, View, Image } from "react-native";
import React from "react";

export default function Header({ navigation, title }) {
  return (
    <ImageBackground
      source={require("../assets/game_bg.png")}
      style={styles.container}
    >
      <Image
        source={require("../assets/mylogo.png")}
        style={styles.imageStyle}
      />
      <Text style={styles.textHeader}>{title}</Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    marginTop: 15,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#000",
  },
  textHeader: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#333",
    letterSpacing: 1,
  },
  imageStyle: {
    width: 36,
    height: 30,
    marginTop: 5,
  },
});
