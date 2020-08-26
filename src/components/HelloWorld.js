import React from "react";
//const React = require('react');

import { View, Text, StyleSheet } from "react-native";

export default class HelloWorld extends React.Component {
  render() {
    return (
      <View style={styles.textWrap}>
        <Text style={{ fontSize: 60, color: this.props.textColor }}>
          {this.props.userName}이 전달 되었습니다.
        </Text>
        <Text style={styles.textStyle}>Hello World</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textWrap: {
    backgroundColor: "green",
  },
  textStyle: { color: "red", fontSize: 40, fontStyle: "italic" },
});

// export default HelloWorld;
