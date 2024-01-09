import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import InputField from '../components/InputField'
import BigButton from '../components/BigButton'
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import BigCardNew from '../components/BigCardNew';




const SignInPage = ({ navigation }: { navigation: NavigationProp<ParamListBase> }) => {
  const [text, onChangeText] = React.useState('');

  const handleButtonPress = () => {
    // Implement the functionality for the button press
  };

  return (
    <SafeAreaView style={styles.container}>
        <View>
      <Text style= {styles.helloText}>Hello,</Text>
      <Text style= {styles.welcomeText}>Welcome back!</Text>

    </View>
    
    <View style={{marginTop: 20}}>
    <InputField textforInput={'Email'} placeholder={'Enter email'}></InputField>
    <InputField textforInput={'Password'} placeholder={'Enter password'}></InputField>
    </View>

    <TouchableOpacity>
    <View>
      <Text style={styles.forgotText} onPress={() => navigation.navigate('ForgotPassPage')}>Forgot Password?</Text>
    </View>
    </TouchableOpacity>

    
        <BigButton btnLabel={'Sign In'} btnWidth={300} btnPosition={'relative'} marginTop={40} Press={() => navigation.navigate('HomeScreen')}></BigButton>

        <TouchableOpacity style={styles.gButton}>
          <Image source={require('../assets/gbutton.png')} />
        </TouchableOpacity>

    <View style={styles.bottomText}>
      <Text>Don’t have an account? </Text>
      <TouchableOpacity>
        <Text style={styles.signUpText} onPress={() => navigation.navigate('SignUpPage')}>Sign up</Text>
      </TouchableOpacity>
    </View>
    
    
    </SafeAreaView>
    
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    helloText: {
        fontSize: 30,
        // lineHeight: 40,
        fontWeight: '500',
        color: 'black',
        textAlign: 'left',
        marginTop: 20,
        paddingLeft: 20,
        paddingBottom: 10,
        marginLeft: 10,
    
      },

      welcomeText: {
        fontSize: 20,
        fontWeight: '500',
        color: 'black',
        marginLeft: 10,
        paddingLeft: 20
        
      },

      forgotText: {
        textAlign: 'left',
        marginLeft: 10,
        paddingLeft: 20,
        marginTop: 10,
        fontWeight: '400',
        fontSize: 14,
        color: '#FC1125',
        textDecorationLine: 'underline',
      },

      gButton: {
       alignSelf: 'center',
      },

      bottomText: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 10,
      },

      signUpText: {
        color: '#FC1125',
        textDecorationLine: 'underline'
      }
      
})


export default SignInPage