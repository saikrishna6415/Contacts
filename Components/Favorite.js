import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { Icon } from 'native-base'


export default class Favorite extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Icon name="person" style={{ fontSize: 30, paddingTop: 40, paddingLeft: 5, paddingBottom: 10, color: "white" }} />
                <Text style={{ fontSize: 30, paddingTop: 35, paddingLeft: 30, paddingBottom: 10, color: "white" }}> {this.props.favorite.name} </Text>
            </View >
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: 380,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        backgroundColor: 'black',
        borderBottomWidth: 1,
        borderBottomColor: '#F0FFF0',
    },
    // contact: {
    //     flex: 1,
    //     flexDirection: 'row',
    //     justifyContent: 'flex-start',
    //     backgroundColor: 'black',
    //     borderBottomWidth: 1,
    //     borderBottomColor: '#F0FFF0'
    // }
})