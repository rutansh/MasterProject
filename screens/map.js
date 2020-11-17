import React from 'react';
import {View,Text,StyleSheet,Dimensions,Alert} from 'react-native';
import data from '../data.json';
import MapView from 'react-native-maps';


// This component is used to provide information about the facilities on Map layer
export default class MapScreen extends React.Component {

  constructor(props) {
    super(props);
    
    // getting all the facilities information during initial rendering
    this.state = {
      navigation:props.navigation,
      isLoading: true,
      markers: [],
      data_array:data["Sheet1"],
      selectedFacility:null,
    };
  }

  //To load the data for markers, componentDidMount() was used
  componentDidMount() {
    this.setState({ 
      isLoading: false,
      markers: this.state.data_array, 
    });
  }

  // Render map layer on phone screen 
  // It uses <MapView> component of react-native-maps library 
  // In <MapView> region property is used to provide facilities on the map layer
  render() {

    return (
      <View style={styles.container}>
        <View style={styles.inputField}>
        <Text>THIS IS MAP</Text>
        </View>
        
    <MapView
    style={styles.mapStyle}
    region={{
      latitude: 38.13635,
      longitude: -121.14877,
      latitudeDelta: 2.0,
      longitudeDelta: 2.0,
    }}>
    {this.state.isLoading ? null : this.state.markers.map((marker, index) => {
      
    // Getting longitude and lattitude of every facility
     const coords = {
         latitude: parseFloat(marker.latitude),
         longitude: parseFloat(marker.longitude),
     };
     
     
     //To render every marker
      return(
         <MapView.Marker
         
            key={index}
            coordinate={coords}
            title={"Facility Address: "+marker.facAddr}
            description={"GEOID: "+marker.GEOID}
            onPress={() => 
              {
                Alert.alert("Details about selected items",'Name is :'+JSON.stringify(marker['primaryName']),[
                  {text:'Okay',onPress:()=>this.state.navigation.navigate('FilterFacility',marker)},
                  {text:'Cancel',onPress:()=>console.log('Cancel Pressed')}
                ])     
                 
              }}/>
            );
      })}
</MapView>
      </View>
    );
  }
}

//To style map layer in mobile application
const styles = StyleSheet.create
(
  {
  container: 
  {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    
  },
  inputField:{
    marginTop:60
  }
});
