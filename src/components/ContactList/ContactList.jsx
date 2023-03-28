import { useSelector, useDispatch } from 'react-redux';
import styles from '../ContactList/ContactList.module.css';
import {
  selectContacts,
  selectContactsIsLoading,
} from 'redux/contactBook/selectors';
import { deleteContact } from 'redux/contactBook/operations';
import SVGComponent from '../../assets/DeleteIcon';
import { selectIsLoggedIn } from 'redux/auth/selectors';

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectContactsIsLoading);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  return contacts.length ? (
    <ul className={styles.contactList}>
      {!isLoading &&
        contacts.map(({ id, name, number }) => {
          return (
            <li className={styles.contactItem} key={id}>
              <p>{name}</p>
              <p>{number}</p>
              <button
                onClick={() => dispatch(deleteContact(id))}
                disabled={!isLoggedIn}
              >
                <SVGComponent />
              </button>
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
