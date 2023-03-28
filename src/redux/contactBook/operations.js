import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// Old api
// const KEY = '641b7a051f5d999a44640a95';
// axios.defaults.baseURL = `https://${KEY}.mockapi.io`;

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { thunkAPI, getState }) => {
    const persistedToken = getState().auth.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    try {
      const response = await axios.get('/contacts', persistedToken);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/add',
  async (contact, { thunkAPI, dispatch, getState }) => {
    const persistedToken = getState().auth.token;
    if (persistedToken === null) {
      dispatch(fetchContacts());
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    try {
      const response = await axios.post(
        '/contacts',
        { ...contact },
        persistedToken
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/delete',
  async (id, { thunkAPI, dispatch, getState }) => {
    const persistedToken = getState().auth.token;
    if (id === '4915118515681') {
      return id;
    }
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    try {
      await axios.delete(`/contacts/${id}`, persistedToken);
      dispatch(fetchContacts());
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
  {
    condition: (_, { getState }) => {
      const loading = getState().contacts.isLoading;
      if (loading) {
        return false;
      }
    },
  }
);
