export const CREATE_CONTACT = 'CREATE_CONTACT';
export const DELITE_CONTACT = 'DELITE_CONTACT';
export const FILTER_CONTACTS = 'FILTER_CONTACTS';

export const createContact = contact => {
  return { type: CREATE_CONTACT, payload: contact };
};

export const deliteContact = id => {
  return { type: DELITE_CONTACT, payload: id };
};

export const filterContact = value => {
  return { type: FILTER_CONTACTS, payload: value };
};
