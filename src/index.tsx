import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import './global.css';
import store from './store/store';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FruitDetails from './components/FruitDetails/FruitDetails';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/fruit/:id" element={<FruitDetails />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);
