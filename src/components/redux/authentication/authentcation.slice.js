import { createSlice } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';

import storage from 'redux-persist/lib/storage';

import initialState from '../initialState.json';
import { loginAccount, logoutAccount, makeAccount } from './authentication.thunk';
export const authSlice = createSlice({
  name: 'authentcation',
  initialState: initialState.authentcation,
  extraReducers: builder => {
    builder
      .addCase(makeAccount.pending, (state, { payload }) => {
        //TODO
      })
      .addCase(makeAccount.fulfilled, (state, { payload }) => {
        state.isLogin = true;

        state.token = payload.token;
        state.dataUser = payload.user;
      })
      .addCase(makeAccount.rejected, (state, { payload }) => {
        //TODO
      })
      .addCase(loginAccount.pending, (state, { payload }) => {})
      .addCase(loginAccount.fulfilled, (state, { payload }) => {
        state.isLogin = true;
        state.dataUser = payload.user;
        state.token = payload.token;
      })
      .addCase(loginAccount.rejected, (state, { payload }) => {
        //TODO
      })
      .addCase(logoutAccount.fulfilled, (state, action) => {
        return initialState.authentcation;
      });
  },
});

const persistConfig = {
  key: 'auth',
  storage,
};
export const persistedReducer = persistReducer(persistConfig, authSlice.reducer);
