import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const StepsCard = () => {
  return (
    <View style={styles.cardContainer}>
     <View>
        <Text style={styles.stepText}>Step 1</Text>
     </View>
     <View>
        <Text style={styles.description}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, recusandae.
        </Text>
     </View>
    </View>
  )
}

const styles = StyleSheet.create({
    cardContainer:{
        marginTop: 20,
        height: 90,
        width: 320,
        backgroundColor: '#D9D9D9',
        borderRadius: 12,

    },
    stepText: {
        padding: 10,
    },
    description:{
        paddingLeft: 10,
        color: '#A9A9A9',

    }
})

export default StepsCard