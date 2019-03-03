/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class SignUp extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Home We have no friends!</Text>

                <Button
                    title="SignUp Add some friends"
                    onPress={() =>
                        this.props.navigation.navigate('Friends')
                    }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
