// Imports: Dependencies
import { combineReducers } from 'redux';
// Imports: Reducers
import contactReducer from './contactReducer';
import favoriteReducer from './favoriteReducer';

// Redux: Root Reducer
const rootReducer = combineReducers({
    contactReducer: contactReducer,
    favoriteReducer: favoriteReducer,
});
// Exports
export default rootReducer;