import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Quiz = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text>Imagine this is a tough question</Text>
      </View>
      <View style={styles.options}>
        <TouchableOpacity>
          <Text>Option 1</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Option 2</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Option 3</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Option 4</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity style={styles.button}>
          <Text>SKIP</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>NEXT</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity onPress={()=>navigation.navigate('Result')}>
          <Text>END</Text>
  </TouchableOpacity> */}
      </View>
    </View>
  )
}

export default Quiz

const styles = StyleSheet.create({
  container: {
        paddingTop: 50,
        paddingHorizontal: 20,
        height: '100%'
  },
  top: {
    marginVertical: 16,
  },
  options: {
    marginVertical: 16,
    flex: 1,
  },
  bottom: {
    marginBottom: 12,
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});