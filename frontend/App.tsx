import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LandingPage from './pages/LandingPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import ForgotPassPage from './pages/ForgotPassPage';
import VerifyEmailPage from './pages/VerifyEmailPage';
import ResetPassPage from './pages/ResetPassPage';
import HomeScreen from './pages/HomeScreen';

function App() {

  const Stack = createNativeStackNavigator();
    
  return (
    <NavigationContainer>
      <Stack.Navigator
       screenOptions={{
        headerShown: false
      }}
      
      >
      <Stack.Screen name='LandingPage' component={LandingPage} />
      <Stack.Screen name='HomeScreen' component={HomeScreen} />
      <Stack.Screen name='SignInPage' component={SignInPage} />
      <Stack.Screen name='ForgotPassPage' component={ForgotPassPage} />
      <Stack.Screen name='VerifyEmailPage' component={VerifyEmailPage} />
      <Stack.Screen name='ResetPassPage' component={ResetPassPage} />

      <Stack.Screen name='SignUpPage' component={SignUpPage} />
      </Stack.Navigator>
      
    </NavigationContainer>
    
    
  );
}



export default App;
