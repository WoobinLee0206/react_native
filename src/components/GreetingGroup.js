import React, { Component } from "react";
import Greeting from "./Greeting";
import { View } from "react-native";

export default class GreetingGroup extends React.Component {
  render() {
    const nameList = this.props.nameList;
    return (
      <View>
        {nameList.map((name) => {
          return <Greeting name={name} key={name} />;
        })}
        {/* <Greeting name="이우빈1" />
        <Greeting name="이우빈2" />
        <Greeting name="이우빈3" />
        <Greeting name="이우빈4" /> */}
      </View>
    );
  }
}
