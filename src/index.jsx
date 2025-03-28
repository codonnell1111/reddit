import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'; // Import Provider
import App from './App';
import store from './store';
import './index.css'; 

const root = ReactDOM.createRoot(document.getElementById('root'));

// Wrap your App with the Provider to provide the store to the entire app
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
