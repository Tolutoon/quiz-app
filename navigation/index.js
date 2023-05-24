import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/home';
import Quiz from '../screens/quiz';
import Result from '../screens/result';

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Quiz" component={Quiz} />
      <Stack.Screen name="Result" component={Result} />
    </Stack.Navigator>
  );
}

export default MyStack;