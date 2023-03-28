import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

export const LogInForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit} autoComplete="off" className="form">
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
        <button type="submit">LogIn</button>
      </form>
    </>
  );
};
