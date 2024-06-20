import React from 'react';

import { BrowserRouter as Router, Routes, Route, Link, useNavigate, } from 'react-router-dom';
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'

import './App.css';
import LoginForm from './pages/LoginForm';
import StudentSubmissionForm from './pages/Home.jsx';
import Testing1 from './pages/test.jsx';


const App = () => {

  return (
    
      <Router>
        <Routes>
        <Route path='/sub' element={<StudentSubmissionForm />}>
          </Route>
          <Route path='/login' element={<LoginForm />}>
          </Route>
        </Routes>
      </Router>
     
      
   
  )
}

export default App
