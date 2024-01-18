import React from "react";
import CircularAvatar from "../CircularAvatar"
import { View ,Text, StyleSheet, DimensionValue} from "react-native";

interface ProfileProps {
    Name?:string,
    Label?:string,
    Description?:string,
    height?:DimensionValue,
    width?:DimensionValue,
    image?:string
    
  }


  const ProfileComponent: React.FC<ProfileProps> = ({
    Name='Elena',
    Label,
    Description,
    height,
    width,
    image,
    
  }) => {

    const styles=StyleSheet.create({
        Name:{
          fontSize:20,
          alignSelf:'center',
          marginTop:10,
          height:height
        },

        Label:{
          fontSize:15,
          alignSelf:'center',
          marginTop:10
        },

        Description:{
          fontSize:15,
          alignSelf:'center',
          marginTop:10
        },
    })
    return(
      <View>
      <View style={{flexDirection: "column"}}>
            {image && <CircularAvatar image="photo"></CircularAvatar>}
            <Text style={{...styles.Name}}>{Name}</Text>
            <Text style={{...styles.Label}}>{Label}</Text>
            <Text style={{...styles.Description}}>{Description}</Text>
        </View>
        </View>
    )
  }
  export default ProfileComponent
