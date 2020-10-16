import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList145804Navigator from '../features/ArticleList145804/navigator';
import Maps145791Navigator from '../features/Maps145791/navigator';
import Tutorial2145786Navigator from '../features/Tutorial2145786/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList145804: { screen: ArticleList145804Navigator },
Maps145791: { screen: Maps145791Navigator },
Tutorial2145786: { screen: Tutorial2145786Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
