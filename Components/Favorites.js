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
        }
    }
    componentDidMount() {
        // this.props.getFavorites()
    }
    render() {
        return (

            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "black", }}>
                {this.props.favorites.length === 0 ?
                    <Text style={{ color: "white", fontSize: 40 }}>No Favorites</Text>
                    :
                    <ScrollView>
                        {this.props.favorites.map((fav, index) => {
                            console.log('fav: ', fav)
                            return (
                                <Favorite key={index}
                                    favorite={fav}
                                />
                            )
                        })}
                    </ScrollView>
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
