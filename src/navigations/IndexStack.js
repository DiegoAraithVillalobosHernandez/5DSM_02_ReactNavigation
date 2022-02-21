// solo la primer screen es renderizada
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Index from "../screens/Index";
import Training from "../screens/Training";
import { Icon } from "react-native-elements";

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
          title: "InicioX",
          headerLeft: () => 
            <Icon
              onPress={() => navigation.openDrawer()} 
              type="material-community" 
              name="menu" 
              size={22} 
              color={"black"} 
              />
        }}
      />

      {/* <Stack.Screen
        name="training"
        component={Training}
        options={{ title: "TrainingX" }}
      /> */}
    </Stack.Navigator>
  );
}
