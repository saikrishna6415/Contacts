import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Allcontacts from './Allcontacts'
import contactInfo from './contactInfo'
import Favorites from './Favorites';

const Tab = createMaterialTopTabNavigator()

export default class tabScreen extends Component {
    constructor() {
        super()
        this.state = {
            loading: false
        }
    }
    componentDidMount() {
        this.setState({
            loading: true
        })
    }
    render() {
        return (
            <Tab.Navigator
                tabBarOptions={{
                    labelStyle: { fontSize: 20, color: "white" },
                    style: { backgroundColor: 'black' },
                }}
            >
                <Tab.Screen
                    name="AllContacts" component={Allcontacts} />
                <Tab.Screen name="favortes"
                    component={Favorites} />
            </Tab.Navigator>

        )
    }
}

