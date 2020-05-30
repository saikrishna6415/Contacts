import { GET_USER } from '../actions/types'
// Initial State
const initialState = {
    userInfo: null,
};
// Reducers (Modifies The State And Returns A New State)
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        // Login
        case GET_USER: {
            return {
                // State
                ...state,
                // Redux Store
                userInfo: action.userInfo,
            }
        }
        // Default
        default: {
            return state;
        }
    }
};
// Exports
export default userReducer;