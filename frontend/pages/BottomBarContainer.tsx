import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";
import SavedRecipePage from "./SavedRecipePage";
import NotificationPage from "./NotificationPage";
import AccountPage from "./AccountPage";
import Icon from 'react-native-vector-icons/Ionicons';
import { StyleSheet, TouchableOpacity, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";


const Tab = createBottomTabNavigator();



function BottomBarContainer() {

    const styles=StyleSheet.create({
        navBar:{ 
         height: 'auto',
         backgroundColor: 'white',
         shadowColor: 'black',
         shadowOpacity: 0.1,
         shadowRadius: 24,
         elevation: 5,
         position: 'absolute',
         bottom:0,
         left:0,
         width:'100%',
       },
    
    addButton:{
      position: 'absolute', 
      backgroundColor: 'white',
      width: 70,
      height: 80, 
      borderRadius: 35, 
      bottom: 33, 
      marginLeft:15,
      zIndex: 10,
      left:'50%',
      transform: [{ translateX:-25 }] ,
      alignItems:'center',
      justifyContent:'center',
      borderColor:'white',
      borderWidth:5,      
      shadowColor: 'black',
      shadowOpacity: 0.1,        
      shadowRadius: 24
      },
    
      addIcon:{ 
        backgroundColor:'white',
        padding:20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',position:'relative'
      }
       })
    
  const AddButton = ({children, onPress}) => (
    <TouchableOpacity onPress={onPress} style={{
        top: -40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        height: 80,
        borderRadius: 40,
        padding: 10,
    }}>

        <LinearGradient colors={['rgba(252, 17, 37, 1)', 'rgba(255, 147, 0, 1)']} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} style={{borderRadius:50,height:60,width:60,marginBottom:7}}>
        <View style={{
            width: 60,
            height: 60,
            borderRadius: 40,
        }}>
            {children}
        </View>
        </LinearGradient>
    </TouchableOpacity>
  );
  return (
    <Tab.Navigator 
        initialRouteName="HomeScreen"
        screenOptions={({route}) => ({
            tabBarShowLabel: false,
            tabBarStyle: {
                padding: 12,
                paddingBottom: 20,
                height: 60
            },
            tabBarIcon: ({focused, color, size}) => {
                let iconName;
                if (route.name === 'HomeScreen') {
                    iconName = focused ? 'home' : 'home-outline';
                } else if (route.name === 'SavedRecipePage') {
                    iconName =  focused ? 'bookmark' : 'bookmark-outline';
                } else if (route.name === 'NotificationPage') {
                    iconName =  focused ? 'notifications' : 'notifications-outline';
                } else if (route.name === 'AccountPage') {
                    iconName = focused ? 'person' : 'person-outline';
                } else {
                    iconName = 'add' ;
                }
                return <Icon name={iconName} size={30} color={focused ? '#FC1125' : '#D9D9D9'} />;
            }
        })}
    >
        <Tab.Screen name="HomeScreen" component={HomeScreen}></Tab.Screen>
        <Tab.Screen name="SavedRecipePage" component={SavedRecipePage}></Tab.Screen>
        <Tab.Screen name="Add" component={HomeScreen} options={{
            tabBarButton: (props) => (
                <AddButton {...props} onPress={() => console.log('Add button pressed')} />
            )
        }}></Tab.Screen>
        <Tab.Screen name="NotificationPage" component={NotificationPage}></Tab.Screen>
        <Tab.Screen name="AccountPage" component={AccountPage}></Tab.Screen>
    </Tab.Navigator>
  );
}
export default BottomBarContainer;