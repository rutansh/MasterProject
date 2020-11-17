import React from 'react';
import {View,Text,TouchableWithoutFeedback,Keyboard,FlatList,TouchableOpacity} from 'react-native';
import {globalStyles} from '../styles/global';
import data from '../data.json';
import Card from '../shared/card';


// This component is used to give the list of facilities with the same address
export default function ReviewDetails({navigation})
{
    //facilityName will take the parameter from the first screen
    const facilityName=navigation.getParam('name');
    let data_array=data["Sheet1"];

    //searching for the address
    data_array = data_array.filter(function(item){
        return item.facAddr == facilityName;
     });


    // It will render the list of facilities having same name
    return (
        <TouchableWithoutFeedback onPress={()=>{
            Keyboard.dismiss();
          }}>
        <View  style={globalStyles.container}>
            <Text style={globalStyles.textStyle}>List of facilities</Text>
            <FlatList 
            data={data_array}
            renderItem={({item})=>(
                <TouchableOpacity onPress=
                
                // If user clicks on any facility, it will render the 3rd layer and navigate to 3rd screen
                {()=>navigation.navigate('FilterFacility',item)}>
                    <Card>
                    <Text style={globalStyles.textStyle}>Primary Name: {item.primaryName}</Text>
                    </Card>
                </TouchableOpacity>)}
                
                keyExtractor={(item, index) => index.toString()}/>
    </View>
        </TouchableWithoutFeedback>
        
    );
}
