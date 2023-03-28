import { useDispatch, useSelector } from 'react-redux';
import { Store } from 'react-notifications-component';
import { selectContactsCheckbox } from 'redux/contactBook/selectors';
import { Routes, Route } from 'react-router-dom';
import { refreshUser } from 'redux/auth/operations';
import { useEffect } from 'react';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import NotFound from '../pages/NotFound';
import Layout from '../components/Layout/Layout';
import { selectAuthError, selectAuthRefreshing } from 'redux/auth/selectors';
import { PublicRoute } from 'hoc/PublicRoute';

export default function App() {
  const checked = useSelector(selectContactsCheckbox);
  const isRefreshing = useSelector(selectAuthRefreshing);
  const error = useSelector(selectAuthError);
  const dispatch = useDispatch();

  const addNotification = () => {
    Store.addNotification({
      title: 'Warning',
      message: error,
      type: 'danger',
      insert: 'top',
      container: 'top-right',
      animationIn: ['animate__animated', 'animate__fadeIn'],
      animationOut: ['animate__animated', 'animate__fadeOut'],
      dismiss: {
        duration: 3000,
        onScreen: true,
      },
    });
  };

  useEffect(() => {
    dispatch(refreshUser());
  }, []);

  useEffect(() => {
    if (!error) return;
    addNotification(error);
  }, [error]);

  return (
    !isRefreshing && (
      <div
        className="mainWrapper"
        data-theme={`${!checked ? 'dark' : 'light'}`}
      >
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route
              path="/login"
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              }
            />
            <Route
              path="/register"
              element={
                <PublicRoute>
                  <Register />
                </PublicRoute>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    )
  );
}
