import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Result = () => {
  return (
    <View>
      <View>
        <Text>Result</Text>
      </View>
      <View style={styles.bannerContainer}>
        <Image source={{uri: 'https://cdn.dribbble.com/users/466659/screenshots/4962723/quiz_illustration.png?compress=1&resize=800x600&vertical=top'}} 
        style={styles.banner} 
        resizeMode='contain' />
      </View>
      <View>
        <TouchableOpacity>
          <Text>Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Result;

const styles = StyleSheet.create({
  banner: {
    height: 400,
    width: 400,
  },
  bannerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  }
});