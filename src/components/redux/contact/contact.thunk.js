import { createAsyncThunk } from '@reduxjs/toolkit';
import { privateApi } from '../http';

export const fetchContacts = createAsyncThunk('fetchContacts', async () => {
  
  const { data } = await privateApi.get('/contacts');
  console.log(data);
  return data;
});
export const deleteContact = createAsyncThunk('deleteContact', id => {
 privateApi.delete(`/contacts/${id}`);
});

export const addContact = createAsyncThunk('addContact', async post => {

  const { data } = await privateApi.post('/contacts', post);
  console.log(data);
  return data;
});
