import { View, Text } from "react-native";
import React, { Component } from "react";

export default class Blink extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: true,
    };

    setInterval(() => {
      this.setState({ visible: !this.state.visible });
    }, 1000);
  }

  render() {
    const { innerText } = this.props;
    return (
      <View>
        <Text>{this.state.visible ? innerText : "오잉"}</Text>
      </View>
    );
  }
}
