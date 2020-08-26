import React from "react";
import { StyleSheet, View, Text } from "react-native";
import HelloWorld from "./components/HelloWorld";
import Arin from "./components/Arin";
import GreetingGroup from "./components/GreetingGroup";
import Blink from "./components/Blink";
import BlinkFunction from "./components/BlinkFunction";
import StyleApp from "./components/StyleApp";
import FlexDimensions from "./components/FlexDimensions";

export default function Root(props) {
  return (
    <View style={styles.container}>
      {/* {<Text>이몸등장</Text>} */}
      {/* {<HelloWorld userName="이우빈" textColor="tomato" />} */}
      {/* <GreetingGroup nameList={["이우빈1", "이우빈2", "이우빈3", "이우빈4"]} /> */}
      {/* <BlinkFunction innerText="깜빡" />
      <Blink innerText="왜이러지" /> */}
      {/* <Arin width={400} height={300} /> */}
      <FlexDimensions />
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
