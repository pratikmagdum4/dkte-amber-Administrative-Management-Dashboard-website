import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, } from 'react-router-dom';
import './App.css';
import LoginForm from './pages/login/LoginForm.jsx';
import StudentSubmissionForm from './pages/Home/Home.jsx';
import LoginForm2 from './pages/login/login2.jsx';
import StudentFormTable from './components/ui/RankersTables.jsx';
import RankersTables from './components/ui/RankersTables.jsx';
import DisplayInstitutes from './pages/Clerk/StudentAchivements/CGPARanks.jsx';
import Dropdown2 from './components/ui/dropdown.jsx';
import CourseList from './pages/Clerk/StudentAchivements/CourseList.jsx';
import ClerkHomePage from './pages/Clerk/ClerkHome/clerkHome.jsx';
import DepartmentListing from './components/ui/departmentlisting.jsx';
import AchievementsTable2 from './pages/Clerk/StudentAchivements/PaperProject.jsx';
import StudentPaperProject from './pages/Clerk/StudentAchivements/PaperProject.jsx';
import StudentSpecialAchievements from './pages/Clerk/StudentAchivements/SpecialAchievement.jsx';
import StdHigherEducation from './pages/Clerk/StudentAchivements/HigherStudies.jsx';
import StdAppreciationPrize from './pages/Clerk/StudentAchivements/AppreciationPrize.jsx';
import StdInternationalTraining from './pages/Clerk/StudentAchivements/InternationalTraining.jsx';
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
        <Route path='/clerklogin/clerkhome/studentachievement/courselist/listing/ranktables' element={<RankersTables />}>
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
        <Route path='/clerklogin/clerkhome/studentachievement/paperproject' element={<StudentPaperProject />}>
        </Route>
        <Route path='/clerklogin/clerkhome/studentachievement/paperproject' element={<StudentPaperProject />}>
        </Route>
        <Route path='/clerklogin/clerkhome/studentachievement/specialachievement' element={<StudentSpecialAchievements />}>
        </Route>
        <Route path='/clerklogin/clerkhome/studentachievement/higherstudies' element={<StdHigherEducation />}>
        </Route>
        <Route path='/clerklogin/clerkhome/studentachievement/appreciationprize' element={<StdAppreciationPrize />}>
        </Route>
        <Route path='/clerklogin/clerkhome/studentachievement/internationaltraining' element={<StdInternationalTraining />}>
        </Route>
        <Route path='/AchievementsTable' element={<AchievementsTable2 />}>
        </Route>

      </Routes>
    </Router>
  )

}

export default App
