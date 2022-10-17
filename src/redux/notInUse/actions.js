import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('phoneBookReducer/addContact');
export const removeContact = createAction('phoneBookReducer/removeContact');
export const filter = createAction('phoneBookReducer/filter');
