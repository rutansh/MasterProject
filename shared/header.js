import React from 'react';
import {StyleSheet,Text,View} from 'react-native';


// This component is used to provide header styling in mobile application i.e. title
export default function Header({navigation, title})
{

    return(
        <View style={styles.header}>
            
            <View>
                <Text style={styles.headerText}>
                {title} 
                </Text>
            </View>
        </View>
    );

}

// Styling of the title
const styles=StyleSheet.create({

    header:{
        width:'100%',
        height:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },
    headerText:
    {
        fontWeight:'bold',
        fontSize:20,
        color:'#333',
        letterSpacing:1,
        alignItems:'center',

    },
    icon:{
        position:'absolute',
        left:1,        
    },
});