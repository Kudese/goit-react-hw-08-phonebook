import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { privateApi, token } from '../http';

export const makeAccount = createAsyncThunk('makeAccount', async account => {
  console.log(account)
  const {data }= await axios.post('https://connections-api.herokuapp.com/users/signup', account
  );
  console.log(data)
  return data;
});
export const loginAccount = createAsyncThunk('loginAccount', async (login)=>{
    
    const {data}= await axios.post('https://connections-api.herokuapp.com/users/login',login)
    
    
    token.set(data.token)
    return data
})
export const logoutAccount = createAsyncThunk("logoutAccount", ()=>{
    console.log('logout')
    privateApi.post('/users/logout')
})