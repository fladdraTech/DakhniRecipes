import React from "react";
import { View,Text,Image,ImageBackground, ImageURISource, StyleSheet } from "react-native";
import { useGetAll } from "../hooks";
import { RecipeInterface } from "../interfaces";
import Card from "./home/Card";


// const { data: savedRecipes } = useGetAll({
//   key: "/social/saved-recipe/list/",
//   enabled: true,
//   onSuccess(data) {
//     console.log("onSuccessonSuccessonSuccess", data);
//   },
//   onError(err) {
//     console.log("ERRRIRIRIRIRI", err);
//   },
// })

interface CircularAvatarProps {
    image?: string | null;
  }


  const Assets: {[key:string]:ImageURISource}= {
    'star':require('../assets/profilePhoto.png'),
    // 'share':require('../../assets/ShareIcon.png'),
    // 'rate':require('../../assets/blackStar.png'),
    // 'review':require('../../assets/Review.png'),
}

const CircularAvatar : React.FC<CircularAvatarProps> = ({image}) =>{

    const styles=StyleSheet.create({
        profileImage:{
            height:150,
            width:150,
            alignSelf:'center',
            borderRadius:90
        }
    })
    

    return(
        <View >
            <View style={{marginTop:5}}>
        {image && <Image source={Assets[image]} style={styles.profileImage}></Image>}</View>
        </View>
    );
}
export default CircularAvatar