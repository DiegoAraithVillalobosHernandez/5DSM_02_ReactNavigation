import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Icon } from "react-native-elements";
import IndexStack from "./IndexStack";
import SmartStack from "./SmartStack";
import SmartGoStack from "./SmartGoStack";
import ProfileStack from "./ProfileStack";

const Drawer = createDrawerNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="index"
          component={IndexStack}
          options={{
            title: "Inicio",
            drawerIcon: () => 
                <Icon
                    type="material-community"
                    size={22}
                    name={"view-grid-outline"}/>
          }}
        />
        <Drawer.Screen
          name="smart"
          component={SmartStack}
          options={{ 
              title: "Smart" ,
              drawerIcon: () => 
                <Icon
                    type="material-community"
                    size={22}
                    name={"weight-lifter"}/>
            }}
        />
        <Drawer.Screen
          name="profile"
          component={ProfileStack}
          options={{ 
              title: "Perfil" ,
              drawerIcon: () => 
                <Icon
                    type="material-community"
                    size={22}
                    name={"account-outline"}
                    color={"grey"}/>
            }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
