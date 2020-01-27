import React from "react";

import Main from "../screen/main";
import Settings from "../screen/settings";
import Sidebar from "../component/sidebar";
import { createDrawerNavigator } from "react-navigation-drawer";


const DrawerNavigator = createDrawerNavigator(
  {
    Main: Main,
    Settings: Settings
  },
  {
    contentComponent: props => <Sidebar {...props}/>,
    drawerType: "front",
    contentOptions:{
        activeTintColor: "black"
    },
    
  }
);

export default DrawerNavigator;
