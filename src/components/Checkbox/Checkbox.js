import { useSelector } from 'react-redux';
import { selectContactsCheckbox } from 'redux/contactBook/selectors';
import styles from './Checkbox.module.css';

export default function Checkbox({
  handleCheckboxChange,
  className = '',
  title = '',
}) {
  const checked = useSelector(selectContactsCheckbox);

  return (
    <label className={styles.label}>
      {title && title}
      <input
        type="checkbox"
        checked={checked}
        onClick={handleCheckboxChange}
        className="visually-hidden"
        readOnly
      />
      <div
        className={`${styles.checkbox} ${
          checked ? styles.active : ''
        } ${className}`}
      >
        <div className={styles.checkboxCircle}></div>
      </div>
    </label>
  );
}
