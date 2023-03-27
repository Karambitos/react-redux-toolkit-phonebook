import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, deleteContact, addContact } from './operations';

export const contactBookSlise = createSlice({
  name: 'contact',
  initialState: {
    user: {
      name: null,
      email: null,
      token: null,
    },
    contacts: {
      items: [],
      isLoading: false,
      error: null,
    },
    filters: '',
    checked: false,
  },
  reducers: {
    filterContact(state, action) {
      state.filters = action.payload;
    },
    setChecked: (state, action) => {
      state.checked = !state.checked;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts.items = action.payload;
        state.contacts.items.reverse();
      })
      .addCase(addContact.fulfilled, (state, action) => {})
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.contacts.items = state.contacts.items.filter(
          contact => contact.id !== action.payload
        );
      })

      .addMatcher(
        action => action.type.endsWith('/pending'),
        (state, action) => {
          state.contacts.isLoading = true;
          state.contacts.error = null;
        }
      )
      .addMatcher(
        action => action.type.endsWith('/rejected'),
        (state, action) => {
          state.contacts.isLoading = false;
          state.contacts.error = action.payload;
        }
      )
      .addMatcher(
        action => action.type.endsWith('/fulfilled'),
        (state, action) => {
          state.contacts.isLoading = false;
          state.contacts.error = null;
        }
      );
  },
});

export const { filterContact, setChecked } = contactBookSlise.actions;

export const contactReducer = contactBookSlise.reducer;
