import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import InputField from '../components/InputField'
import BigButton from '../components/BigButton'
import { NavigationProp, ParamListBase } from '@react-navigation/native';


const ForgotPassPage = ({ navigation }: { navigation: NavigationProp<ParamListBase> }) => {
  return (
    <SafeAreaView style={styles.container}>
        <View>
            <Text style={styles.headerText}>
                Forgot Password?
            </Text>
            <Text style={styles.text2}>
            Enter The email address associated with your account
            </Text>
        </View>

        <View>
            <InputField textforInput={'Email'} placeholder={'Enter Email'}></InputField>
        </View>

        <View>
            <BigButton btnLabel={'Confirm'} btnWidth={300} btnPosition='relative' marginTop={40} Press={() => navigation.navigate('VerifyEmailPage')}></BigButton>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headerText: {
        fontWeight: '500',
        color: 'black',
        textAlign: 'left',
        padding: 20,
        marginLeft: 10,
        fontSize: 20,
    },
    text2: {
        textAlign: 'left',
        paddingLeft: 20,
        marginLeft: 10,
        fontSize: 14,
        color: 'black',
    }
})

export default ForgotPassPage