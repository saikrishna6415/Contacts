import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import Allcontacts from './Allcontacts'
import contactInfo from './contactInfo'

const contactStack = createStackNavigator()

export default class stackScreen extends Component {
    render() {
        return (
            <contactStack.Navigator>
                <contactStack.Screen name="AllContacts" component={Allcontacts} />
                <contactStack.Screen name="contactInfo" component={contactInfo} />
            </contactStack.Navigator>

        )
    }
}
