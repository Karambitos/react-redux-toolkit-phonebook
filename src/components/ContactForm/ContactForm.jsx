import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createContact } from '../../redux/actions';
import { Store } from 'react-notifications-component';
import Input from '../Input/Input';
import styles from '../ContactForm/ContactForm.module.css';

export default function ContactForm() {
  const { contacts } = useSelector(state => state);
  const dispatch = useDispatch();

  const [formState, setFormState] = useState({
    name: '',
    number: '',
  });

  const addNotification = () => {
    Store.addNotification({
      title: 'Warning',
      message: 'This name or number already exists.',
      type: 'warning',
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
      contactExists('name', formState.name) ||
      contactExists('number', formState.number)
    ) {
      addNotification();
      return;
    }
    dispatch(createContact(formState));
    reset();
  };

  const handleInputChange = event => {
    const { name, value } = event.currentTarget;
    setFormState(prevState => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const reset = () => {
    setFormState({ name: '', number: '' });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <Input state={formState} handleInputChange={handleInputChange} />
      <button className={styles.button} type="submit">
        Add Contact
      </button>
    </form>
  );
}
