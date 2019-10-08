import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import auth from './authRedux/authReducer'; // the value from combineReducers


// Combine reducers
export const Reducers = combineReducers({
  auth,
});


const persistConfig = {
  key: 'root',
  storage,
  blacklist: [],
  stateReconciler: autoMergeLevel2, // see "Merge Process" section for details.
};

const pReducer = persistReducer(persistConfig, Reducers);

export const store = createStore(pReducer);
export const persistor = persistStore(store);
