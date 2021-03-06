// solo la primer screen es renderizada
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Index from "../screens/Index";
import Training from "../screens/Training";
import { Icon } from "react-native-elements";
import Register from "../screens/Register";

const Stack = createStackNavigator();

export default function IndexStack(props) {
  console.log(props)
  const { navigation } = props
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="index"
        component={Index}
        options={{ 
          headerShown: false,
          title: "InicioX",
          // headerLeft: () => 
          //   <Icon
          //     onPress={() => navigation.openDrawer()} 
          //     type="material-community" 
          //     name="menu" 
          //     size={22} 
          //     color={"black"} 
          //     />
        }}
      />

      <Stack.Screen
        name="register"
        component={Register}
        options={{ title: "Registrate" }}
      />
    </Stack.Navigator>
  );
}
