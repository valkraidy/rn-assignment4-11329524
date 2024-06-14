
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Screens/Home';
import Login from './Screens/Login';




const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
         name="Login"
          component={Login}
         options={{ headerShown: false }}
           />

        <Stack.Screen
         name="Home" 
         component={Home}
         options={{ headerShown: false }}
         
         />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigator;
