import Home from '../src/screens/Home';
import Details from '../src/screens/Details';

import { createAppContainer, createStackNavigator } from 'react-navigation';

const Routes = createAppContainer(
  createStackNavigator({
    Home: Home,
    About: Details,
  })
);

export default Routes;