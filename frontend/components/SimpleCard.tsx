import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'


interface SimpleCardProps {
    label: string;
    
  }

const SimpleCard: React.FC<SimpleCardProps> = ({label}) => {

    const styles = StyleSheet.create({
        container: {
            height: 150,
            width: 124,
            marginTop: 20,
            // borderWidth: 1
        },
        image: {
            height: 124,
            width: 124,
            borderRadius: 10,
        },
        text: {
            color: 'black',
            paddingTop: 10,
            paddingLeft: 5,
           
        }
      })
  return (
    <View style={styles.container}>
      <View>
        <Image source={require('../assets/simpleImage.png')} style={styles.image} />
      </View>
      <View style={{paddingBottom: 5}}>
        <Text style={styles.text}>{label}</Text>
      </View>
    </View>
  )

  
}


export default SimpleCard