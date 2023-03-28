import { filterContact } from 'redux/contactBook/slice';
import { useSelector, useDispatch } from 'react-redux';
import styles from '../Filter/Filter.module.css';
import { selectContactsFilter } from 'redux/contactBook/selectors';

export default function Filter() {
  const filters = useSelector(selectContactsFilter);
  const dispatch = useDispatch();

  return (
    <div className={styles.filterWrapper}>
      <label className={styles.label}>
        Find contacts:
        <input
          className={styles.input}
          type="text"
          value={filters}
          onChange={e => dispatch(filterContact(e.currentTarget.value))}
        />
      </label>
    </div>
  );
}
