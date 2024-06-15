import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Signup from '../screens/Signup';
import Login from '../screens/Login';
import Home from '../screens/Home';
import getStarted from '../screens/get_started';
import pages from '../screens/pages';
// import getStarted from '../screens/get_started';

const Stack = createStackNavigator();

const App_Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Get_started" component={getStarted} />
        <Stack.Screen name="pages" component={pages} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App_Navigation;
