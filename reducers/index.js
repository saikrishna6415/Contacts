// Imports: Dependencies
import { combineReducers } from 'redux';
// Imports: Reducers
import contactReducer from './contactReducer';
import favoriteReducer from './favoriteReducer';
import userReducer from './userReducer'

// Redux: Root Reducer
const rootReducer = combineReducers({
    contactReducer: contactReducer,
    favoriteReducer: favoriteReducer,
    userInfo: userReducer,
});
// Exports
export default rootReducer;