import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { contactSlice, searchSlice } from "./contact/contack.slice";
import initialState from '../redux/initialState.json';
import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import { persistedReducer } from "./authentication/authentcation.slice";


const rootReduser = combineReducers({
  search: searchSlice.reducer,
  contacts: contactSlice.reducer,
  authentcation: persistedReducer,
});

export const store = configureStore({
  reducer: rootReduser,
  devTools: true,
  preloadedState: initialState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store)

// const persistConfig = {
//     key: 'root',
//     storage,
//     whitelist:["contact"]
//   }
//
//

// const rootReduser = combineReducers({
//     search:searchSlice.reducer,
//     contact: contactSlice.reducer,
// })
// const persistedReducer = persistReducer(persistConfig, rootReduser)



// import { addContactAction, deleteContactAction, searchAction } from './contact.action';

// const searchReduser = createReducer(BaseContact.search, builder => {
//   builder.addCase(searchAction, (state, { payload }) => {
//     return payload;
//   });
// });
// const contactReduser = createReducer(BaseContact.contact, builder => {
//   builder
//     .addCase(addContactAction, (state, { payload }) => {
//       return [
//         ...state,
//         {
//           id: `${nanoid()}`,
//           name: `${payload.name}`,
//           number: `${payload.number}`,
//         },
//       ];
//     })
//     .addCase(deleteContactAction, (state, { payload }) => {
//       return state.filter(el => {
//         return el.id !== payload;
//       });
//     });
// });
