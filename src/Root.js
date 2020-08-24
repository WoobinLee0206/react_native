import React from "react";
import { View, Text } from "react-native";
import HelloWorld from "./components/HelloWorld";

export default function Root(props) {
  return (
    <View>
      <HelloWorld />
      <Text></Text>
    </View>
  );
}
