import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
//import Profile from "../screens/Profile";
//import Index from "../screens/Index";
//import Smart from "../screens/Smart";
//import SmartGo from "../screens/SmartGo";
import IndexStack from "./IndexStack";
import SmartStack from "./SmartStack";
import SmartGoStack from "./SmartGoStack";
import ProfileStack from "./ProfileStack";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        //Screen inicial
        initialRouteName="index"
        tabBarOptions={{
          inactiveTintColor:"green",
          activeTintColor:"red" }}

        screenOptions={ ({route}) => ({
            tabBarIcon:({color})=>screenOpt(route, color)
          })
        }
      >
        <Tab.Screen
          name="index"
          component={IndexStack}
          options={{ title: "Inicio" }}
        />
        <Tab.Screen
          name="smart"
          component={SmartStack}
          options={{ title: "Smart" }}
        />
        <Tab.Screen
          name="smart-go"
          component={SmartGoStack}
          options={{ title: "SmartGo" }}
        />
        <Tab.Screen
          name="profile"
          component={ProfileStack}
          options={{ title: "Perfil" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );

  function screenOpt(route, color){
    let icon;

    switch(route.name){
      case "index":
        icon = "view-grid-outline"
        break;
      case "smart":
        icon = "weight-lifter"
        break;
      case "smart-go":
        icon = "google"
        break;
      case "profile":
        icon = "account-outline"
        break;
    }
    return(
      <Icon 
      type="material-community"
      name={icon}
      size={22}
      color={color}/>
    )
  }
}
