/**
 *   npm install --save react-navigation
 *   npm install --save react-native-gesture-handler
 *   npm i jetifier
 *   npx jetify 
 */

import {AppRegistry} from 'react-native';
import Routes from './src/index';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Routes);
