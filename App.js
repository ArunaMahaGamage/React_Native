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
import { TextInput } from 'react-native';
import {StyleSheet} from 'react-native';


export default class FlexDimensionsBasics extends Component {
    render() {
        return (
            // Try removing the `flex: 1` on the parent View.
            // The parent will not have dimensions, so the children can't expand.
            // What if you add `height: 300` instead of `flex: 1`?
            <View style={{flex: 1}}>
                <View style={{flex: 2, backgroundColor: 'powderblue'}} />
                <View style={{flex: 2, backgroundColor: 'skyblue'}} />
                <View style={{flex: 1, backgroundColor: 'yellow'}} />

                <View style={{flex: 2, backgroundColor: 'skyblue'}} >

                    <View style={styles.textContainer}>
                        <TextInput
                            placeholder="User Name"
                            returnKeyLabel = {"uname"}
                            onChangeText={(text) => this.setState({text})}
                        />
                    </View>

                    <View style={styles.textContainer}>
                        <TextInput
                            placeholder="User Name"
                            returnKeyLabel = {"uname"}
                            onChangeText={(text) => this.setState({text})}
                        />
                    </View>

                    <TextInput
                        placeholder="Password"
                        returnKeyLabel = {"pword"}
                        onChangeText={(text) => this.setState({text})}
                    />
                </View>
                <View style={{flex: 1, backgroundColor: 'powderblue'}} >
                    <View style={styles.buttonContainer}>
                        <Button
                            title="Log In"
                            color="#841584"
                        />
                    </View>

                </View>

                <View style={{flex: 1, backgroundColor: 'powderblue'}} >
                    <View style={styles.buttonContainer}>
                        <Button
                            title="Sigin In"
                            color="#841584"
                        />
                    </View>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    buttonContainer: {
        margin: 20
    },
    textContainer: {
        marginLeft: 30,
        marginRight: 30
    },
    alternativeLayoutButtonContainer: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => FlexDimensionsBasics);
