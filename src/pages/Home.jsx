import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import ContactForm from 'components/ContactForm/ContactForm';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contactBook/operations';
import { selectContactsIsLoading } from 'redux/contactBook/selectors';
import { selectIsLoggedIn } from 'redux/auth/selectors';

const Home = () => {
  const isLoading = useSelector(selectContactsIsLoading);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="innerWrapper">
      <h1>Phonebook</h1>
      <ContactForm />
      <>
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </>
    </div>
  );
};

export default Home;
