import { createAsyncThunk } from '@reduxjs/toolkit';
import { privateApi, publicApi, token } from '../http';

export const makeAccount = createAsyncThunk('makeAccount', async account => {
  const { data } = await publicApi.post('/users/signup', account);
  return data;
});
export const loginAccount = createAsyncThunk('loginAccount', async login => {
  const { data } = await publicApi.post('/users/login', login);
  token.set(data.token);
  return data;
});
export const logoutAccount = createAsyncThunk('logoutAccount', () => {
  console.log('logout');
  privateApi.post('/users/logout');
});
