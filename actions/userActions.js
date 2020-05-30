import { GET_USER } from "./types"
// import * as Contacts from 'expo-contacts';



export const getUser = (data) => (dispatch) => {
    // console.log(data)
    // if (data.length > 0) {
    dispatch({
        type: GET_USER,
        userInfo: data
    })
    // }
};