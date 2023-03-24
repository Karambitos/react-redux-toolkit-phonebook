import { useSelector } from 'react-redux';
import { selectCheckbox, selectIsLoading } from 'redux/selectors';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import Layout from '../components/Layout/Layout';

export default function App() {
  const checked = useSelector(selectCheckbox);

  return (
    <div className="mainWrapper" data-theme={`${!checked ? 'dark' : 'light'}`}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}
