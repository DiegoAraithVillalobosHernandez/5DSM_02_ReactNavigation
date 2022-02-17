// solo la primer screen es renderizada
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Smart from '../screens/Smart';
import Training from "../screens/Training";

const Stack = createStackNavigator();

export default function IndexStack() {

  return (
    <Stack.Navigator>
        <Stack.Screen 
        name='smart'
        component={Smart}
        options={{title: "SmartX"}}
        />
        <Stack.Screen
        name="training"
        component={Training}
        options={{ title: "TrainingX" }}
      />
    </Stack.Navigator>
  )
}