import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Store } from 'react-notifications-component';
import Input from '../Input/Input';
import styles from '../ContactForm/ContactForm.module.css';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';

export default function ContactForm() {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const [newContact, setnewContact] = useState({
    name: '',
    number: '',
  });

  const addNotification = () => {
    Store.addNotification({
      title: 'Warning',
      message: 'This name or number already exists.',
      type: 'danger',
      insert: 'top',
      container: 'top-right',
      animationIn: ['animate__animated', 'animate__fadeIn'],
      animationOut: ['animate__animated', 'animate__fadeOut'],
      dismiss: {
        duration: 3000,
        onScreen: true,
      },
    });
  };

  const contactExists = (fieldName, fieldValue) => {
    return contacts.some(contact => contact[fieldName] === fieldValue);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (
      contactExists('name', newContact.name) ||
      contactExists('number', newContact.number)
    ) {
      addNotification();
      return;
    }
    dispatch(addContact(newContact));
    reset();
  };

  const handleInputChange = event => {
    const { name, value } = event.currentTarget;
    setnewContact(prevState => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const reset = () => {
    setnewContact({ name: '', number: '' });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <Input state={newContact} handleInputChange={handleInputChange} />
      <button className={styles.button} type="submit">
        Add Contact
      </button>
    </form>
  );
}
