import React from "react";
import { StyleSheet } from "react-native";
import NavHeader from "../main/navheader";

export default Main = () => {
  return <NavHeader {...this.props} />;
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
