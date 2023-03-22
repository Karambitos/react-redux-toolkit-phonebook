import { v4 as uuidv4 } from 'uuid';
import { createReducer } from '@reduxjs/toolkit';
import { createContact, deliteContact, filterContact } from './actions';

export const rootReducer = createReducer(
  {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filters: '',
  },
  {
    [createContact]: (state, action) => {
      state.contacts.unshift({
        id: uuidv4(),
        name: action.payload.name,
        number: action.payload.number,
      });
    },
    [deliteContact]: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
    [filterContact]: (state, action) => {
      state.filters = action.payload;
    },
  }
);
