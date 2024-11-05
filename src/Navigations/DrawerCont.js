import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { DrawerItem } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";

const DrawerCont = () => {
  const navigation = useNavigation();
  return (
    <View style={{ marginTop: 30 }}>
      <DrawerItem
        label="Home"
        onPress={() => {
          navigation.navigate("Home");
        }}
      />
      <DrawerItem
        label="Contact"
        onPress={() => {
          navigation.navigate("Contact");
        }}
      />
      <DrawerItem
        label="Profile"
        onPress={() => {
          navigation.navigate("Profile");
        }}
      />
      <DrawerItem
        label="Notif"
        onPress={() => {
          navigation.navigate("Notif");
        }}
      />
    </View>
  );
};

export default DrawerCont;

const styles = StyleSheet.create({});
