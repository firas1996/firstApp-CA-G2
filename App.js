import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/Screens/Home";
import Contact from "./src/Screens/Contact";
import Profile from "./src/Screens/Profile";
import Notif from "./src/Screens/Notif";
import DrawerNav from "./src/Navigations/DrawerNav";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <>
      <DrawerNav />
    </>
  );
}
