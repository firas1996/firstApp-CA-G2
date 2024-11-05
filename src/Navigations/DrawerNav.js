import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import StackNav from "./StackNav";
import DrawerCont from "./DrawerCont";

const DrawerNav = () => {
  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={DrawerCont}>
        <Drawer.Screen name="Stack" component={StackNav} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNav;

const styles = StyleSheet.create({});
