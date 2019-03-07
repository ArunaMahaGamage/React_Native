/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button
} from 'react-native';
import RNGooglePlacePicker from 'react-native-google-place-picker';


type Props = {};
export default class Home extends React.Component {

constructor(props) {
    super(props);
    this.state = {
      location: null
    }
  }

onPress() {
    RNGooglePlacePicker.show((response) => {
      if (response.didCancel) {
        console.log('User cancelled GooglePlacePicker');
      }
      else if (response.error) {
        console.log('GooglePlacePicker Error: ', response.error);
      }
      else {
        this.setState({
          location: response
        });
      }
    })
  }


  render() {
    return (
      <View style={styles.container}>

        <TouchableOpacity onPress={this.onPress.bind(this)}>
          <Text style={{color: '#72c02c', fontSize: 20, fontWeight:'bold'}}>
            Click me to See Nearest Shops
          </Text>
        </TouchableOpacity>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  location: {
    backgroundColor: 'white',
    margin: 25
  }
});
