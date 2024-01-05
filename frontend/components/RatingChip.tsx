import { View, Text, TouchableOpacity, StyleSheet, DimensionValue, Image, SafeAreaView, ImageBackground } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';

interface RatingChipProps {
    btnLabel: string;
  }

const RatingChip: React.FC<RatingChipProps> = ({btnLabel='4.0'}) => {

   const styles=StyleSheet.create({
    image: {
        height:20,
        width:30
      },
      
    })

    return(
        <SafeAreaView>
        <View>
        <ImageBackground source={require('../assets/square.png')} style={styles.image} >
        </ ImageBackground>
        </View>
        </SafeAreaView>
    )
}
export default RatingChip