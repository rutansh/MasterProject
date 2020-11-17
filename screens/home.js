import React,{useState} from 'react';
import {View,Text,TextInput,Button,TouchableWithoutFeedback,Keyboard} from 'react-native';
import {globalStyles} from '../styles/global';

//This component is a root component for custom input type searching functionality
export default function Home({navigation})
{
    const [facilityName,setFacilityName]=useState('');
    // when user clicks on search button
    const pressHandler=()=>{
        alert("\nFacility Name is: "+facilityName)     
        navigation.navigate('ReviewDetails',{name:facilityName})
    }

    // return text input field to provide searching functionality
    return (
        <TouchableWithoutFeedback onPress={()=>{
            Keyboard.dismiss();
          }}>
        <View  style={globalStyles.container}>       
        <Text style={{marginLeft:10}}>Enter Facility Name: </Text>
        <TextInput 
        style={globalStyles.input}
        placeholder='Enter Facility Name'
        onChangeText={(val)=>setFacilityName(val)}
        />
        <Button style={{width:20}}title="Search" color='coral' onPress={pressHandler}/>
        </View>
        </TouchableWithoutFeedback>
    );
}
