import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, } from 'react-router-dom';
import './App.css';

import CarouselComponent from './pages/Home/Home.jsx';
import Home1 from './pages/Home/home1.jsx';
// import StudentSubmissionForm from './pages/Home/Home.jsx';
// import Footer from './pages/footer/Footer.jsx';
import ClerkHome from './pages/Clerk/ClerkHome/clerkHome.jsx';

import LoginForm2 from './pages/login/ClerkLogin.jsx';
import StudentFormTable from './components/ui/RankersTables.jsx';
import RankersTables from './components/ui/RankersTables.jsx';
import DisplayInstitutes from './pages/Clerk/StudentAchivements/CGPARanks.jsx';
import Dropdown2 from './components/ui/dropdown.jsx';
import CourseList from './pages/Clerk/StudentAchivements/CourseList.jsx';
import DepartmentListing from './components/ui/departmentlisting.jsx';
import StudentPaperProject from './pages/Clerk/StudentAchivements/PaperProject.jsx';
import StudentSpecialAchievements from './pages/Clerk/StudentAchivements/SpecialAchievementExam.jsx';
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
import EnglishArticles from './pages/DisplayItems/LanguageSection/DisplayArticles.jsx';
import TechnicalArticleForm from './pages/StudentSubmission/TechinicalSubmission/TechinicalForm.jsx';
import ArticleList from './pages/Admin/Verification/ArticleVerification/ArticleVerification.jsx';
import ImgUploadList from './pages/Admin/Verification/ImageVerification/ImageVerification.jsx';
import TechArticleList from './pages/Admin/Verification/TechnicalAritcleVerification/TechnicalAritcleVerification.jsx';
import ArticleDisplayList from './pages/DisplayItems/LanguageSection/DisplayArticles.jsx';
import TechArticleDisplayList from './pages/DisplayItems/TechinicalSection/DisplayTechnicalArticles.jsx';
import ImageDisplayList from './pages/DisplayItems/ImageDisplay/DisplayImages.jsx';
import ProgressTracking from './pages/Admin/TrackClerksProgress/AdminTrack.jsx';
import FirstYearBtechEngineeringTables from './pages/Clerk/StudentAchivements/CoursesDepartments/Btech Engineering/FirstYearBtechEngineering.jsx';
import AdminLoginForm from './pages/login/AdminLogin.jsx';
const App = () => {



  return (
    <Router>
      <Routes>
        <Route path='/' element={<CarouselComponent />}>
        </Route>
        <Route path='/login' element={<LoginPage />}>
        </Route>
        <Route path='/login/clerk' element={<LoginForm2 />}></Route>
          <Route path='/login/admin' element={<AdminLoginForm />}>
        </Route>
        <Route path='/login/clerk/home' element={<ClerkHome />}>
        </Route>
        <Route path='/rank/std' element={<StudentFormTable />}>
        </Route>
        <Route path='/login/clerk/home/studentachievement/courselist/listing/ranktables' element={<RankersTables />}>
        </Route>
        <Route path='/institute' element={<DisplayInstitutes />}>
        </Route>
        <Route path='/drop' element={<Dropdown2 />}>
        </Route>


        <Route path='/login/admin/home' element={<ProgressTracking />}>
        </Route>
        <Route path='/login/admin/home/verify-article' element={<ArticleList />}>
        </Route>
        <Route path='/login/admin/home/verify-image' element={<ImgUploadList />}>
        </Route>
        <Route path='/login/admin/home/verify-technical-article' element={<TechArticleList />}>
        </Route>
        <Route path='/login/admin/home/display-article' element={<ArticleDisplayList />}>
        </Route>
        <Route path='/login/admin/home/display-image' element={<ImageDisplayList />}>
        </Route>
        <Route path='/login/admin/home/display-technical-article' element={<TechArticleDisplayList />}>
        </Route>
        
        {/* <Route path='/login/clerk/home/' element={<homePage />}> */}
        {/* </Route> */}


        <Route path='/login/clerk/home/studentachievement' element={<StudentAchievementlists />}>
        </Route>
        <Route path='/login/clerk/home/studentachievement/course-list' element={<CourseList />}>
        </Route>
        
        <Route path='/login/clerk/home/studentachievement/course-list/btech/year1' element={<FirstYearBtechEngineeringTables />}>
        </Route>

 

        <Route path='/login/clerk/home/studentachievement/course-list/listing' element={<RankersTables />}>
        </Route>
        <Route path='/login/clerk/home/studentachievement/paperproject' element={<StudentPaperProject />}>
        </Route>
        <Route path='/login/clerk/home/studentachievement/paperproject' element={<StudentPaperProject />}>
        </Route>
        <Route path='/login/clerk/home/studentachievement/exams' element={<StudentSpecialAchievements />}>
        </Route>
        <Route path='/login/clerk/home/studentachievement/higherstudies' element={<StdHigherEducation />}>
        </Route>
        <Route path='/login/clerk/home/studentachievement/appreciationprize' element={<StdAppreciationPrize />}>
        </Route>
        <Route path='/login/clerk/home/studentachievement/internationaltraining' element={<StdInternationalTraining />}>
        </Route>

        <Route path='/login/clerk/home/facultyachievement' element={<FacultyAchievementLists />}>
        </Route>
        <Route path='/login/clerk/home/facultyachievement/paperjournalpub' element={<FacultyPaperJournalPublications />}>
        </Route>
        <Route path='/login/clerk/home/facultyachievement/bookspublish' element={<FacultyBooksPublication />}>
        </Route>
        <Route path='/login/clerk/home/facultyachievement/paperpresentation' element={<FacultyPaperPresentation />}>
        </Route>
        <Route path='/login/clerk/home/facultyachievement/patentgrant' element={<FacultyPatentGrant />}>
        </Route>
        <Route path='/login/clerk/home/facultyachievement/workshop' element={<FacultyWorkShop />}>
        </Route>
        <Route path='/login/clerk/home/facultyachievement/otherspecial' element={<FacultyOtherSpecial />}>
        </Route>
        <Route path='/login/clerk/home/facultyachievement/trainingprogram' element={<FacultyTrainingProgram />}>
        </Route>


        <Route path='/login/clerk/home/clubreports' element={<ClubReports />}>
        </Route>

        <Route path='/login/clerk/home/mainevents/' element={<MainEventTables />}>
        </Route>

        <Route path='/login/clerk/home/trainingplacement/' element={<TrainingPlacementListing />}>
        </Route>
        <Route path='/login/clerk/home/trainingplacement/textilereport' element={<TrainingPlacementTextileReport />}>
        </Route>
        <Route path='/login/clerk/home/trainingplacement/engineeringreport' element={<TrainingPlacementEngineeringReport />}>
        </Route>
        <Route path='/login/clerk/home/trainingplacement/internationalcompanies' element={<TextileInternationalCompaniesList />}>
        </Route>
        <Route path='/login/clerk/home/trainingplacement/nationalcompanies' element={<TextileNationalCompaniesList />}>
        </Route>
        <Route path='/login/clerk/home/trainingplacement/engineeringcompanies' element={<EngineeringCompaniesList />}>
        </Route>

        <Route path='/login/clerk/home/sponsorlist' element={<SponsorListInfo />}>
        </Route>

        <Route path='/login/clerk/home/staffmembers' element={<StaffMembersList />}>
        </Route>

        <Route path='/login/clerk/home/upgraduation' element={<UpGraduationQalificationList />}>
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
        <Route path='/submit-article' element={<ArticleForm />}>
        </Route>
        <Route path='/submit-image' element={<ImageForm />}>
        </Route>
        <Route path='/submit-technical-article' element={<TechnicalArticleForm />}>
        </Route>
        <Route path='/articlelist' element={<ArticleList />}>
        </Route>
        <Route path='/imglist' element={<ImgUploadList />}>
        </Route>
        <Route path='/techlist' element={<TechArticleList />}>
        </Route>
        <Route path='/articledisplaylist' element={<ArticleDisplayList />}>
        </Route>
        <Route path='/techarticledisplaylist' element={<TechArticleDisplayList />}>
        </Route>
        <Route path='/imgdisplaylist' element={<ImageDisplayList />}></Route>
        <Route path='/progresstracking' element={<ProgressTracking />}></Route>
      </Routes>
    </Router>
  )

}

export default App
