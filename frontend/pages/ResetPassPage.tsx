import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import InputField from '../components/common/InputField'
import BigButton from '../components/common/BigButton'

const ResetPassPage = () => {
  return (
    <SafeAreaView style={styles.container}>
    <View>
        <Text style={styles.headerText}>
            Choose new Password
        </Text>
        <Text style={styles.text2}>
            Almost done. Enter your new password and you are all set.
        </Text>
    </View>

    <View>
        <InputField textforInput={'Enter new password'} placeholder={''}></InputField>
        <InputField textforInput={'Confirm new password'} placeholder={''}></InputField>

    </View>

    <View>
        <BigButton btnLabel={'Reset Password'} btnWidth={300} btnPosition='relative' marginTop={40}></BigButton>
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


export default ResetPassPage