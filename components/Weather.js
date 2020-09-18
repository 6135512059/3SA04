import React ,{useState , useEffect} from 'react';
import { StyleSheet, Text, View ,ImageBackground} from 'react-native';
import Forcast from "./Forcast";
export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: '-',
        description: '-',
        temp: 0
    })   
    return (
        <View style={styles.mons} >
            <ImageBackground source={require('./g00q6fsy41b41.jpg')} style={styles.backdrop}>
            <Text>Zip Code</Text>
            <Text>{props.zipCode}</Text>
            <Forcast {...forecastInfo} />
            </ImageBackground>
            
        </View>
    );
}
useEffect(() => {
    console.log(`fetching data with zipCode = ${props.zipCode}`)
    if (props.zipCode) {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=...`)
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

const styles = StyleSheet.create({
    backdrop: {
        alignItems: 'center',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    mons: {
        width: '100%'
    }
});

  