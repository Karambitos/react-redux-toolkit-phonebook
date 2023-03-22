import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';

export default function App() {
  // const isFirstRender = useRef(true);

  // useEffect(() => {
  //   if (isFirstRender.current) {
  //     const contactsLocal = localStorage.getItem('contacts');
  //     if (contactsLocal && JSON.parse(contactsLocal).length) {
  //       setContacts(JSON.parse(contactsLocal));
  //     }
  //     isFirstRender.current = false;
  //     return;
  //   } else {
  //     localStorage.setItem('contacts', JSON.stringify(contacts));
  //   }
  // }, [contacts.length]);

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
