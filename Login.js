import React from 'react';
import { View,Text,StyleSheet,Image } from 'react-native';
import {Actions} from 'react-native-router-flux';
export default function Login() {
    setTimeout(() => {
        Actions.replace('Home');
    }, 4000);
    return (        
       <View style = {styles.container}>
           <Image source={require('./components/tenor.gif')}/>
           <Text>Weather loading</Text>
       </View>
    );
  }
  const styles = StyleSheet.create({
      container: {
          flex: 1,
          backgroundColor: '#25F3FF',
          justifyContent: 'center',
          alignItems: 'center',
      },
      logoText: {
          color: 'black',
          fontSize: 30,
          marginTop: 29.1,
          fontWeight: 'bold',
      },
      picture: {
          width: 100,
          height: 100,
      }
  });
