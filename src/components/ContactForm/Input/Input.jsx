import PropTypes from 'prop-types';

export default function Input({ state, handleInputChange }) {
  return (
    <div>
      <label className="label" htmlFor="name">
        Name:
      </label>
      <input
        className="input"
        type="text"
        name="name"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagna"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        required
        value={state.name}
        onChange={handleInputChange}
      />
      <label className="label" htmlFor="number">
        Number:
      </label>
      <input
        className="input"
        type="text"
        name="number"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        required
        value={state.number}
        onChange={handleInputChange}
      />
    </div>
  );
}

Input.propTypes = {
  state: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  handleInputChange: PropTypes.func.isRequired,
};
