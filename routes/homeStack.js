import{createStackNavigator} from 'react-navigation-stack';
import Home from '../screens/home';
import ReviewDetails from'../screens/reviewDetails';
import FilterFacility from '../screens/filterFacility';
import Header from '../shared/header';
import React from 'react';

// This component has configuration for stack navigator to provide navigation between different screens using custom input search type
const screens={
    //1st screen
    Home:{
        screen:Home,
        navigationOptions:({navigation})=>{
            return {
                headerTitle:()=><Header navigation={navigation} title='Custom Input'/>,
                headerStyle:{backgroundColor:'#eee'}
            }
        }
    },
    //2nd Screen
    ReviewDetails:{
        screen:ReviewDetails,
        navigationOptions:
        {
            title:'Result',
        }
    },
    //3rd Screen
    FilterFacility:{
        screen:FilterFacility,
        navigationOptions:
        {
            title:'Add Score', 
        }
    },
}

//Confihuring stack navigator
const HomeStack=createStackNavigator(screens,
    {
        defaultNavigationOptions:{
            headerTintColor:'#444',
            headerStyle:{backgroundColor:'#eee',height:60}
        }
    });
export default HomeStack;