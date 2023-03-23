import axios from 'axios';

const KEY = '641b7a051f5d999a44640a95';

export const getContact = endpoint => {
  return axios.get(`https://${KEY}.mockapi.io/contacts${endpoint}`);
};
