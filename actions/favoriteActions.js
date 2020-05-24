import { ADD_FAV, DEL_FAV, GET_FAV } from "./types"
// get fav
export const getFavorites = (data) => dispatch => {
    if (data) {
        dispatch({
            type: GET_FAV,
            favorites: data
        })
    }
};

// add fav
export const addFavorite = (fav) => dispatch => {
    console.log("adding fav", fav)
    if (fav) {
        dispatch({
            type: ADD_FAV,
            favorite: fav
        })
    }
};
// del fav
export const delFavorite = (fav) => dispatch => {
    console.log("deleting fav", fav)
    if (fav) {
        dispatch({
            type: DEL_FAV,
            favorite: fav,
            id: fav.id
        })
    }
};
