import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { Icon } from 'native-base'


class Contact extends Component {
    constructor() {
        super()
        this.state = {
            addfav: false
        }
    }

    render() {
        let hasfav = this.props.fav.some(fav => {
            // console.log(fav.id)
            return fav.id === this.props.contact.id
        })
        if (hasfav) {
            console.log("fav", hasfav)
        }
        // console.log(this.props.addfav(this.props.contact))
        var color = hasfav ? "green" : "white"
        return (
            <View style={styles.container}>
                <View style={styles.contact}>
                    <Icon name="person" style={{ fontSize: 30, paddingTop: 40, paddingBottom: 10, marginLeft: 5, color: "white" }} />
                    <View style={{ marginLeft: 10 }}>
                        <Text style={{ fontSize: 20, paddingTop: 30, paddingLeft: 5, paddingBottom: 10, color: "white" }}> {this.props.contact.name} </Text>
                        {this.props.contact.phoneNumbers ?
                            <Text style={{ marginLeft: 10, color: "white", paddingBottom: 10 }}> {this.props.contact.phoneNumbers[0].number} </Text>
                            :
                            <Text style={{ marginLeft: 10, color: "white", paddingBottom: 10 }}> No number </Text>

                        }
                    </View>
                </View>
                <TouchableOpacity>
                    <Icon name="star" style={{ paddingTop: 30, paddingRight: 5, fontSize: 45, color: color, marginRight: 10 }}
                        onPress={() => { hasfav ? this.props.delfav(this.props.contact) : this.props.addfav(this.props.contact) }}
                    />
                </TouchableOpacity>
            </View >
        )
    }
}

export default Contact;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'black',
        borderBottomWidth: 1,
        borderBottomColor: '#F0FFF0',
        marginLeft: 10
    },
    contact: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        backgroundColor: 'black',
        // borderBottomWidth: 1,
        // borderBottomColor: '#F0FFF0'
    }
})