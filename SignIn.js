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

var FBLoginButton = require('./FBLoginButton');

export default class SignIn extends React.Component {
    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
        return (
            <View style={styles.container}>

                <View style={{flex: 2, justifyContent: 'center' , alignItems: 'center' }} >
                    <Image source={pic} style={{width: 193, height: 110}}/>
                </View>


                <View style={{flex: 4, justifyContent: 'center' , alignItems: 'center', width: 193 }} >

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

                    <View style={[{ width: "90%", margin: 2, backgroundColor: "red" }]}>
                        <Button
                            title="Sign In"
                            onPress={() =>
                                this.props.navigation.navigate('Home')
                            }
                        />
                    </View>

                    <View style={[{ width: "90%", margin: 2, backgroundColor: "red" }]}>
                        <Button
                            title="Sign Up"
                            onPress={() =>
                                this.props.navigation.navigate('SignUp')
                            }
                        />
                    </View>

                    <Text>---------- OR ----------</Text>


                    <View style={stylesFB.container}>
                        <FBLoginButton />
                    </View>

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

const stylesFB = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  label: {
    fontSize: 16,
    fontWeight: 'normal',
    marginBottom: 48,
  },
});
