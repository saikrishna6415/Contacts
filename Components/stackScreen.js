import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import Allcontacts from './Allcontacts'
import contactInfo from './contactInfo'

const contactStack = createStackNavigator()

export default class stackScreen extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <contactStack.Navigator >
                <contactStack.Screen
                    options={{ headerShown: false }} name="AllContacts" component={Allcontacts} />
                <contactStack.Screen name="contactInfo" options={{

                    headerStyle: {
                        backgroundColor: "white"
                    },
                    headerTitleStyle: {
                        color: "black"
                    }
                }}
                    component={contactInfo} />
            </contactStack.Navigator>

        )
    }
}

