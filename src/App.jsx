import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';
import Register from './pages/Register';
//App.jsx
function App() {
  return (
    <Provider store={store}>
      <Register />
      <ToastContainer />
    </Provider>
  );
}

export default App;

