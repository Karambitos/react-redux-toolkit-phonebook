import { initialState } from './store';
import { CREATE_CONTACT, DELITE_CONTACT, FILTER_CONTACTS } from './actions';

export const phoneReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, { ...action.payload }],
      };
    case DELITE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
      };
    case FILTER_CONTACTS:
      return {
        ...state,
        filters: action.payload,
      };
    default:
      return state;
  }
};
