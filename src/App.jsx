import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, } from 'react-router-dom';
import './App.css';
import LoginForm from './pages/login/LoginForm.jsx';
import StudentSubmissionForm from './pages/Home/Home.jsx';
import LoginForm2 from './pages/login/login2.jsx';
import StudentFormTable from './pages/Clerk/StudentAchivements/BtechRankers.jsx';
import Btech from './pages/Clerk/StudentAchivements/BtechRankers.jsx';
import DisplayInstitutes from './pages/Clerk/StudentAchivements/CGPARanks.jsx';
import Dropdown2 from './components/ui/dropdown.jsx';
import CourseList from './pages/Clerk/StudentAchivements/CourseList.jsx';
import ClerkHomePage from './pages/Clerk/ClerkHome/clerkHome.jsx';
import DepartmentListing from './components/ui/departmentlisting.jsx';
const App = () => {



  return (
    <Router>
      <Routes>
        <Route path='/' element={<StudentSubmissionForm />}>
        </Route>
        <Route path='/login' element={<LoginForm2 />}>
        </Route>
        <Route path='/rank' element={<StudentFormTable />}>
        </Route>
        <Route path='/clerklogin/clerkhome/studentachievement/courselist/listing/ranktables' element={<Btech />}>
        </Route>
        <Route path='/institute' element={<DisplayInstitutes />}>
        </Route>
        <Route path='/drop' element={<Dropdown2 />}>
        </Route>
        <Route path='/clerklogin/clerkhome/' element={<ClerkHomePage />}>
        </Route>
        <Route path='/clerklogin/clerkhome/studentachievement' element={<CourseList />}>
        </Route>
        <Route path='/clerklogin/clerkhome/studentachievement/courselist/listing' element={<DepartmentListing />}>
        </Route>
       
        {/* <Route path='/login/clerk/studentachievements/rank/' element={<DisplayInstitutes />}>
        </Route> */}
      </Routes>
    </Router>
  )

}

export default App
