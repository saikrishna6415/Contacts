import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class contactInfo extends Component {
    static navigationOptions =
        {
            title: 'contactInfo',
        };

    render() {
        return (
            <View style={styles.container}>
                <Text style={{ fontSize: 20, paddingTop: 30, paddingLeft: 5, paddingBottom: 10, color: "white" }}> Name :
                {this.props.route.params.name}
                </Text>
                <Text style={{ fontSize: 20, paddingTop: 30, paddingLeft: 5, paddingBottom: 10, color: "white" }}> Number :
                 {this.props.route.params.contactNumber}
                </Text>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: 'black',
        borderBottomWidth: 1,
        borderBottomColor: '#F0FFF0',
    }
})
