import { deliteContact } from '../../redux/slice';
import { useSelector, useDispatch } from 'react-redux';
import styles from '../ContactList/ContactList.module.css';

export default function ContactList() {
  const { contacts, filters } = useSelector(state => state);
  const dispatch = useDispatch();

  const getFilterContacts = () => {
    const normalizedFilter = filters.toLowerCase();
    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(normalizedFilter) ||
        contact.number.toLowerCase().includes(normalizedFilter)
    );
  };

  const filterContacts = getFilterContacts();

  return (
    <ul className={styles.contactList}>
      {filterContacts.map(({ id, name, number }) => {
        return (
          <li className={styles.contactItem} key={id}>
            <p>{name}</p>
            <p>{number}</p>
            <button onClick={() => dispatch(deliteContact(id))}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
}
