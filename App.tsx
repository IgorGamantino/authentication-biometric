import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Login } from './src/screens/login';
import 'react-native-gesture-handler';    
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import { Home } from './src/screens/Home';
export default function App() {
  const Stack = createStackNavigator();
  return (
   <NavigationContainer 
   >
        <Stack.Navigator initialRouteName="Login" screenOptions={{
          header: ()=> null
        }}>
          <Stack.Screen name="Home" component={Home}  />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
        </NavigationContainer>
   
  );
}
