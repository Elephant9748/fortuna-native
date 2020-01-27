import React from "react";
import { View, StyleSheet } from "react-native";
import ScreenName from "../component/screenName";

export default class Settings extends React.Component {
  static navigationsOptions = {};

  render() {
    return (
      <View style={style.container}>
        <ScreenName name="Screen Settings" />
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
