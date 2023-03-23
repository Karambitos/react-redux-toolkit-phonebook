import { useSelector, useDispatch } from 'react-redux';
import { selectCheckbox } from 'redux/selectors';
import { setChecked } from '../../redux/slice';
import styles from './Checkbox.module.css';

export default function Checkbox() {
  const checked = useSelector(selectCheckbox);
  const dispatch = useDispatch();

  const handleCheckboxChange = event => {
    dispatch(setChecked(event.target.checked));
  };

  return (
    <label className={styles.label}>
      Theme
      <div className={styles.inputBox}>
        <div
          onClick={handleCheckboxChange}
          className={`${styles.checkbox} ${checked ? styles.active : ''}`}
        >
          <div className={styles.checkboxCircle}></div>
        </div>
        <input
          type="checkbox"
          checked={checked}
          className="visually-hidden"
          readOnly
        />
      </div>
    </label>
  );
}
