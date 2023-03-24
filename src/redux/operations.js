import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const KEY = '641b7a051f5d999a44640a95';

axios.defaults.baseURL = `https://${KEY}.mockapi.io`;

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/add',
  async (contact, { thunkAPI, dispatch }) => {
    try {
      await axios.post('/contacts', { ...contact });
      dispatch(fetchContacts());
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/delete',
  async (id, { thunkAPI, dispatch }) => {
    try {
      await axios.delete(`/contacts/${id}`);
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
