/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import 'react-native-get-random-values' //for uuid rnadom unique id generation

AppRegistry.registerComponent(appName, () => App);
