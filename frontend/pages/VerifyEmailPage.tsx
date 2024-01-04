import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import InputField from '../components/InputField'
import BigButton from '../components/BigButton'
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import OtpInputBox from '../components/OtpInputBox';


const VerifyEmailPage = ({ navigation }: { navigation: NavigationProp<ParamListBase> }) => {
  return (
    <SafeAreaView style={styles.container}>
        <View>
            <Text style={styles.headerText}>
            Verify your email
            </Text>
            <Text style={styles.text2}>
                Enter the 4 digit code sent to your email id 
            </Text>
        </View>

        <View>
            {/* <InputField textforInput={''} placeholder={'Enter Email'}></InputField> */}
            <OtpInputBox></OtpInputBox>
        </View>

        <View>
            <BigButton btnLabel={'Verify email'} btnWidth={300} btnPosition='relative' marginTop={40} Press={() => navigation.navigate('ResetPassPage')}></BigButton>
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

export default VerifyEmailPage