import React from "react";
import { StyleSheet } from "react-native";
import MainApp from "../main/mainapp";

export default Main = () => {
  return <MainApp {...this.props} />;
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
