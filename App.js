import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Loading from './components/Loading';
import Login from './components/Login';
import Register from './components/Register';
import Todo from './components/Todo';
import Welcome from './components/Welcome';

const Stack = createStackNavigator();

export default function App() {

  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={Welcome} options={{headerShown: false}} />
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
        <Stack.Screen name="Register" component={Register} options={{headerShown: false}} />
        <Stack.Screen name="Todo" component={Todo} options={{headerShown: false}} />
        <Stack.Screen name="Loading" component={Loading} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}