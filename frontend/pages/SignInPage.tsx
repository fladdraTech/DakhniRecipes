import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import InputField from '../components/InputField'
import BigButton from '../components/BigButton'

const SignInPage = () => {
    const [text, onChangeText] = React.useState('')
  return (
    <SafeAreaView style={styles.container}>
        <View>
      <Text style= {styles.helloText}>Hello,</Text>
      <Text style= {styles.welcomeText}>Welcome back!</Text>

    </View>
    <InputField textforInput={'Email'} placeholder={'Enter email'}></InputField>
    <InputField textforInput={'Password'} placeholder={'Enter password'}></InputField>

    <TouchableOpacity>
    <View>
      <Text style={styles.forgotText}>Forgot Password?</Text>
    </View>
    </TouchableOpacity>

    
        <BigButton btnLabel={'Sign In'} btnWidth={300} btnPosition={'relative'} marginTop={40}></BigButton>

        <TouchableOpacity style={styles.gButton}>
          <Image source={require('../assets/gbutton.png')} />
        </TouchableOpacity>

    <View style={styles.bottomText}>
      <Text>Don’t have an account? </Text>
      <TouchableOpacity>
        <Text>Sign up</Text>
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
        lineHeight: 40,
        fontWeight: '500',
        color: 'black',
        textAlign: 'left',
        marginTop: 20,
        padding: 20,
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
      },

      gButton: {
       alignSelf: 'center',
      },

      bottomText: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 10,
      }
      
})

export default SignInPage