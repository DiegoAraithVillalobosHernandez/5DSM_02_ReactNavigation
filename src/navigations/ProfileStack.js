import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Profile from '../screens/Profile';
import Location from '../screens/Location';

const Stack = createStackNavigator();

export default function IndexStack() {

  return (
    <Stack.Navigator>
        <Stack.Screen 
        name='profile'
        component={Profile}
        options={{title: "ProfileX"}}
        />
         <Stack.Screen 
        name='location'
        component={Location}
        options={{title: "LocationX"}}
        />
    </Stack.Navigator>
  )
}