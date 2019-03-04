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
import MapView from 'react-native-maps';


export default class Home extends React.Component {
    render() {
        return (
            <View style={styles.container}>

                <View style={[{ width: "90%", height: "90%", margin: 2, backgroundColor: "red" }]}>
                    <MapView
                        style={{flex : 1}}
                        initialRegion={{
                            latitude: 37.78825,
                            longitude: -122.4324,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                    />
                </View>

                <Text>Home !</Text>

                <Button
                    title="Home Add some friends"
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
