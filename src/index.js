import React from 'react'
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react'
import store from '../src/app/store'
import App from './App'
import './index.css';
<link
  rel="stylesheet"
  href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
/>


const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <Provider store={store}>
    {/* <PersistGate loading={null} persistor={persistor}> */}
    <App />
    {/* </PersistGate> */}
  </Provider>

);
