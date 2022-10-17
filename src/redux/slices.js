import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, removeContact } from './operations';

const itemsSlice = createSlice({
  name: 'items',
  initialState: {
    contacts: [],
    isLoading: false,
  },
  extraReducers: {
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.contacts = action.payload;
    },
    [fetchContacts.rejected](state) {
      state.isLoading = false;
    },
    [addContact.pending](state) {
      state.isLoading = true;
    },
    [addContact.fulfilled](state, action) {
      state.contacts.unshift(action.payload);
      state.isLoading = false;
    },
    [addContact.rejected](state) {
      state.isLoading = false;
    },
    [removeContact.pending](state) {
      state.isLoading = true;
    },
    [removeContact.fulfilled](state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload.id
      );
      state.isLoading = false;
    },
    [removeContact.rejected](state) {
      state.isLoading = false;
    },
  },
});

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter: (state, action) => action.payload,
  },
});

export const itemsReducer = itemsSlice.reducer;
export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
