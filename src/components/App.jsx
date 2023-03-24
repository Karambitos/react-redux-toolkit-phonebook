import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import Header from './Header/Header';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectCheckbox, selectIsLoading } from 'redux/selectors';
import { FallingLines } from 'react-loader-spinner';

export default function App() {
  const checked = useSelector(selectCheckbox);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="mainWrapper" data-theme={`${!checked ? 'dark' : 'light'}`}>
      <Header />
      <div className="contentMaxWidth">
        <div className="row">
          <h1>Phonebook</h1>
          <ContactForm />
          {isLoading ? (
            <FallingLines
              wrapperClass="spiner"
              wrapperStyle={{ width: '20px' }}
              color="#e50914"
              width="100"
              visible={true}
              ariaLabel="falling-lines-loading"
            />
          ) : (
            <>
              <h2>Contacts</h2>
              <Filter />
              <ContactList />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
