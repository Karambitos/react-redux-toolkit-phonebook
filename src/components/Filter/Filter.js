import { filterContact } from '../../redux/slice';
import { useSelector, useDispatch } from 'react-redux';
import styles from '../Filter/Filter.module.css';
import { selectFilter } from 'redux/selectors';

export default function Filter() {
  const filters = useSelector(selectFilter);
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
