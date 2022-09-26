import React from 'react'
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from '../src/store/store'
// import { PersistGate } from 'redux-persist/integration/react'
import App from './App'
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <Provider store={store}>
    {/* <PersistGate persistor={persistor}> */}
    <App />
    {/* </PersistGate> */}
  </Provider>
);

