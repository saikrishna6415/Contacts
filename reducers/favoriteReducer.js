import { ADD_FAV, DEL_FAV, GET_FAV } from "../actions/types"
// Initial State
const initialState = {
    favorites: [],
};
// Reducers (Modifies The State And Returns A New State)
const favoriteReducer = (state = initialState, action) => {
    switch (action.type) {
        // Login
        case GET_FAV: {
            return {
                // State
                ...state,
                // Redux Store
                favorites: action.favorites,
            }
        }
        case ADD_FAV: {
            return {
                // State
                ...state,
                // Redux Store
                favorites: state.favorites.concat(action.favorite),
            }
        }
        case DEL_FAV: {
            return {
                // State
                ...state,
                // Redux Store
                favorites: state.favorites.filter(fav => {
                    return fav.id !== action.id
                }),
            }
        }
        // Default
        default: {
            return state;
        }
    }
};
// Exports
export default favoriteReducer;