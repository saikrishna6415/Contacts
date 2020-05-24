import React from 'react'
import { Text, View, StyleSheet, Button, PermissionsAndroid, ScrollView, ActivityIndicator } from 'react-native'
import Contact from './Contact'
import * as Contacts from 'expo-contacts';
import { connect } from 'react-redux';
import { getcontacts } from "../actions/contactsAction"

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

    componentWillUnmount() {
        this._isMounted = false;
    }


    render() {
        return (
            <View style={{ flex: 1, width: 400 }}>
                <ScrollView style={{ backgroundColor: "black", flex: 1 }}>
                    {this.state.loading ?
                        <View style={styles.container}>
                            <ActivityIndicator size="large" color="white" />
                        </View>
                        : this.props.contacts.map(contact => {
                            return (
                                <Contact key={contact.id}
                                    contact={contact}
                                    addfav={this.addfavorite}
                                />
                            )
                        })}
                </ScrollView>
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

export default connect(mapStateToProps, { getcontacts })(Allcontacts);

const styles = StyleSheet.create({
    container: {
        marginTop: 200
    }
});
