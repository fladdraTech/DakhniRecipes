import { View, Text, SafeAreaView, StyleSheet, TextInput } from 'react-native'
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

    
        <BigButton btnLabel={'Sign In'}></BigButton>
    
    
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
        // verticalAlign: 'top',
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
      
})

export default SignInPage