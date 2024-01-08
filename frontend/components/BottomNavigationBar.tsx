import React, { useEffect } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface BottomBarProps {
    onItemTapped: (index: number) => void;
    selectedIndex: number;
    selected: string | undefined;   
    setSelected: React.Dispatch<React.SetStateAction<string | undefined>>;
    disabled?: boolean;
    defaultSelected?: boolean; 
    
  }

const BottomNavigationBar: React.FC<BottomBarProps> = ({ onItemTapped, selectedIndex, selected,setSelected, disabled = false, defaultSelected = false,  }) => {
  const listofIcon = [
    'home', 
    'bookmark-outline',
    'empty_space',
    'notifications-outline',
    'person',
  ];

  // useEffect(() => {
  //   // Set the first tab as selected by default when the component mounts
  //   if (defaultSelected) {
  //       setSelected(selectedIndex);
  //   }
  // }, [])

  

  return (
    <View
      style={{
        
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
      }}>
        <View style={{
        padding:20,flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',position:'relative'}}>
           <TouchableOpacity style={{ position: 'absolute', backgroundColor: 'red', width: 70, height: 70, borderRadius: 35, bottom: 33, zIndex: 10,left:'50%',
           transform: [{ translateX:-25 }] ,alignItems:'center',justifyContent:'center',
           borderColor:'#f8f4f4',borderWidth:5,      shadowColor: 'black',
           shadowOpacity: 0.1,        shadowRadius: 24,

           }}>
           <Icon
            name={'add-outline'}
            size={30}
            color={'#D9D9D9'}
          />
         </TouchableOpacity>
      {listofIcon.map((icon, index) => {
    return icon === 'empty_space' ? (<View key={index}></View>) : (
        <TouchableOpacity
        key={index}
        onPress={() => onItemTapped(index)}
        style={{
          alignItems: 'center',
        }}>
          
          
            <Icon
            name={icon}
            size={30}
            color={selectedIndex === index ? '#FC1125' : '#D9D9D9'}
            />
          
        </TouchableOpacity>)
          }
      )}
      
        </View>
    </View>
  );
};

export default BottomNavigationBar;
