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
    handleFav = () => {
        this.setState(prevState => ({
            addfav: !prevState.addfav
        }))
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
                <Text style={{ fontSize: 30, paddingTop: 40, paddingLeft: 5, paddingBottom: 10, color: "white" }}> {this.props.contact.name} </Text>
                <TouchableOpacity>
                    <Icon name="star" style={{ paddingTop: 30, paddingRight: 5, fontSize: 40, color: color, marginRight: 10 }}
                        onPress={() => { this.handleFav(), this.state.addfav ? this.props.delfav(this.props.contact) : this.props.addfav(this.props.contact) }}
                    />
                </TouchableOpacity>

            </View >
        )
    }
}

export default Contact;
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'black',
        borderBottomWidth: 1,
        borderBottomColor: '#F0FFF0'
    }
})