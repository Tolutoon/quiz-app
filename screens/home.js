import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react';
import Title from '../components/Title';
import Img from '../assets/Home-image.png';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Title/>
        <View style={styles.bannerContainer}>
            <Image source={{uri:'https://img.freepik.com/premium-vector/online-test-checking-answers-concept-flat-vector-illustration_128772-856.jpg?w=2000'}} 
            style={styles.banner}
            resizeMode='cover'
            />
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate('Quiz')} style={styles.button}>
            <Text style={styles.buttonText}>Start</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Home;

const styles = StyleSheet.create({
    banner: {
        height: 350,
        width: 350,
    },
    bannerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    container: {
        paddingTop: 50,
        paddingHorizontal: 20,
        height: '100%'
    },
    button: {
        width: '100%',
        backgroundColor: '#184E77',
        padding: 20,
        borderRadius: 16,
        alignItems: 'center',
        marginBottom: 30,
    },
    buttonText: {
        fontSize: 20,
        fontWeight: '600',
        color: '#FFF'

    }
});