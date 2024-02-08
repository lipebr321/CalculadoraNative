import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import home from './src/pages/home/home';
import primos from './src/pages/primos/primos';
import imc from './src/pages/imc/imc';
import bhaskara from './src/pages/bhaskara/bhaskara';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={home}></Stack.Screen>
        <Stack.Screen name="primos" component={primos}></Stack.Screen>
        <Stack.Screen name="imc" component={imc}></Stack.Screen>
        <Stack.Screen name="bhaskara" component={bhaskara}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
