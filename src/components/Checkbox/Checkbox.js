import { useSelector } from 'react-redux';
import { selectCheckbox } from 'redux/selectors';
import styles from './Checkbox.module.css';

export default function Checkbox({
  handleCheckboxChange,
  className = '',
  title = '',
}) {
  const checked = useSelector(selectCheckbox);

  return (
    <label className={styles.label}>
      {title && title}
      <input
        type="checkbox"
        checked={checked}
        className="visually-hidden"
        readOnly
      />
      <div
        onClick={handleCheckboxChange}
        className={`${styles.checkbox} ${
          checked ? styles.active : ''
        } ${className}`}
      >
        <div className={styles.checkboxCircle}></div>
      </div>
    </label>
  );
}
