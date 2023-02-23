import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { contactSlice, searchSlice } from './contact/contack.slice';
import initialState from '../redux/initialState.json';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { persistedReducer } from './authentication/authentcation.slice';

const rootReduser = combineReducers({
  search: searchSlice.reducer,
  contacts: contactSlice.reducer,
  authentcation: persistedReducer,
});

export const store = configureStore({
  reducer: rootReduser,
  devTools: true,
  preloadedState: initialState,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);

