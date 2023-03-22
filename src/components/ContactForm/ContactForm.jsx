import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import { createContact } from '../../redux/actions';
import Input from '../Input/Input';
import styles from '../ContactForm/ContactForm.module.css';

export default function ContactForm() {
  const { contacts } = useSelector(state => state);
  const dispatch = useDispatch();

  const [formState, setFormState] = useState({
    name: '',
    number: '',
  });

  const contactExists = (fieldName, fieldValue) => {
    return contacts.some(contact => contact[fieldName] === fieldValue);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (
      contactExists('name', formState.name) ||
      contactExists('number', formState.number)
    ) {
      alert('This name or number already exists.');
      return;
    }

    const newContact = { id: uuidv4(), ...formState };
    dispatch(createContact(newContact));
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
