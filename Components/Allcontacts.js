import React from 'react'
import { Text, View, StyleSheet, Button, PermissionsAndroid, ScrollView, TouchableOpacity, ActivityIndicator, TouchableHighlight, FlatList } from 'react-native'
import * as Contacts from 'expo-contacts';
import { connect } from 'react-redux';
import { getcontacts } from "../actions/contactsAction"
import { addFavorite, delFavorite } from "../actions/favoriteActions"
import contactInfo from './contactInfo'
import { Icon } from 'native-base'
import DoubleClick from 'react-native-double-click';


class Allcontacts extends React.Component {
    _isMounted = false;
    constructor() {
        super()
        this.state = {
            loading: true
        }
    }

    componentDidMount() {
        this._isMounted = true;
        const getcontacts = async () => {
            const { status } = await Contacts.requestPermissionsAsync();
            if (status === 'granted') {
                const { data } = await Contacts.getContactsAsync({
                    fields: [Contacts.PHONE_NUMBERS
                    ],
                });
                if (data.length > 0) {
                    this.props.getcontacts(data)
                }
            }
        }
        getcontacts().then(() => {
            this.setState(prevState => ({
                loading: !prevState.loading
            }))
        })
    }
    addfavorite = (data) => {
        const contct = {
            "id": data.id,
            "name": data.name,
            "fav": true
        }

        this.props.addFavorite(contct)
    }
    delfavorite = (data) => {
        console.log(data.name)
        const contct = {
            "id": data.id,
            "name": data.name,
            "fav": true
        }

        this.props.delFavorite(contct)
    }



    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "black" }}>
                {this.state.loading ?
                    <View style={{ marginTop: 300 }}>
                        <ActivityIndicator size="large" color="white" />
                    </View>
                    :
                    <FlatList
                        data={this.props.contacts}
                        renderItem={({ item }) => {
                            let hasfav = this.props.favorites.some(fav => {
                                // console.log(fav.id)
                                return fav.id === item.id
                            })
                            var color = hasfav ? "green" : "white"

                            return (
                                <View >
                                    <DoubleClick style={styles.container} onClick={() => this.props.navigation.navigate('contactInfo', {
                                        name: item.name,
                                        contactNumber: item.phoneNumbers ? item.phoneNumbers[0].number : "No Number"
                                    })}>
                                        <View style={styles.contact}>

                                            <Icon name="person" style={{ fontSize: 30, paddingTop: 40, paddingBottom: 10, marginLeft: 5, color: "white" }} />
                                            <View style={{ marginLeft: 10 }}>
                                                {/* <DoubleClick   > */}
                                                <Text style={{ fontSize: 20, paddingTop: 30, paddingLeft: 5, paddingBottom: 10, color: "white" }}
                                                > {item.name} </Text>
                                                {item.phoneNumbers ?
                                                    <Text style={{ marginLeft: 10, color: "white", paddingBottom: 10 }}> {item.phoneNumbers[0].number} </Text>
                                                    :
                                                    <Text style={{ marginLeft: 10, color: "white", paddingBottom: 10 }}> No number </Text>
                                                }
                                            </View>

                                        </View>
                                        <Icon name="star" style={{ paddingTop: 30, paddingRight: 5, fontSize: 45, color: color, marginRight: 10 }}
                                            onPress={() => { hasfav ? this.delfavorite(item) : this.addfavorite(item) }}
                                        />
                                    </DoubleClick>
                                </View>
                            )
                        }} />
                }


            </View >
        );
    }

}

// Map State To Props (Redux Store Passes State To Component)
const mapStateToProps = (state) => {
    // Redux Store --> Component
    return {
        contacts: state.contactReducer.contacts,
        favorites: state.favoriteReducer.favorites,
    };
};

export default connect(mapStateToProps, { getcontacts, addFavorite, delFavorite })(Allcontacts);

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