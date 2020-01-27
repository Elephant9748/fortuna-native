import React from "react";
import { ThemeProvider, Header } from "react-native-elements";
import Hamburger from "./hamburger";

const theme = {
  Header: {
    backgroundColor: "#111d5e",
  }
};

export default MainApp = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <Header
      placement="right"
        rightComponent={<Hamburger {...props} />}
        centerComponent={{ text: 'Dashboard', style: { color: '#fff' } }}
      />
    </ThemeProvider>
  );
};
