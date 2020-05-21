import { createStore, combineReducers } from 'redux';
import bmiReducer from '../reducers/bmiReducer';

export default ()=>{

    const rootReducer = combineReducers({
        bmiReducer
      });

      //global store
      const globalStore = createStore(rootReducer);

      return globalStore;
  }
