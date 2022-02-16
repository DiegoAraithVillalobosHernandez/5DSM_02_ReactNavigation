// solo la primer screen es renderizada
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Index from '../screens/Index';
import Smart from '../screens/Smart';

const Stack = createStackNavigator();

export default function IndexStack() {

  return (
    <Stack.Navigator>
        <Stack.Screen 
        name='index'
        component={Index}
        options={{title: "InicioX"}}
        />
        <Stack.Screen 
        name='smart'
        component={Smart}
        options={{title: "SmartX"}}
        />
    </Stack.Navigator>
  )
}