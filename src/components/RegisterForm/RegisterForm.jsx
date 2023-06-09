import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit} autoComplete="off" className="form">
        <label className="label" htmlFor="name">
          Username
        </label>
        <input
          className="input"
          type="text"
          name="name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagna"
          required
        />
        <label className="label" htmlFor="email">
          Email
        </label>
        <input className="input" type="email" name="email" required />
        <label className="label" htmlFor="password">
          Password
        </label>
        <input
          className="input"
          type="password"
          name="password"
          autoComplete="false"
          required
        />
        <button type="submit">Register</button>
      </form>
    </>
  );
};
