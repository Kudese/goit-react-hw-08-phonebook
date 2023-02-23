import initialState from '../initialState.json';
import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './contact.thunk';
import { logoutAccount } from '../authentication/authentication.thunk';

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: initialState.contacts,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.items = payload;
        state.isLoading = false;
      })
      .addCase(fetchContacts.rejected, (state, { payload }) => {
        state.error = 'error';
        state.isLoading = false;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(el => {
          return el.id !== action.meta.arg;
        });
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.items = [...state.items, payload];
      })
      .addCase(addContact.rejected, (state, action) => {
      //TODO
      })
      .addCase(logoutAccount.fulfilled, (state, action) => {
        return initialState.contacts;
      });
  },
});

export const searchSlice = createSlice({
  name: 'search',
  initialState: initialState.search,
  reducers: {
    searchAction: (state, { payload }) => {
      return (state = payload);
    },
  },
});

export const { searchAction } = searchSlice.actions;
