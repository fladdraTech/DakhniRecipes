import React from 'react'
import { Text,View,StyleSheet ,ImageBackground, DimensionValue} from "react-native";
import RatingChip from "./RatingChip";
import Time from './Time';
import SavedBtn from './SavedBtn';


interface CardProps {
    BigCardName: string;
    BigCardImage?:string;
    BigCardWidth?:DimensionValue;
    BigCardHeight?:DimensionValue;
    Rating?:string
  }


const BigCardNew:React.FC<CardProps>  = ({BigCardName,BigCardImage,BigCardWidth=300,BigCardHeight=230,Rating}) => {
  return (
    <View>
    <View style={{...styles.card,width:BigCardWidth,height:BigCardHeight}}>
        <ImageBackground  
    
    source={require('../assets/BigCardImage.png')} style={styles.image} >
       
          
       <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
          
  
          
          {/* Add more Card components as needed */}
          </View>
          </ ImageBackground>
             <View style={styles.overlay}>
             
          </View>
          

          
          
  
          <RatingChip Rating={Rating} />
  
          <Time Time="15:10"></Time>
          
          {/* <View style={{marginLeft:40}}> */}
          {/* </View> */}
        
        
        
    {/* <SavedBtn></SavedBtn> */}
  
  
     
  
      <View style={{marginTop:20}}>
      <Text style={styles.name}>{BigCardName}</Text>
      </View>
      </View>
       </View>
  )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        // width:100,
        overflow: 'hidden', // To clip the overlay to the card boundaries
        margin: 10,
        alignItems:'center',
        shadowColor: 'black',
        shadowOpacity: 1,
        shadowRadius: 4,
        position:'relative'
    },

    buttonGradient: {
      width:350,
      height:'100%',
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: 8,
      paddingHorizontal: 20,
      paddingVertical: 14,
      justifyContent:'center',

    },

    image: {
      width: 300,
      height:250,
      borderRadius: 15,
      alignItems:'center',
      overflow:'hidden',
      // backgroundColor:'black',
      opacity:0.9,
      zIndex:1,
    },
    overlay: {
      width: 200,
      height: 150,
      position:'absolute',
      opacity:1,
      zIndex:1,
      

    },

    

    name: {
      alignItems:'center',
      // width: 150,
      // height: 150,
      borderRadius:15,
      fontSize: 16,
      fontWeight: '300',
      color: 'black',
      paddingLeft:10,
      marginTop:10,
      backgroundColor:'transparent',
      textAlignVertical:'bottom',
      opacity:1,
      zIndex:3,
      position:'absolute',
      bottom:0,
      left: 0
      
    },


    
  });

export default BigCardNew