import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import CarouselComponent from './pages/Home/Home.jsx';
import Home1 from './pages/Home/home1.jsx';
import ClerkHome from './pages/Clerk/ClerkHome/clerkHome.jsx';

import LoginForm2 from './pages/login/ClerkLogin.jsx';
import StudentFormTable from './components/ui/RankersTables.jsx';
import RankersTables from './components/ui/RankersTables.jsx';
import DisplayInstitutes from './pages/Clerk/StudentAchivements/CGPARanks.jsx';
import Dropdown2 from './components/ui/dropdown.jsx';
import CourseList from './pages/Clerk/StudentAchivements/CoursesDepartments/CourseList.jsx';
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
import StudentCgpaFormTable from './components/ui/StudentCgpaForm.jsx';
import SecondYearBtechEngineeringTables from './pages/Clerk/StudentAchivements/CoursesDepartments/Btech Engineering/SecondYearBtechEngineering.jsx';
import ThirdYearBtechEngineeringTables from './pages/Clerk/StudentAchivements/CoursesDepartments/Btech Engineering/ThirdYearBtechEngineering.jsx';
import FourthYearBtechEngineeringTables from './pages/Clerk/StudentAchivements/CoursesDepartments/Btech Engineering/FourthYearBtechEngineering.jsx';
import FirstYearBtechTextileTables from './pages/Clerk/StudentAchivements/CoursesDepartments/Btech Textile/FirstYearBtechTextile.jsx';
import SecondYearBtechTextileTables from './pages/Clerk/StudentAchivements/CoursesDepartments/Btech Textile/SecondYearBtechTextile.jsx';
import ThirdYearBtechTextileTables from './pages/Clerk/StudentAchivements/CoursesDepartments/Btech Textile/ThirdYearBtechTextile.jsx';
import FourthYearBtechTextileTables from './pages/Clerk/StudentAchivements/CoursesDepartments/Btech Textile/FourthYearBtechTextile.jsx';
import MBASecondYearCgpaTables from './pages/Clerk/StudentAchivements/CoursesDepartments/MBA/SecondYearMba.jsx';
import MBAFirstYearCgpaTables from './pages/Clerk/StudentAchivements/CoursesDepartments/MBA/FirstYearMba.jsx';
import FirstYearDiplomaTables from './pages/Clerk/StudentAchivements/CoursesDepartments/Diploma/FirstYearDiploma.jsx';
import SecondYearDiplomaTables from './pages/Clerk/StudentAchivements/CoursesDepartments/Diploma/SecondYearDiploma.jsx';
import ThirdYearDiplomaTables from './pages/Clerk/StudentAchivements/CoursesDepartments/Diploma/ThirdYearDiploma.jsx';
import AdminNotification from './pages/Admin/Notification/AdminNotification.jsx';
import ClerkNotification from './pages/Clerk/ClerkHome/ClerkNotifications.jsx';
import ErrorPage from './components/ui/error.jsx';
import ClerkLoginDepartmentListingComponent from './pages/login/LoginClerkList.jsx';

import ClerkSignupPage from './pages/SignUp/ClerkSignUp.jsx';
import SignUpPage from './pages/SignUp/SignUpPage.jsx';

import PrivateRoute from './components/services/private.js';
import AdminSignupPage from './pages/SignUp/AdminSignUp.jsx';
import AdminProfilePage from './pages/SignUp/AdminSignUp.jsx';
import AdminProfile from './pages/Admin/Profile/AdminProfile.jsx';
import ClerkProfile from './pages/Clerk/ClerkHome/ClerkProfilePage.jsx';
import AdminResetPassword from './components/ui/AdminResetPassword.jsx';
import ClerkResetPassword from './components/ui/ClerkResetPassword.jsx';
import { logOut, loadState, selectCurrentRole } from './redux/auth.js';
import { useDispatch, useSelector } from 'react-redux';
import ContactPage from './pages/Contact/Contact.jsx';
import NotificationPage from './pages/Admin/Notification/AdminNotificaitonDisplayList.jsx';
import CoordinateFacultySignup from './pages/SignUp/CoordinateFacultySignup.jsx';
import FacultyLogin from './pages/login/CoFacultyLogin.jsx';
import ClerkSidebar from './pages/Clerk/ClerkHome/ClerkSidebar.jsx';
import ClerkSidebarHome from './pages/Clerk/ClerkHome/ClerkSidebarhome.jsx';
import ClerkLayout from './pages/Clerk/ClerkHome/ClerkLayout.jsx';
import CollapseDefault from './components/ui/collapse.jsx';



const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const checkExpiry = () => {
      const storedState = loadState();
      if (storedState && storedState.expiry && Date.now() > storedState.expiry) {
        dispatch(logOut()); // Log out if expired
      }
    };

    const intervalId = setInterval(checkExpiry, 5000); // Check every 5 seconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [dispatch]);
  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === 'authState') {
        const storedState = loadState();
        if (!storedState || (storedState.expiry && Date.now() > storedState.expiry)) {
          dispatch(logOut()); // Force logout
        }
      }
    };


    window.addEventListener('storage', handleStorageChange);

    return () => window.removeEventListener('storage', handleStorageChange); // Cleanup on unmount
  }, [dispatch]);
  const role = useSelector(selectCurrentRole)
  return (
    <Router>
      <Routes>
        <Route path='/' element={<CarouselComponent />} />
        <Route path="/admin/reset-password/:token" element={<AdminResetPassword />} />
        <Route path="/clerk/reset-password/:token" element={<ClerkResetPassword />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/submit-article' element={<ArticleForm />} />
        <Route path='/submit-image' element={<ImageForm />} />
        <Route path='/submit-technical-article' element={<TechnicalArticleForm />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/signup/clerk' element={<ClerkSignupPage />} />
        <Route path='/signup/admin' element={<AdminSignupPage />} />
        <Route path='/signup/co-faculty' element={<CoordinateFacultySignup />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/login/clerk/deptlist/deptlogin' element={<LoginForm2 />} />
        <Route path='/login/clerk/deptlist' element={<ClerkLoginDepartmentListingComponent />} />
        <Route path='/login/admin' element={<AdminLoginForm />} />
        <Route path='/login/co-faculty' element={<FacultyLogin />} />




        <Route path='/login/clerk/deptlist/deptlogin/home/profile' element={<PrivateRoute element={<ClerkProfile />} allowedRoles={["clerk"]} />} />
        <Route path='/rank/std' element={<PrivateRoute element={<StudentFormTable />} allowedRoles={[]} />} />
        <Route path='/login/clerk/deptlist/deptlogin/home/studentachievement/courselist/listing/ranktables' element={<PrivateRoute element={<RankersTables />} allowedRoles={["clerk"]} />} />
        <Route path='/institute' element={<PrivateRoute element={<DisplayInstitutes />} allowedRoles={[]} />} />
        <Route path='/drop' element={<PrivateRoute element={<Dropdown2 />} allowedRoles={[]} />} />
        <Route path='/login/admin/home' element={<PrivateRoute element={<ProgressTracking />} allowedRoles={["admin"]} />} />
        <Route path='/login/admin/home/verify-article' element={<PrivateRoute element={<ArticleList />} allowedRoles={["admin"]} />} />
        <Route path='/login/admin/home/verify-image' element={<PrivateRoute element={<ImgUploadList />} allowedRoles={["admin"]} />} />
        <Route path='/login/admin/home/verify-technical-article' element={<PrivateRoute element={<TechArticleList />} allowedRoles={["admin"]} />} />
        <Route path='/login/admin/home/display-article' element={<PrivateRoute element={<ArticleDisplayList />} allowedRoles={["admin"]} />} />
        <Route path='/login/admin/home/display-image' element={<PrivateRoute element={<ImageDisplayList />} allowedRoles={["admin"]} />} />
        <Route path='/login/admin/home/display-technical-article' element={<PrivateRoute element={<TechArticleDisplayList />} allowedRoles={["admin"]} />} />
        <Route path='/login/admin/home/notification' element={<PrivateRoute element={<AdminNotification />} allowedRoles={["admin"]} />} />
        <Route path='/login/admin/home/profile' element={<PrivateRoute element={<AdminProfile />} allowedRoles={["admin"]} />} />
        <Route path='/login/admin/home/notificationlist' element={<PrivateRoute element={<NotificationPage />} allowedRoles={["admin"]} />} />




        <Route path='/login/clerk/deptlist/deptlogin/home/studentachievement/courselist/listing/departments' element={<PrivateRoute element={<DepartmentListing />} allowedRoles={["clerk", "admin"]} />} />
        <Route path='/login/clerk/deptlist/deptlogin/home/studentachievement/courselist' element={<PrivateRoute element={<CourseList />} allowedRoles={["clerk", "admin"]} />} />
        <Route path='/login/clerk/deptlist/deptlogin/home/studentachievement/paperproject' element={<PrivateRoute element={<StudentPaperProject />} allowedRoles={["clerk", "admin"]} />} />
        <Route path='/login/clerk/deptlist/deptlogin/home/studentachievement/exams' element={<PrivateRoute element={<StudentSpecialAchievements />} allowedRoles={["clerk", "admin"]} />} />
        <Route path='/login/clerk/deptlist/deptlogin/home/studentachievement/higherstudies' element={<PrivateRoute element={<StdHigherEducation />} allowedRoles={["clerk", "admin"]} />} />
        <Route path='/login/clerk/deptlist/deptlogin/home/studentachievement/appreciationprize' element={<PrivateRoute element={<StdAppreciationPrize />} allowedRoles={["clerk", "admin"]} />} />
        <Route path='/login/clerk/deptlist/deptlogin/home/studentachievement/internationaltraining' element={<PrivateRoute element={<StdInternationalTraining />} allowedRoles={["clerk", "admin"]} />} />
        <Route path='/login/clerk/deptlist/deptlogin/home/studentachievement' element={<PrivateRoute element={<StudentAchievementlists />} allowedRoles={["clerk", "admin"]} />} />
        <Route path='/login/clerk/deptlist/deptlogin/home/facultyachievement/bookspublish' element={<PrivateRoute element={<FacultyBooksPublication />} allowedRoles={["clerk", "admin"]} />} />
        <Route path='/login/clerk/deptlist/deptlogin/home/facultyachievement/paperjournalpub' element={<PrivateRoute element={<FacultyPaperJournalPublications />} allowedRoles={["clerk", "admin"]} />} />
        <Route path='/login/clerk/deptlist/deptlogin/home/facultyachievement/patentgrant' element={<PrivateRoute element={<FacultyPatentGrant />} allowedRoles={["clerk", "admin"]} />} />
        <Route path='/login/clerk/deptlist/deptlogin/home/facultyachievement/paperpresentation' element={<PrivateRoute element={<FacultyPaperPresentation />} allowedRoles={["clerk", "admin"]} />} />
        <Route path='/login/clerk/deptlist/deptlogin/home/facultyachievement/workshop' element={<PrivateRoute element={<FacultyWorkShop />} allowedRoles={["clerk", "admin"]} />} />
        <Route path='/login/clerk/deptlist/deptlogin/home/facultyachievement/otherspecial' element={<PrivateRoute element={<FacultyOtherSpecial />} allowedRoles={["clerk", "admin"]} />} />
        <Route path='/login/clerk/deptlist/deptlogin/home/facultyachievement/trainingprogram' element={<PrivateRoute element={<FacultyTrainingProgram />} allowedRoles={["clerk", "admin"]} />} />
        <Route path='/login/clerk/deptlist/deptlogin/home/facultyachievement' element={<PrivateRoute element={<FacultyAchievementLists />} allowedRoles={["clerk", "admin"]} />} />
        <Route path='/login/clerk/deptlist/deptlogin/home/clubreports' element={<PrivateRoute element={<ClubReports />} allowedRoles={["clerk", "admin"]} />} />
        <Route path='/login/clerk/deptlist/deptlogin/home/mainevents' element={<PrivateRoute element={<MainEventTables />} allowedRoles={["clerk", "admin"]} />} />
        <Route path='/login/clerk/deptlist/deptlogin/home/placement' element={<PrivateRoute element={<TrainingPlacementListing />} allowedRoles={["clerk", "admin"]} />} />
        <Route path='/login/clerk/deptlist/deptlogin/home/placement/engineering/report' element={<PrivateRoute element={<TrainingPlacementEngineeringReport />} allowedRoles={["clerk", "admin"]} />} />
        <Route path='/login/clerk/deptlist/deptlogin/home/placement/textile/nationalcompanies' element={<PrivateRoute element={<TextileNationalCompaniesList />} allowedRoles={["clerk", "admin"]} />} />
        <Route path='/login/clerk/deptlist/deptlogin/home/placement/textile/internationalcompanies' element={<PrivateRoute element={<TextileInternationalCompaniesList />} allowedRoles={["clerk", "admin"]} />} />
        <Route path='/login/clerk/deptlist/deptlogin/home/placement/textile/report' element={<PrivateRoute element={<TrainingPlacementTextileReport />} allowedRoles={["clerk", "admin"]} />} />
        <Route path='/login/clerk/deptlist/deptlogin/home/placement/engineering/companies' element={<PrivateRoute element={<EngineeringCompaniesList />} allowedRoles={["clerk", "admin"]} />} />
        <Route path='/login/clerk/deptlist/deptlogin/home/sponsorlist' element={<PrivateRoute element={<SponsorListInfo />} allowedRoles={["clerk", "admin"]} />} />
        <Route path='/login/clerk/deptlist/deptlogin/home/staffmembers' element={<PrivateRoute element={<StaffMembersList />} allowedRoles={["clerk", "admin"]} />} />
        <Route path='/login/clerk/deptlist/deptlogin/home/upgraduation' element={<PrivateRoute element={<UpGraduationQalificationList />} allowedRoles={["clerk", "admin"]} />} />
        <Route path='/article/submit' element={<PrivateRoute element={<ArticleForm />} allowedRoles={[]} />} />
        <Route path='/img/submit' element={<PrivateRoute element={<ImageForm />} allowedRoles={[]} />} />
        <Route path='/notification' element={<PrivateRoute element={<AuthButton />} allowedRoles={[]} />} />
        <Route path='/home' element={<PrivateRoute element={<Home1 />} allowedRoles={[]} />} />
        {/* <Route path='/error' element={<PrivateRoute element={<ErrorPage />} allowedRoles={[]} />} /> */}

        <Route path='/imagegallery' element={<PrivateRoute element={<ImageDisplayList />} allowedRoles={[]} />} />
        <Route path='/login/clerk/deptlist/deptlogin/home/studentachievement/course-list/btech/year1' element={<PrivateRoute element={<FirstYearBtechEngineeringTables />} allowedRoles={["clerk", "admin"]} />} />
        <Route path='/login/clerk/deptlist/deptlogin/home/studentachievement/course-list/btech/year2' element={<PrivateRoute element={<SecondYearBtechEngineeringTables />} allowedRoles={["clerk", "admin"]} />} />
        <Route path='/login/clerk/deptlist/deptlogin/home/studentachievement/course-list/btech/year3' element={<PrivateRoute element={<ThirdYearBtechEngineeringTables />} allowedRoles={["clerk", "admin"]} />} />
        <Route path='/login/clerk/deptlist/deptlogin/home/studentachievement/course-list/btech/year4' element={<PrivateRoute element={<FourthYearBtechEngineeringTables />} allowedRoles={["clerk", "admin"]} />} />
        <Route path='/login/clerk/deptlist/deptlogin/home/studentachievement/course-list/textile/year1' element={<PrivateRoute element={<FirstYearBtechTextileTables />} allowedRoles={["clerk", "admin"]} />} />
        <Route path='/login/clerk/deptlist/deptlogin/home/studentachievement/course-list/textile/year2' element={<PrivateRoute element={<SecondYearBtechTextileTables />} allowedRoles={["clerk", "admin"]} />} />
        <Route path='/login/clerk/deptlist/deptlogin/home/studentachievement/course-list/textile/year3' element={<PrivateRoute element={<ThirdYearBtechTextileTables />} allowedRoles={["clerk", "admin"]} />} />
        <Route path='/login/clerk/deptlist/deptlogin/home/studentachievement/course-list/textile/year4' element={<PrivateRoute element={<FourthYearBtechTextileTables />} allowedRoles={["clerk", "admin"]} />} />
        <Route path='/login/clerk/deptlist/deptlogin/home/studentachievement/course-list/mba/year1' element={<PrivateRoute element={<MBAFirstYearCgpaTables />} allowedRoles={["clerk"]} />} />

        <Route path='/login/clerk/deptlist/deptlogin/home' element={<PrivateRoute element={<ClerkHome />} allowedRoles={["clerk"]} />} />

        <Route path='/login/clerk/deptlist/deptlogin/home/studentachievement/course-list/mba/year2' element={<PrivateRoute element={<MBASecondYearCgpaTables />} allowedRoles={["clerk", "admin"]} />} />
        <Route path='/login/clerk/deptlist/deptlogin/home/studentachievement/course-list/diploma/year1' element={<PrivateRoute element=
          {<FirstYearDiplomaTables />} allowedRoles={["clerk"]} />} />
        <Route path='/login/clerk/deptlist/deptlogin/home/studentachievement/course-list/diploma/year2' element={<PrivateRoute element={<SecondYearDiplomaTables />} allowedRoles={["clerk", "admin"]} />} />
        <Route path='/login/clerk/deptlist/deptlogin/home/studentachievement/course-list/diploma/year3' element={<PrivateRoute element={<ThirdYearDiplomaTables />} allowedRoles={["clerk", "admin"]} />} />
        <Route path='/login/clerk/deptlist/deptlogin/home/notification' element={<PrivateRoute element={<ClerkNotification />} allowedRoles={["clerk", "admin"]} />} />


        <Route path='/login/co-faculty/verify-article' element={<PrivateRoute element={<ArticleList />} allowedRoles={["faculty"]} />} />
        <Route path='/login/co-faculty/verify-image' element={<PrivateRoute element={<ImgUploadList />} allowedRoles={["faculty"]} />} />
        <Route path='/login/co-faculty/verify-technical-article' element={<PrivateRoute element={<TechArticleList />} allowedRoles={["faculty"]} />} />
        <Route path='/login/co-faculty/display-article' element={<PrivateRoute element={<ArticleDisplayList />} allowedRoles={["faculty"]} />} />
        <Route path='/login/co-faculty/display-image' element={<PrivateRoute element={<ImageDisplayList />} allowedRoles={["faculty"]} />} />
        <Route path='/login/co-faculty/display-technical-article' element={<PrivateRoute element={<TechArticleDisplayList />} allowedRoles={["faculty"]} />} />


        {/* <Route path='/s' element={<Sidebar />}  /> */}
        {/* <Route path='/s' element={<ClerkSidebar/>}  /> */}
        <Route path='/s' element={<ClerkSidebarHome />} />
        {/* <Route path='/s' element={<ClerkSidebarHome/>}  /> */}


        <Route path='/col' element={<CollapseDefault />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>

    </Router>
  );
};

export default App;
