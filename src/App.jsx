import React from 'react';

import './App.css';
import LoginForm from './pages/LoginForm';
import StudentSubmissionForm from './pages/Home';
const App = () => {


  return (
    <div>
      <LoginForm />
      <StudentSubmissionForm />
    </div>
  )
}

export default App
