import React from 'react';
import { Provider } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { store } from './app/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Register from './pages/Register';
import StudentRegister from './components/Student/StudentRegister';
import TeacherRegister from './components/Teacher/TeacherRegister';
import Classes from './pages/Classes';

function App() {
  return (
    <>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/student-register" element={<StudentRegister />} />
        <Route path="/teacher-register" element={<TeacherRegister />} />
      </Routes>
      <Provider store={store}>
        <Register />
        <Classes />
        <ToastContainer />
      </Provider>
    </>

  );
}

export default App;

