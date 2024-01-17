import React from "react";
import { useState } from "react";
import { ImageBackground, ScrollView, Text, View  } from "react-native";
import SelectBox from 'react-native-multi-selectbox-typescript';
import { xorBy } from 'lodash'
import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const K_OPTIONS = [
    {
      item: 'Juventus',
      id: 'JUVE',
    },
    {
      item: 'Real Madrid',
      id: 'RM',
    },
    {
      item: 'Barcelona',
      id: 'BR',
    },
    {
      item: 'PSG',
      id: 'PSG',
    },
    {
      item: 'FC Bayern Munich',
      id: 'FBM',
    },
    {
      item: 'Manchester United FC',
      id: 'MUN',
    },
    {
      item: 'Manchester City FC',
      id: 'MCI',
    },
    {
      item: 'Everton FC',
      id: 'EVE',
    },
    {
      item: 'Tottenham Hotspur FC',
      id: 'TOT',
    },
    {
      item: 'Chelsea FC',
      id: 'CHE',
    },
    {
      item: 'Liverpool FC',
      id: 'LIV',
    },
    {
      item: 'Arsenal FC',
      id: 'ARS',
    },
  
    {
      item: 'Leicester City FC',
      id: 'LEI',
    },
  ]


function DropDownList() {
    // const [selectedTeam, setSelectedTeam] = useState<{id:string;item:string}| undefined>(undefined)
    const [selectedTeams, setSelectedTeams] = useState<{id:string;item:string}[]>([])
    return (
       
      <SafeAreaView style={{margin:30}}>
        {/* <View style={{ width: '100%', alignItems: 'center' }}>
          <Text style={{ fontSize: 30, paddingBottom: 20 }}>Demos</Text>
        </View> */}
        {/* <Text style={{ fontSize: 20, paddingBottom: 10 }}>Select Demo</Text>
        <SelectBox
          label="Select single"
          options={K_OPTIONS}
          value={selectedTeam}
          onChange={onChange()}
          hideInputFilter={false}
        /> */}
       <ScrollView horizontal={false}>
        <Text style={{ fontSize: 20, paddingBottom: 0 }}>MultiSelect Demo</Text>
        <SelectBox
          label="Select multiple"
          options={K_OPTIONS}
          selectedValues={selectedTeams}
          onMultiSelect={onMultiChange()}
          onTapClose={onMultiChange()}
          isMulti
        />
        </ScrollView>
      </SafeAreaView>
       
    )
  
    function onMultiChange() {
      return (item:any) => setSelectedTeams(xorBy(selectedTeams, [item], 'id'))
    }
  
    // function onChange() {
    //   return (val:any) => setSelectedTeam(val)
    // }
  }
  
  export default DropDownList
  