import React,{useState} from 'react';
import {View,Text,Button,TextInput,TouchableWithoutFeedback,Keyboard} from 'react-native';
import {globalStyles} from '../styles/global';


// This component is a common component shared between both custom input type and map component
export default function FilterFacility({navigation})
{

    // take the score provided by the user
    const [score,setScore]=useState('');
    const url='localhost:3001/test';

    // it gets called when user clicks on the submit button
    const pressHandler=()=>{
        alert("\nScore is: "+score)
        
        
        //calling post request to post the data on endpoint
        fetch('https://webhook.site/93e7bae3-2754-4180-8618-287be08c12ef', {
        method: 'post',
        mode:'no-cors',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          pgmSysId:navigation.getParam('pgmSysId'),
          PrimaryName:navigation.getParam('primaryName'),
          FacAddr:navigation.getParam('facAddr'),
          CityName:navigation.getParam('cityName'),
          StateName:navigation.getParam('stateName'),
          PostalCode:navigation.getParam('postalCode'),
          Latitude:navigation.getParam('latitude'),
          Longitude:navigation.getParam('longitude'),
          GEOID:navigation.getParam('GEOID'),
          CountyState1:navigation.getParam('CountyState1'),
          CountyState2:navigation.getParam('CountyState2'),
          Score:score
          
        })
      }).catch(e=>(console.log(e)));
      alert("Success...!");
    }

    // It will render all the information about the facility 
    return (
        <TouchableWithoutFeedback onPress={()=>{
            Keyboard.dismiss();
          }}>
        <View  style={globalStyles.container}>
        <Text style={globalStyles.textStyle}>CountyState1: {navigation.getParam('CountyState1')}</Text>
        <Text style={globalStyles.textStyle}>CountyState2: {navigation.getParam('CountyState2')}</Text>
        <Text style={globalStyles.textStyle}>GEOID: {navigation.getParam('GEOID')}</Text>
        <Text style={globalStyles.textStyle}>City Name: {navigation.getParam('cityName')}</Text>
        <Text style={globalStyles.textStyle}>Facility Address: {navigation.getParam('facAddr')}</Text>
        <Text style={globalStyles.textStyle}>Latitude: {navigation.getParam('latitude')}</Text>
        <Text style={globalStyles.textStyle}>Longitude: {navigation.getParam('longitude')}</Text>
        <Text style={globalStyles.textStyle}>Postal Code: {navigation.getParam('postalCode')}</Text>
        <Text style={globalStyles.textStyle}>Primary Name: {navigation.getParam('primaryName')}</Text>
        <TextInput 
        style={globalStyles.textStyle,{marginTop:10,height:50}}
        placeholder='Enter Score'
        keyboardType='numeric'
        onChangeText={(val)=>setScore(val)}
        />
        <View>
        <Button style={{marginTop:10}} title="Add Data" color='coral' onPress={pressHandler}/>
        </View>
        </View>
        </TouchableWithoutFeedback>
    );
}
