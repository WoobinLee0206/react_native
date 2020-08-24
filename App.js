import { StatusBar } from "expo-status-bar";

import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Root from "./src/Root";

export default function App() {
  return (
    <View>
      <Root></Root>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
