import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import Navigation from './src/navigations/NavigationDrawer';

export default function App() {
  console.disableYellowBox =true;
  return (
    <Navigation/>
  );
}

