import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ReactNotifications } from 'react-notifications-component';
import { BrowserRouter } from 'react-router-dom';
import { store } from './redux/store';
import App from 'components/App';
import './index.css';
import 'react-notifications-component/dist/theme.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <BrowserRouter basename="/react-redux-toolkit-phonebook">
    <Provider store={store}>
      <ReactNotifications />
      <App />
    </Provider>
  </BrowserRouter>
  // </React.StrictMode>
);
