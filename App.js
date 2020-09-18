import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Weather from "./components/Weather";
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ZipCodeScreen from './components/ZipCodeScreen';
import WeatherScreen from './components/WeatherScreen';
const Stack = createStackNavigator();

export default function App() {
  return (        
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={ZipCodeScreen} />
      <Stack.Screen name="Weather" component={WeatherScreen} />
    </Stack.Navigator> 
    </NavigationContainer>       

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    borderColor: 'red',
    borderWidth: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

