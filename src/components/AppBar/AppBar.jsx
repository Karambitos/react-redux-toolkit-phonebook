import Checkbox from '../Checkbox/Checkbox';
import { setChecked } from 'redux/contactBook/slice';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { logOut } from 'redux/auth/operations';

export default function Header() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <header className="header">
      <div className="contentMaxWidth headerInner">
        <a
          className="logoLink"
          href="https://github.com/Karambitos/react-redux-toolkit-phonebook"
        >
          Phonebook GIT
        </a>
        <div className="navGrupe">
          <Checkbox
            className="theme"
            handleCheckboxChange={event =>
              dispatch(setChecked(event.target.checked))
            }
          />
          <nav>
            {isLoggedIn ? (
              <>
                <NavLink className="nav-link" to="/" end>
                  Home
                </NavLink>
                <button className="nav-button" onClick={handleLogOut}>
                  SignOut
                </button>
              </>
            ) : (
              <>
                <NavLink className="nav-link" to="/login" end>
                  Login
                </NavLink>
                <NavLink className="nav-link" to="/register">
                  Register
                </NavLink>
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
