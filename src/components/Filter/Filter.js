import { filterContact } from '../../redux/actions';
import { useSelector, useDispatch } from 'react-redux';
import styles from '../Filter/Filter.module.css';

export default function Filter() {
  const { filters } = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <label className={styles.label}>
      Find contacts:
      <input
        className={styles.input}
        type="text"
        value={filters}
        onChange={e => dispatch(filterContact(e.currentTarget.value))}
      />
    </label>
  );
}
