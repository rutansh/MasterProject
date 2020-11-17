import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
import MapScreen from './mapStack';
import HomeStack from './homeStack';


//DrawerNavigator is user to provide navigation bar for custom input search and to render map layer
const RootDrawerNavigator=createDrawerNavigator({

    Home:{
        screen:HomeStack,
    },
    MapScreen:{
        screen:MapScreen,
    }
});

export default createAppContainer(RootDrawerNavigator);