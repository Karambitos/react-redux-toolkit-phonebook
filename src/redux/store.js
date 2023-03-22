import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { phoneReducer } from './reducer';

export const initialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filters: '',
};

const enhancer = devToolsEnhancer();
// export const store = createStore(rootReducer, initialState, enhancer);
export const store = createStore(phoneReducer, initialState, enhancer);
