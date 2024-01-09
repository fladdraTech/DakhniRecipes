import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

interface StepsCardProps {
    txtLabel: string;
    description: string;
    time? : string;
    Press?: () => void;
  }

const StepsCard: React.FC<StepsCardProps>  = ({txtLabel, description, time}) => {
  return (
    <View style={styles.cardContainer}>
     <View>
        <Text style={styles.stepText}>{txtLabel}</Text>
     </View>
     <View>
        <Text style={styles.description}>
            {description}
        </Text>
        <Text style={styles.time}>{time}</Text>
     </View>
    </View>
  )
}

const styles = StyleSheet.create({
    cardContainer:{
        marginTop: 20,
        paddingBottom: 10,
        height: 'auto',
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

    },
    time:{
        paddingLeft: 10,
        color: '#A9A9A9',
        marginTop: 10,
        fontSize: 7,
        fontWeight: '400',
    }
})

export default StepsCard