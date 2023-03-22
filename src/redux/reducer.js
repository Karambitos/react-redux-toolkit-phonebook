import { initialState } from './store';
import { v4 as uuidv4 } from 'uuid';
import { CREATE_CONTACT, DELITE_CONTACT, FILTER_CONTACTS } from './actions';

export const phoneReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_CONTACT:
      return {
        ...state,
        contacts: [
          ...state.contacts,
          {
            id: uuidv4(),
            name: action.payload.name,
            number: action.payload.number,
          },
        ],
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
