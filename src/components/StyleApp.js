import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class StyleApp extends Component {
  render() {
    return (
      <View>
        <Text style={styles.blue}>50x50</Text>
        <Text style={styles.black}>100x100</Text>
        <Text style={styles.red}>150x150</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  black: {
    backgroundColor: "black",
    color: "white",
    width: 100,
    height: 100,
  },
  blue: {
    backgroundColor: "blue",
    color: "black",
    width: 50,
    height: 50,
  },
  red: {
    backgroundColor: "red",
    color: "black",
    width: 150,
    height: 150,
  },
});
