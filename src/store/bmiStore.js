import { createStore, combineReducers } from 'redux';
import bmiReducer from '../reducers/bmiReducer';

export default () => {
    // Create global store
    const bmiStore = createStore(
        combineReducers({
            bmiReducer
        }),
    );
    return bmiStore;
};