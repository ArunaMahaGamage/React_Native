/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import { Button } from 'react-native';

export default class FlexDimensionsBasics extends Component {
    render() {
        return (
            // Try removing the `flex: 1` on the parent View.
            // The parent will not have dimensions, so the children can't expand.
            // What if you add `height: 300` instead of `flex: 1`?
            <View style={{flex: 1}}>
                <View style={{flex: 2, backgroundColor: 'powderblue'}} />
                <View style={{flex: 2, backgroundColor: 'skyblue'}} />
                <View style={{flex: 2, backgroundColor: 'yellow'}} />
                <View style={{flex: 2, backgroundColor: 'skyblue'}} />
                <View style={{flex: 1, backgroundColor: 'powderblue'}} >
                    <Button
                        title="Log In"
                        color="#841584"
                        accessibilityLabel="Learn more about this purple button"
                    />

                </View>
            </View>
        );
    }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => FlexDimensionsBasics);
