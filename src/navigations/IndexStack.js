// solo la primer screen es renderizada
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Index from "../screens/Index";
import Training from "../screens/Training";

const Stack = createStackNavigator();

export default function IndexStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="index"
        component={Index}
        options={{ title: "InicioX" }}
      />
      <Stack.Screen
        name="training"
        component={Training}
        options={{ title: "TrainingX" }}
      />
    </Stack.Navigator>
  );
}
