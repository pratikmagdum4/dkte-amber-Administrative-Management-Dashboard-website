import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, } from 'react-router-dom';
import './App.css';

import CarouselComponent from './pages/Home/Home.jsx';

// import StudentSubmissionForm from './pages/Home/Home.jsx';
// import Footer from './pages/footer/Footer.jsx';
import ClerkHome from './pages/Clerk/ClerkHome/clerkHome.jsx';

import LoginForm2 from './pages/login/login2.jsx';
import StudentFormTable from './components/ui/RankersTables.jsx';
import RankersTables from './components/ui/RankersTables.jsx';
import DisplayInstitutes from './pages/Clerk/StudentAchivements/CGPARanks.jsx';
import Dropdown2 from './components/ui/dropdown.jsx';
import CourseList from './pages/Clerk/StudentAchivements/CourseList.jsx';
import DepartmentListing from './components/ui/departmentlisting.jsx';
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
import MainEventTables from './pages/Clerk/MainEvents/EventsList.jsx';
import TrainingPlacementListing from './pages/Clerk/TrainingPlacement/TrainingPlacementHome.jsx';
import TrainingPlacementEngineeringReport from './pages/Clerk/TrainingPlacement/TrainingPlacementEngineeringReport.jsx';
import TextileInternationalCompaniesList from './pages/Clerk/TrainingPlacement/TextileInternationalCompanies.jsx';
import TrainingPlacementTextileReport from './pages/Clerk/TrainingPlacement/TrainingPlacementTexttileReport.jsx';
import TextileNationalCompaniesList from './pages/Clerk/TrainingPlacement/TextilenationalCompanies.jsx';
import EngineeringCompaniesList from './pages/Clerk/TrainingPlacement/EngineeringPlacementComapanies.jsx';
import SponsorListInfo from './pages/Clerk/SponsoresList/Sponsorlist.jsx';
import StaffMembersList from './pages/Clerk/StaffMembers/StaffMemberslist.jsx';
import UpGraduationQalificationList from './pages/Clerk/UpGraduation/UpGraduationQalification.jsx';
import ArticleForm from './pages/StudentSubmission/ArticleSubmission/Articleform.jsx';
import ImageForm from './pages/StudentSubmission/ImageSubmission/ImageSubmitForm.jsx';
import AuthButton from './components/ui/AuthButtom.jsx';
import LoginPage from './pages/login/LoginPage.jsx';
import Dashboard from './pages/Admin/Dashboards/Dashboard.jsx';
import EnglishArticles from './pages/DisplayItems/LanguageSection/English/EnglishArticles.jsx';
const App = () => {



  return (
    <Router>
      <Routes>
        <Route path='/' element={<CarouselComponent />}>
        </Route>
        <Route path='/login' element={<LoginPage />}>
        </Route>
        <Route path='/login/clerk' element={<LoginForm2 />}>
        </Route>
        <Route path='/login/clerk/home' element={<ClerkHome />}>
        </Route>
        <Route path='/rank' element={<StudentFormTable />}>
        </Route>
        <Route path='/login/clerk/home/studentachievement/courselist/listing/ranktables' element={<RankersTables />}>
        </Route>
        <Route path='/institute' element={<DisplayInstitutes />}>
        </Route>
        <Route path='/drop' element={<Dropdown2 />}>
        </Route>
        {/* <Route path='/login/clerk/home/' element={<homePage />}> */}
        {/* </Route> */}


        <Route path='/clerk/home/studentachievement' element={<StudentAchievementlists />}>
        </Route>
        <Route path='/clerk/home/studentachievement/courselist/' element={<CourseList />}>
        </Route>
        <Route path='/clerk/home/studentachievement/courselist/listing' element={<DepartmentListing />}>
        </Route>
        <Route path='/clerk/home/studentachievement/paperproject' element={<StudentPaperProject />}>
        </Route>
        <Route path='/clerk/home/studentachievement/paperproject' element={<StudentPaperProject />}>
        </Route>
        <Route path='/clerk/home/studentachievement/exams' element={<StudentSpecialAchievements />}>
        </Route>
        <Route path='/clerk/home/studentachievement/higherstudies' element={<StdHigherEducation />}>
        </Route>
        <Route path='/clerk/home/studentachievement/appreciationprize' element={<StdAppreciationPrize />}>
        </Route>
        <Route path='/clerk/home/studentachievement/internationaltraining' element={<StdInternationalTraining />}>
        </Route>

        <Route path='/clerk/home/facultyachievement' element={<FacultyAchievementLists />}>
        </Route>
        <Route path='/clerk/home/facultyachievement/paperjournalpub' element={<FacultyPaperJournalPublications />}>
        </Route>
        <Route path='/clerk/home/facultyachievement/bookspublish' element={<FacultyBooksPublication />}>
        </Route>
        <Route path='/clerk/home/facultyachievement/paperpresentation' element={<FacultyPaperPresentation />}>
        </Route>
        <Route path='/clerk/home/facultyachievement/patentgrant' element={<FacultyPatentGrant />}>
        </Route>
        <Route path='/clerk/home/facultyachievement/workshop' element={<FacultyWorkShop />}>
        </Route>
        <Route path='/clerk/home/facultyachievement/otherspecial' element={<FacultyOtherSpecial />}>
        </Route>
        <Route path='/clerk/home/facultyachievement/trainingprogram' element={<FacultyTrainingProgram />}>
        </Route>


        <Route path='/clerk/home/clubreports' element={<ClubReports />}>
        </Route>

        <Route path='/clerk/home/mainevents/' element={<MainEventTables />}>
        </Route>

        <Route path='/clerk/home/trainingplacement/' element={<TrainingPlacementListing />}>
        </Route>
        <Route path='/clerk/home/trainingplacement/textilereport' element={<TrainingPlacementTextileReport />}>
        </Route>
        <Route path='/clerk/home/trainingplacement/engineeringreport' element={<TrainingPlacementEngineeringReport />}>
        </Route>
        <Route path='/clerk/home/trainingplacement/internationalcompanies' element={<TextileInternationalCompaniesList />}>
        </Route>
        <Route path='/clerk/home/trainingplacement/nationalcompanies' element={<TextileNationalCompaniesList />}>
        </Route>
        <Route path='/clerk/home/trainingplacement/engineeringcompanies' element={<EngineeringCompaniesList />}>
        </Route>

        <Route path='/clerk/home/sponsorlist' element={<SponsorListInfo />}>
        </Route>

        <Route path='/clerk/home/staffmembers' element={<StaffMembersList />}>
        </Route>

        <Route path='/clerk/home/upgraduation' element={<UpGraduationQalificationList />}>
        </Route>

        <Route path='/submit' element={<ArticleForm />}>
        </Route>
        <Route path='/stdimgform' element={<ImageForm />}>
        </Route>
        <Route path='/auth' element={<AuthButton />}>
        </Route>
        <Route path='/log' element={<LoginPage />}>
        </Route>
        <Route path='/dash' element={<Dashboard />}>
        </Route>

        <Route path='/display' element={<EnglishArticles />}>
        </Route>


      </Routes>
    </Router>
  )

}

export default App
