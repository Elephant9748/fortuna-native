import React from "react";
import SafeAreaView from "react-native-safe-area-view";
import { DrawerItems } from "react-navigation-drawer";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import { Avatar } from "react-native-elements";

export default Sidebar = props => {
  return (
    <ScrollView>
      <SafeAreaView
        style={styles.container}
        forceInset={{ top: "always", horizontal: "never" }}
      >
        <View style={styles.profile}>
          <Avatar
            rounded
            source={{
              uri: "https://randomuser.me/api/portraits/men/41.jpg"
            }}
            showEditButton
          />
          <View style={{padding:10}}><Text>profile name</Text></View>
        </View>
        <DrawerItems {...props} />
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  profile: {
    flex: 1,
    flexDirection: "row",
    padding: 16
  }
});
