import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from "../screens/Profile";
import Index from "../screens/Index";
import Smart from "../screens/Smart";
import SmartGo from "../screens/SmartGo";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        //Screen inicial
        initialRouteName="smart"
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
          component={Index}
          options={{ title: "Inicio" }}
        />
        <Tab.Screen
          name="smart"
          component={Smart}
          options={{ title: "Smart" }}
        />
        <Tab.Screen
          name="smart-go"
          component={SmartGo}
          options={{ title: "SmartGo" }}
        />
        <Tab.Screen
          name="profile"
          component={Profile}
          options={{ title: "Perfil" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );

  function screenOpt(route, color){
    return(
      
    )
  }
}
