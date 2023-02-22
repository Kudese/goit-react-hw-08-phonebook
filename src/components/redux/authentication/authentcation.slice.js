import { createSlice } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';

import storage from 'redux-persist/lib/storage'

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
        console.log(payload)
        state.token = payload.token;
        state.dataUser=payload.user
        //TODO
      })
      .addCase(makeAccount.rejected, (state, {payload}) => {
        console.log(payload);
        //TODO
      }).addCase(loginAccount.pending,(state, {payload})=>{
        
      }).addCase(loginAccount.fulfilled,(state,{payload})=>{
        state.isLogin=true
        state.dataUser= payload.user
        state.token = payload.token
        console.log(payload)
        
      }).addCase(loginAccount.rejected,(state,{payload})=>{
          console.log(payload)
          //TODO
      }).addCase(logoutAccount.fulfilled, (state, action)=>{
        console.log("auth clear")
        state= initialState.authentcation
      });
  },
});


const persistConfig = {
    key: 'auth',
    storage,
   
  }
 export const persistedReducer = persistReducer(persistConfig, authSlice.reducer)