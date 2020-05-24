import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

export default class Favorite extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={{ fontSize: 30, paddingTop: 40, paddingLeft: 5, paddingBottom: 10, color: "white" }}> {this.props.favorite.name} </Text>
            </View >
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        backgroundColor: 'black',
        borderBottomWidth: 1,
        borderBottomColor: '#F0FFF0',
    }
})