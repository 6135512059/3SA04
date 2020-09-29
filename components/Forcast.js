import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
export default function Forecast(props) {
    return (
        <View >
            <Text style={styles.fontl}> {props.main} </Text>
            <Text style={styles.fontS}> {props.description}</Text>
            <Text style={styles.fontl}>{props.temp}°C</Text>
           
        </View>
    );
}
const styles = StyleSheet.create({
    fontS:{
        fontSize: 30,
        color: 'white',
        opacity: 1,
        
    },
    fontm:{
        fontSize: 50,
        color: 'white',
        opacity: 1,
        
    },
    fontl:{
        fontSize: 70,
        color: 'white',
        opacity: 1,
        
    },
    fontxl:{
        fontSize: 100,
        color: 'white',
        opacity: 1,
        
    },
});
