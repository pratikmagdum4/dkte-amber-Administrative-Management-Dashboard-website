import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, } from 'react-router-dom';
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css';
import LoginForm from './pages/Loginform';
import StudentSubmissionForm from './pages/Home';
const App = () => {


  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<StudentSubmissionForm />}>
          </Route>
          <Route path='/login' element={<LoginForm />}>
          </Route>
        </Routes>
      </Router>
     
      
    </div>
  )
}

export default App
