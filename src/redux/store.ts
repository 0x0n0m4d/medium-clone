import { combineReducers, configureStore } from '@reduxjs/toolkit';
import tempDataReducer from './slices/tempData.slice';

const rootReducer = combineReducers({
  tempData: tempDataReducer
});

const store = configureStore({
  reducer: rootReducer
});

export type AppDispatch = typeof store.dispatch;

export default store;
