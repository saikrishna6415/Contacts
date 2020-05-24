import React from 'react'
import { Text, View, StyleSheet, Button, PermissionsAndroid, ScrollView, ActivityIndicator } from 'react-native'
import Contact from './Contact'
import * as Contacts from 'expo-contacts';

class Allcontacts extends React.Component {
    _isMounted = false;
    constructor() {
        super()
        this.state = {
            contacts: [],
            Favorites: [],
            loading: true
        }
    }

    addfavorite = (contact) => {
        console.log(contact)
        // this.setState({
        //     Favorites: this.state.Favorites.contact([contact])
        // })
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

                    this.setState({
                        contacts: data
                    })
                    // const contact = data[0];
                    // console.log(contact);
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
                        : this.state.contacts.map(contact => {
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
export default Allcontacts;
const styles = StyleSheet.create({
    container: {
        marginTop: 200
    }
});
