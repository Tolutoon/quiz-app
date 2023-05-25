import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useEffect, useState } from 'react';

const Quiz = ({navigation}) => {
  const [questions, setQuestions] = useState();
  const [ques, setQues] = useState(0);
  const getQuiz = async () => {
    const url='https://opentdb.com/api.php?amount=50&category=17&difficulty=medium&type=multiple';
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.results[0])
    setQuestions(data.results);
  };

  useEffect(() => {
    getQuiz();
  }, []);

  const handleNextPress =()=> {
    setQues(ques+1)
  }; 

  return (
    <View style={styles.container}>
      {questions && (
      <View style={styles.parent}> 
        <View style={styles.top}>
        <Text style={styles.question}>Q. {questions[ques].question}</Text>  
      </View>
      <View style={styles.options}>
        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.option}>Option 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.option}>Option 2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.option}>Option 3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.option}>Option 4</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>SKIP</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Result')} >
          <Text style={styles.buttonText}>END</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleNextPress}>
          <Text style={styles.buttonText}>NEXT</Text>
        </TouchableOpacity>
        </View>
      </View>
      )}
    </View>
  )
}

export default Quiz;

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
  },
  button: {
    backgroundColor: '#184E77',
    padding: 12,
    paddingHorizontal: 20,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 30,
},
buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFF'
},
question: {
  fontSize: 28,
},
option: {
  fontSize: 18,
  fontWeight: '400',
  color: 'white',
},
optionButton: {
  paddingVertical: 12,
  marginVertical: 6,
  backgroundColor: '#34A0A4',
  paddingHorizontal: 12,
  borderRadius: 12,
},
parent : {
  height: '100%',
},
});