import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export const contactBookSlise = createSlice({
  name: 'contact',
  initialState: {
    contacts: [],
    filters: '',
  },
  // initialState: {
  //   contacts: {
  //     items: [],
  //     isLoading: false,
  //     error: null
  //   },
  //   filter: ""
  // },
  reducers: {
    initContacts(state, action) {
      state.contacts = action.payload;
    },
    createContact(state, action) {
      state.contacts.unshift({
        id: uuidv4(),
        name: action.payload.name,
        number: action.payload.number,
      });
    },
    deliteContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
    filterContact(state, action) {
      state.filters = action.payload;
    },
  },
});

export const { createContact, deliteContact, filterContact, initContacts } =
  contactBookSlise.actions;

export const contactReducer = contactBookSlise.reducer;
