/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React from 'react';
import { StyleSheet, Text, View, Button, Image, TextInput } from 'react-native';

export default class SignUp extends React.Component {
    render() {
        return (
            <View style={styles.container}>


                <View >
                        <TextInput
                            placeholder="User Name"
                            returnKeyLabel = {"uname"}
                            onChangeText={(text) => this.setState({text})}
                        />
                    </View>

                    <View >
                        <TextInput
                            placeholder="Password"
                            returnKeyLabel = {"pword"}
                            onChangeText={(text) => this.setState({text})}
                        />
                    </View>

                    <View style={stylesButtons.container}>
                        <Button
                            title="Sign In"
                            onPress={() =>
                                this.props.navigation.navigate('Home')
                            }
                        />
                    </View>

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

const stylesButtons = StyleSheet.create({
  container: {
     width: "40%",
     margin: 2,
     backgroundColor: "red" ,
     flexDirection: 'column',
    },
});
