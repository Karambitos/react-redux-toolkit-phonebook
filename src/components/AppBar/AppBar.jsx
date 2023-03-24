import Checkbox from '../Checkbox/Checkbox';
import { setChecked } from '../../redux/slice';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

export default function Header() {
  const dispatch = useDispatch();

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
            <NavLink className="nav-link" to="/" end>
              Login
            </NavLink>
            <NavLink className="nav-link" to="/login">
              Logout
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}
