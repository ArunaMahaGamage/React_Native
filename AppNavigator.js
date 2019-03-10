/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import { createStackNavigator } from 'react-navigation';
import Home from './Home';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Friends from './Friends';

const AppNavigator = createStackNavigator({
    SignIn: { screen: SignIn } ,
    SignUp: { screen: SignUp } ,
    Home: { screen: Home } ,
    Friends: { screen: Friends}
}, { headerMode: 'none' }, {
    initialRouteName: 'Loading'
  });

export default AppNavigator;
