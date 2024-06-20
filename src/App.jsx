import React from 'react';
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css';
import LoginForm from './pages/Loginform';
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
