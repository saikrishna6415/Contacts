import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class contactInfo extends Component {
    static navigationOptions =
        {
            title: 'contactInfo',
        };

    render() {
        return (
            <View>
                <Text> textInComponent </Text>
            </View>
        )
    }
}
