import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, } from 'react-router-dom';
import './App.css';
import LoginForm from './pages/login/LoginForm.jsx';
import StudentSubmissionForm from './pages/Home/Home.jsx';
<<<<<<< HEAD




=======
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
import FacultyBooksPublication from './pages/Clerk/FacultyAchivements/BooksPublication.jsx';
import FacultyPaperPresentation from './pages/Clerk/FacultyAchivements/PaperPresentationConference.jsx';
import FacultyPatentGrant from './pages/Clerk/FacultyAchivements/PatentGrant.jsx';
import FacultyWorkShop from './pages/Clerk/FacultyAchivements/WorkshopSTTPFDP.jsx';
import FacultyOtherSpecial from './pages/Clerk/FacultyAchivements/OtherSpecial.jsx';
import FacultyTrainingProgram from './pages/Clerk/FacultyAchivements/TrainingProgram.jsx';
import FacultyPaperJournalPublications from './pages/Clerk/FacultyAchivements/PaperJournalPublications.jsx';
import ClubReports from './pages/Clerk/ClubReports/ClubList.jsx';
import StudentAchievementlists from './pages/Clerk/StudentAchivements/StudentAchivementList.jsx';
import FacultyAchievementLists from './pages/Clerk/FacultyAchivements/FacultyAchivementList.jsx';
>>>>>>> a42412d28921ba2801d579ed365016cb69e00827
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

        <Route path='/clerklogin/clerkhome/studentachievement' element={<StudentAchievementlists />}>
        </Route>
        <Route path='/clerklogin/clerkhome/studentachievement/courselist/' element={<CourseList />}>
        </Route>
        <Route path='/clerklogin/clerkhome/studentachievement/courselist/listing' element={<DepartmentListing />}>
        </Route>
        <Route path='/clerklogin/clerkhome/studentachievement/paperproject' element={<StudentPaperProject />}>
        </Route>
        <Route path='/clerklogin/clerkhome/studentachievement/paperproject' element={<StudentPaperProject />}>
        </Route>
        <Route path='/clerklogin/clerkhome/studentachievement/exams' element={<StudentSpecialAchievements />}>
        </Route>
        <Route path='/clerklogin/clerkhome/studentachievement/higherstudies' element={<StdHigherEducation />}>
        </Route>
        <Route path='/clerklogin/clerkhome/studentachievement/appreciationprize' element={<StdAppreciationPrize />}>
        </Route>
        <Route path='/clerklogin/clerkhome/studentachievement/internationaltraining' element={<StdInternationalTraining />}>
        </Route>

        <Route path='/clerklogin/clerkhome/facultyachievement' element={<FacultyAchievementLists />}>
        </Route>
        <Route path='/clerklogin/clerkhome/facultyachievement/paperjournalpub' element={<FacultyPaperJournalPublications />}>
        </Route>
        <Route path='/clerklogin/clerkhome/facultyachievement/bookspublish' element={<FacultyBooksPublication />}>
        </Route>
        <Route path='/clerklogin/clerkhome/facultyachievement/paperpresentation' element={<FacultyPaperPresentation />}>
        </Route>
        <Route path='/clerklogin/clerkhome/facultyachievement/patentgrant' element={<FacultyPatentGrant />}>
        </Route>
        <Route path='/clerklogin/clerkhome/facultyachievement/workshop' element={<FacultyWorkShop />}>
        </Route>
        <Route path='/clerklogin/clerkhome/facultyachievement/otherspecial' element={<FacultyOtherSpecial />}>
        </Route>
        <Route path='/clerklogin/clerkhome/facultyachievement/trainingprogram' element={<FacultyTrainingProgram />}>
        </Route>
        <Route path='/clerklogin/clerkhome/clubreports' element={<ClubReports />}>
        </Route>
        <Route path='/AchievementsTable' element={<AchievementsTable2 />}>
        </Route>

      </Routes>
    </Router>
  )

}

export default App
