import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, FlatList } from 'react-native'
import { connect } from 'react-redux';
import { getFavorites } from '../actions/favoriteActions'
import { Icon } from 'native-base'


class Favorites extends Component {
    constructor() {
        super()
        this.state = {
            loading: true,
        }
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "black", }}>
                {this.props.favorites.length === 0 ?
                    <Text style={{ color: "white", fontSize: 40 }}>No Favorites</Text>
                    :
                    <FlatList
                        data={this.props.favorites}
                        renderItem={({ item }) => {
                            return (
                                <View style={styles.container}>
                                    <Icon name="person" style={{ fontSize: 30, paddingTop: 40, paddingLeft: 5, paddingBottom: 10, color: "white" }} />
                                    <Text style={{ fontSize: 30, paddingTop: 35, paddingLeft: 30, paddingBottom: 10, color: "white" }}> {item.name} </Text>
                                </View >
                            )
                        }} />
                }
            </View>
        );
    }

}

const mapStateToProps = (state) => {
    // Redux Store --> Component
    return {
        favorites: state.favoriteReducer.favorites,
    };
};

export default connect(mapStateToProps, { getFavorites })(Favorites)


const styles = StyleSheet.create({
    container: {
        width: 380,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        backgroundColor: 'black',
        borderBottomWidth: 1,
        borderBottomColor: '#F0FFF0',
    }
})