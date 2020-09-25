import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, FlatList, TouchableHighlight ,StyleSheet  ,ImageBackground} from 'react-native';
import { useNavigation } from '@react-navigation/native';



const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
    { place: 'Phuket', code: '83000' },
]

const ZipItem = ({ place, code, navigation }) => (
    <TouchableHighlight onPress={() => navigation.navigate('Weather', { zipCode: code })} underlayColor='#AED6F1'>
        <View style={styles.op}>
            <Text style={styles.fontS}>{place}</Text>
            <Text style={styles.fontS}>{code}</Text>
        </View>
    </TouchableHighlight>
)



const _keyExtractor = item => item.code
const PhotosA = "./bg.jpg";
export default function ZipCodeScreen() {
    const navigation = useNavigation()
    return (
        
        <View>
            <ImageBackground source={require(PhotosA)} style={styles.backdrop}>
            <FlatList
                data={availableZipItems}
                keyExtractor={_keyExtractor}
                renderItem={({ item }) => <ZipItem {...item} navigation={navigation} />}
            />
            <StatusBar style="auto" />
            </ImageBackground>
        </View>
    );

}
const styles = StyleSheet.create({
    backdrop: {
        // alignItems: 'center',
        width: '100%',
        height: '100%',
        // borderColor: 'red',
        // borderWidth: 4,
        
    },
    mons: {
        width: '100%'
    },
    op: {
    //    backgroundColor: 'red',
       // opacity: 0.5,
       padding: 10,
    //    margin: 10,
        alignItems: "center",
        flexDirection: 'row',
       justifyContent: 'space-around',
    },
    fontS:{
        fontSize: 30,
        color: 'black',
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
    redR:{
          backgroundColor: 'red', 
    }
});
