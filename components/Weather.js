import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Forcast from "./Forcast";

const apiKey = "6cecb9dd2e369d7e9b5d62bc682150d4";
const Datacasd = "seeIMG";
export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: '-',
        description: '-',
        temp: 0,
    })

    const [imageBck, setImageBck] = useState('./bg.jpg')
    let file = require('./bg.jpg')

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

                    console.log('json: ', json.weather)
                    console.log('FOrecase info: ', forecastInfo)
                    // if (props.zipCode == '90110') {
                    //     file = require("./clouds.jpg");
                    //     setImageBck(require("./clouds.jpg"));
                    // }
                    // else if (props.zipCode == '92000')
                    //     setImageBck(require("./rain.jpg"));

                    // else if (props.zipCode == '50000')
                    //     setImageBck(require("./sun.jpg"));
                    // else
                    // setImageBck(require("./bg.jpg"));

                    // console.log('Image background: ', imageBck)
                    if (json.weather[0].main == 'Clouds') {
                        file = require("./clouds.jpg");
                        setImageBck(require("./clouds.jpg"));
                    }
                    else if (json.weather[0].main == 'Rain')
                        setImageBck(require("./rain.jpg"));

                    else if (json.weather[0].main == 'Sun')
                        setImageBck(require("./sun.jpg"));
                    else
                        setImageBck(require("./bg.jpg"));

                    console.log('Image background: ', imageBck)
                })
                .catch((error) => {
                    console.warn(error);
                });




        }
    }, [props.zipCode])

    console.log('image bcc: ', imageBck)

    return (
        <View style={styles.mons} >
            <ImageBackground source={imageBcks} style={styles.backdrop}>
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
    fontS: {
        fontSize: 30,
        color: 'white',
        opacity: 1,

    },
    fontm: {
        fontSize: 50,
        color: 'white',
        opacity: 1,

    },
    fontl: {
        fontSize: 70,
        color: 'white',
        opacity: 1,

    },
    fontxl: {
        fontSize: 100,
        color: 'white',
        opacity: 1,

    },
});

