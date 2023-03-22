import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ReactNotifications } from 'react-notifications-component';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './redux/store';
import { store } from './redux/store';
import App from 'components/App';
import './index.css';
import 'react-notifications-component/dist/theme.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PersistGate loading={null} persistor={persistor}>
      <Provider store={store}>
        <ReactNotifications />
        <App />
      </Provider>
    </PersistGate>
  </React.StrictMode>
);
