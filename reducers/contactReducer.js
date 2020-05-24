import { GET_CONTACTS } from '../actions/types'
// Initial State
const initialState = {
    contacts: [],
};
// Reducers (Modifies The State And Returns A New State)
const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        // Login
        case GET_CONTACTS: {
            return {
                // State
                ...state,
                // Redux Store
                contacts: action.contacts,
            }
        }
        // Default
        default: {
            return state;
        }
    }
};
// Exports
export default contactReducer;