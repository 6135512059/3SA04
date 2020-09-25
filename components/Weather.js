import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Forcast from "./Forcast";

const apiKey = "6cecb9dd2e369d7e9b5d62bc682150d4" ;

export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: '-',
        description: '-',
        temp: 0,
    })
    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=${apiKey}`)
                .then((response) => response.json())
                .then((json) => {
                    setForecastInfo({
                        main: json.weather[0].main,
                        description: json.weather[0].description,
                        temp: json.main.temp
                    });
                })
                .catch((error) => {
                     console.warn(error);
                 });
        }
    }, [props.zipCode])

const PhotosA = "./bg.jpg";
    // if()
    return (
        <View style={styles.mons} >
            <ImageBackground source={require(PhotosA)} style={styles.backdrop}>
                <View style={styles.op}>
                    <Text style={styles.fontS}>Zip Code {props.zipCode}</Text>
                    <Forcast {...forecastInfo} />
                </View>
            </ImageBackground>

        </View>
    );
}

const styles = StyleSheet.create({
    backdrop: {
        alignItems: 'center',
        width: '100%',
        height: '100%',
        
        
    },
    mons: {
        width: '100%'
    },
    op: {
        backgroundColor: 'black',
        opacity: 0.5,
        height: '40%',
        width: '100%',
        alignItems: "center",
        flexDirection: 'column',
       justifyContent: 'center',
    },
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

