import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import { getContact } from './api/contactAPI';
import { useEffect } from 'react';
import { initContacts } from '../redux/slice';
import { useDispatch } from 'react-redux';
import axios from 'axios';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const endpoint = '';
    getContact(endpoint)
      .then(res => {
        dispatch(initContacts(res.data));
      })
      .catch(error => console.log(error))
      .finally(() => {});
  }, []);

  return (
    <div className="main">
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
