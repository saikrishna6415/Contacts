import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import Favorite from "./Favorite"
import { connect } from 'react-redux';
import { getFavorites } from '../actions/favoriteActions'

class Favorites extends Component {
    constructor() {
        super()
        this.state = {
            loading: true,
            favorites: [{ "id": 1, "name": "sai" },
            { "id": 2, "name": "krishna" }]
        }
    }
    componentDidMount() {
        // this.props.getFavorites()
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "black", }}>
                <ScrollView>

                    {this.props.favorites.map(fav => {
                        return (
                            <Favorite key={fav.id}
                                favorite={fav}
                            />
                        )
                    })}
                </ScrollView>
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
