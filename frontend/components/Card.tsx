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
     
        </ ImageBackground>
           <View style={styles.overlay}> 
        </View>
        
        <Text style={styles.name}>{CardName}</Text>
    </View>
  )}

  const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        width:150,
        overflow: 'hidden', // To clip the overlay to the card boundaries
        margin: 10,
        alignItems:'center',
        shadowColor: 'black',
        shadowOpacity: 1,
        shadowRadius: 4,
        position:'relative'
    },
    image: {
      width: 150,
      height: 150,
      borderRadius: 15,
      alignItems:'center',
      overflow:'hidden',
      opacity:0.7,
      zIndex:1
      
    },
    overlay: {
      width: 150,
      height: 150,
      position:'absolute',
      backgroundColor:'black',
      opacity:0.7,
      zIndex:1,


    },

    

    name: {
      alignItems:'center',
      // width: 150,
      // height: 150,
      borderRadius:15,
      fontSize: 16,
      fontWeight: 'bold',
      color: 'white',
      paddingLeft:10,
      paddingBottom:5,
      backgroundColor:'transparent',
      textAlignVertical:'bottom',
      opacity:1,
      zIndex:3,
      position:'absolute',
      bottom:0,
      left: 0
      
    },
  });

  
  
export default Card
