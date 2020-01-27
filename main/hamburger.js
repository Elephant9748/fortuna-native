import React from "react";
import { Icon, Button } from "react-native-elements";
import { withNavigation } from "react-navigation";
import { DrawerActions } from "react-navigation-drawer";

const Hamburger = (props) => {
  return (
    <Button
      onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}
      icon={<Icon name="menu" color="#fff" />}
      type="clear"
    />
  );
};

export default withNavigation(Hamburger);