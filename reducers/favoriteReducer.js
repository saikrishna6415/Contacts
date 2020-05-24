// Initial State
const initialState = {
    favorites: [],
};
// Reducers (Modifies The State And Returns A New State)
const favoriteReducer = (state = initialState, action) => {
    switch (action.type) {
        // Login
        case 'LOGIN': {
            return {
                // State
                ...state,
                // Redux Store
                loggedIn: action.trueFalse,
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