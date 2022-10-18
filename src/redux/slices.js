import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  removeContact,
  getUser,
  register,
  login,
  logout,
} from './operations';

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
    [logout.pending](state) {
      state.isLoading = true;
    },
    [logout.fulfilled](state) {
      state.contacts = [];
      state.isLoading = false;
    },
    [logout.rejected](state) {
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

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    name: '',
    email: '',
    token: null,
    isAuth: false,
    isLoading: false,
  },
  extraReducers: {
    [getUser.pending](state) {
      state.isLoading = true;
    },
    [getUser.fulfilled](state, action) {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.isAuth = true;
      state.isLoading = false;
    },
    [getUser.rejected](state) {
      state.token = null;
      state.name = '';
      state.email = '';
      state.isLoading = false;
    },
    [register.pending](state) {
      state.isLoading = true;
    },
    [register.fulfilled](state, action) {
      state.name = action.payload.user.name;
      state.email = action.payload.user.email;
      state.token = action.payload.token;
      state.isAuth = true;
      state.isLoading = false;
    },
    [register.rejected](state) {
      state.isLoading = false;
    },
    [login.pending](state) {
      state.isLoading = true;
    },
    [login.fulfilled](state, action) {
      state.name = action.payload.user.name;
      state.email = action.payload.user.email;
      state.token = action.payload.token;
      state.isAuth = true;
      state.isLoading = false;
    },
    [login.rejected](state) {
      state.isLoading = false;
    },
    [logout.pending](state) {
      state.isLoading = true;
    },
    [logout.fulfilled](state, action) {
      state.name = '';
      state.email = '';
      state.token = '';
      state.isAuth = false;
      state.isLoading = false;
    },
    [logout.rejected](state) {
      state.isLoading = false;
    },
  },
});

export const itemsReducer = itemsSlice.reducer;
export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
export const authReducer = authSlice.reducer;
