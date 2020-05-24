import { GET_CONTACTS } from "./types"
// import * as Contacts from 'expo-contacts';



export const getcontacts = (data) => (dispatch) => {
    // console.log(data)
    if (data.length > 0) {
        dispatch({
            type: GET_CONTACTS,
            contacts: data
        })
    }
};