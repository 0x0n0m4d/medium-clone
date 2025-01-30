import { combineReducers, configureStore } from '@reduxjs/toolkit';
import tempDataReducer from './slices/tempData.slice';
import userDataReducer from './slices/userData.slice';

const rootReducer = combineReducers({
  tempData: tempDataReducer,
  userData: userDataReducer
});

const store = configureStore({
  reducer: rootReducer
});

export type AppDispatch = typeof store.dispatch;

export default store;
