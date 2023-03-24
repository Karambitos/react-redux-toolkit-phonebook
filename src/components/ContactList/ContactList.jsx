import { useSelector, useDispatch } from 'react-redux';
import styles from '../ContactList/ContactList.module.css';
import { selectContacts } from 'redux/selectors';
import { deleteContact } from 'redux/operations';

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  console.log('list');

  return contacts.length ? (
    <ul className={styles.contactList}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li className={styles.contactItem} key={id}>
            <p>{name}</p>
            <p>{number}</p>
            <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
          </li>
        );
      })}
    </ul>
  ) : (
    <div className="container-detail">
      <h2>There are no matching contacts...</h2>
    </div>
  );
}
