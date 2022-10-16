import { createReducer } from '@reduxjs/toolkit';
import { addContact, removeContact, filter } from './actions';

const initialState = {
  contacts: [],
  filter: '',
};

const phoneBookReducer = createReducer(initialState, {
  [addContact]: (state, action) => {
    state.contacts.push(action.payload);
  },

  [removeContact]: (state, action) => {
    const newContacts = state.contacts.filter(
      item => item.id !== action.payload
    );
    return { ...state, contacts: newContacts };
  },

  [filter]: (state, action) => {
    state.filter = action.payload;
  },
});

export default phoneBookReducer;
