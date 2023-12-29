import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon  from 'react-native-vector-icons/Ionicons'
import LinearGradient  from 'react-native-linear-gradient'
import MaskedView from '@react-native-masked-view/masked-view';


interface BigButtonProps {
    btnLabel: string;
    Press?: () => void;
  }


const BigButton: React.FC<BigButtonProps> = ({btnLabel,  Press}) => {
   

  return (
    
    <TouchableOpacity onPress={Press} style={styles.button}>
        
          <LinearGradient colors={['#FC1125', '#FF9300']} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} style={styles.buttonGradient}>
            <View style={styles.buttonContent}>
              <Text style={styles.buttonText}>{btnLabel}</Text>
              <Icon name="arrow-forward" size={20} color="white" style={styles.buttonIcon} />
            </View>
          </LinearGradient>
        </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    gradient: {
        display: 'flex',
        flexDirection: 'row',
        overflow: 'hidden',
      },
      gradientText: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
            
      },
    
      button: {
        position: 'absolute',
        bottom: 20,
        alignSelf: 'center',
        height: 54,
        width: 240,
        // display:'flex',
        // flexDirection:'row',
        // justifyContent:'center'
        textAlign:'center',
      },
      buttonGradient: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 8,
        paddingHorizontal: 20,
        paddingVertical: 14,
        justifyContent:'center'
      },
    
      buttonContent: {
        display:'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      },
    
      buttonText: {
        color: 'white',
        fontWeight: '500',
        fontSize: 18,
        marginRight: 8,
        textAlign: 'center',
        
      },
      buttonIcon: {
        marginLeft: 5,
        
      },
 })

export default BigButton