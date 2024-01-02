import React from "react";
import { Text,View,StyleSheet ,ImageBackground} from "react-native";

interface CardProps {
    CardName: string;
    CardImage:string;
  }
  const Card: React.FC<CardProps> = ({CardName,CardImage}) => {

  return(
    <View style={styles.card}>
      <ImageBackground source={require('../assets/sample.png')} style={styles.image} >
        <View style={styles.overlay}>
          <Text style={styles.name}>{CardName}</Text>
        </View>
      </ ImageBackground>
    </View>
  )}

  const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        overflow: 'hidden', // To clip the overlay to the card boundaries
        margin: 10,
        alignItems:'center'

    },
    image: {
      width: 150,
      height: 150,
      borderRadius: 15,
      alignItems:'center',
      overflow:'hidden'
    },
    overlay: {
      ...StyleSheet.absoluteFillObject,
      justifyContent:'flex-end'
      
    },
    name: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'white',
      alignItems:'baseline',
      alignSelf:'flex-start',
      paddingLeft:10,
      paddingBottom:5  
    },
  });

  
  
export default Card
