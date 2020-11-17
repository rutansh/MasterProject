import React,{useState} from 'react';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';
import Navigator from './routes/drawer'

// This is a root component for mobile application
const getFonts=()=> Font.loadAsync({
    'sen-regular':require('./assets/fonts/Sen-Regular.ttf'),
    'sen-bold':require('./assets/fonts/Sen-Bold.ttf'),
  });

// <Navigator> is used to provide navigation in the mobile app
// AppLoading is used to load font styling during application load
export default function App() {
  const[fontsLoaded,setfontsLoaded]=useState(false);
  if(fontsLoaded)
  {
    return (
      <Navigator/>
    );
  }
  else
  {
    return(
      <AppLoading 
    startAsync={getFonts}
    onFinish={()=>setfontsLoaded(true)}
    />
    )
    
  }
}