import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
// axios.defaults.baseURL = 'https://634d50a5acb391d34a99eb98.mockapi.io/contacts';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      console.log('response: ', response.data);

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/add',
  async ({ name, number }, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', { name, number });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const removeContact = createAsyncThunk(
  'contacts/delete',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getUser = createAsyncThunk('auth/getUser', async (_, thunkAPI) => {
  const token = thunkAPI.getState().auth.token;
  if (token) {
    axios.defaults.headers.common.Authorization = token;
    try {
      const response = await axios.get('/users/current');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
  return thunkAPI.rejectWithValue();
});

export const register = createAsyncThunk(
  'auth/register',
  async ({ name, email, password }, thunkAPI) => {
    try {
      const response = await axios.post('/users/signup', {
        name,
        email,
        password,
      });
      axios.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
      toast.success('Welcome new user!');
      return response.data;
    } catch (e) {
      toast.error('Invalid input, try to enter another data.');
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await axios.post('/users/login', { email, password });
      axios.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
      toast.success('Welcome!');
      return response.data;
    } catch (e) {
      toast.error('Invalid input, try to enter another data.');
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    const response = await axios.post('/users/logout');
    axios.defaults.headers.common.Authorization = null;
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});
