import{createStackNavigator} from 'react-navigation-stack';
import MapScreen from '../screens/map';
import Header from '../shared/header';
import React from 'react';
import FilterFacility from '../screens/filterFacility';


// This component has configuration for stack navigator to provide navigation between different screens using Map layer 
const screens={

    //1st screen
    MapScreen:{
        screen:MapScreen,
        navigationOptions:({navigation})=>{
            return {
                headerTitle:()=><Header navigation={navigation} title='Map'/>,
                headerStyle:{backgroundColor:'#eee'}
            }
        }    
    },

    //2nd screen
    FilterFacility:{
        screen:FilterFacility,
        navigationOptions:{
            title:'Add Score',
            }
    },
}

// configuring stack navigator for map screen
const AboutStack=createStackNavigator(screens,
    {
        defaultNavigationOptions:{
            headerTintColor:'#444',
            headerStyle:{backgroundColor:'#eee',height:60}
        }
    });
export default AboutStack;