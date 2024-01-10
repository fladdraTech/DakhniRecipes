import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

interface InputField {
    textforInput: string;
    placeholder: string;
    [x:string]: any;

    // Press?: () => void;
  }

const InputField: React.FC<InputField> = ({textforInput, placeholder,...otherProps}) => {
    const [text, onChangeText] = React.useState('')
  return (
    <View>
        <Text style={styles.inputText}>{textforInput}</Text>
        <TextInput  {...otherProps} style= {styles.input} onChangeText={onChangeText} placeholder= {placeholder} keyboardType='email-address' />

        
    </View>
  )
}

const styles = StyleSheet.create({
    
      input: {
        height: 50,
        // margin: 12,
        borderWidth: 1,
        marginLeft: 30,
        marginRight: 30,
        padding: 10,
        borderColor: '#FC1125',
        borderRadius: 10,
        
        
      },

      inputText: {
        marginLeft: 10,
        marginTop: 15,
        paddingLeft: 20,
        lineHeight: 27,
        color: 'black',

      }
    })

export default InputField