import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react';
import Title from '../components/Title';
import Img from '../assets/Home-image.png';

const Home = ({navigation}) => {
  return (
    <View>
        <Title/>
        <View style={styles.bannerContainer}>
            <Image source={{uri:'https://img.freepik.com/premium-vector/online-test-checking-answers-concept-flat-vector-illustration_128772-856.jpg?w=2000'}} 
            style={styles.banner}
            resizeMode='cover'
            />
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate('Quiz')}>
            <Text>Start</Text>
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
    }
});