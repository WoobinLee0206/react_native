import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class Greeting extends React.Component {
  render() {
    return (
      <View>
        <Text>Hello, {this.props.name}</Text>
      </View>
    );
  }
}
