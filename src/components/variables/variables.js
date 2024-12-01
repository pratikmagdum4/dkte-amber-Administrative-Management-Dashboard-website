import { useNavigate } from "react-router-dom";

export const HomeLink = [
  { label: "Login", url: "/login" },
  { label: "Submit", url: "" },
  { label: "About Us", url: "/" },
  { label: "SignUp", url: "/signup" },
  { label: "Contact", url: "/contact" },
  // { label: "Logout", url: "" },
];
export const LoginNavLink = [
  { label: "Home", url: "/" },
  { label: "Submit", url: "" },
  { label: "About Us", url: "/" },
  { label: "SignUp", url: "/signup" },
  { label: "Contact", url: "/contact" },
  
];
export const AdminHomeLink = [
  { label: "Home", url: "/" },
  { label: "Profile", url: "/login/admin/home/profile" },
  { label: "Verify", url: "" },
  { label: "Display", url: "" },
  { label: "Progress Dashboard", url: "/login/admin/home" },
  { label: "Notification", url: "/login/admin/home/notification" },
  { label: "Notification List", url: "/login/admin/home/notificationlist" },
  { label: "Logout", url: "/" },
];
export const AdminVerifyLink = [
  { label: "Home", url: "/" },
  { label: "Verify", url: "" },
  { label: "Display", url: "" },
  { label: "Profile", url: "/login/admin/home/profile" },
  { label: "Progress Dashboard", url: "/login/admin/home" },
  { label: "Notification", url: "/login/admin/home/notification" },
  { label: "Notification List", url: "/login/admin/home/notificationlist" },
  { label: "Logout", url: "/" },
];
export const AdminDisplayLink = [
  { label: "Home", url: "/" },
  { label: "Profile", url: "/login/admin/home/profile" },
  { label: "Verify", url: "" },
  { label: "Display", url: "" },
  { label: "Progress Dashboard", url: "/login/admin/home" },
  { label: "Notification", url: "/login/admin/home/notification" },
  { label: "Notification List", url: "/login/admin/home/notificationlist" },
  { label: "Logout", url: "/" },
];
export const ClerkNavLink = [
  { label: "Home", url: "/login/clerk/deptlist/deptlogin/home" },
  { label: "Profile", url: "/login/clerk/deptlist/deptlogin/home/profile" },

  {
    label: "Notification",
    url: "/login/clerk/deptlist/deptlogin/home/notification",
  },
  { label: "Contact", url: "/contact" },
  { label: "Logout", url: "/" },
];
export const ClerkNotificationNavLink = [
  { label: "Home", url: "/login/clerk/deptlist/deptlogin/home" },
  { label: "Login", url: "/login" },

  { label: "Contact", url: "/contact" },
  { label: "Logout", url: "/" },
];
export const AdminNavLink = [
  { label: "Home", url: "/" },
  { label: "Verify", url: "" },
  { label: "Display", url: "" },
  { label: "Dashboard", url: "/login/admin/home" },
  { label: "Notification", url: "/login/admin/home/notification" },
];
export const AdminNotificationLink = [
  { label: "Home", url: "/" },
  { label: "Verify", url: "" },
  { label: "Display", url: "" },
  { label: "Dashboard", url: "/login/admin/home" },
  { label: "Logout", url: "/" },
];



export const ClubList = [
  { label: "Home", url: "/login/clerk/home" },
  { label: "Login", url: "/login" },
  { label: "Notification", url: "/login/clerk/home/notification" },
  { label: "Contact", url: "/contact" },
];

export const FacultyAchivements = [
  { label: "Home", url: "/login/clerk/deptlist/deptlogin/home" },

  { label: "Notification", url: "/login/clerk/home/notification" },
  { label: "Contact", url: "/" },
  { label: "Logout", url: "/" },
];

export const AdminSingupLinks = [
  { label: "Home", url: "/" },
  { label: "Login", url: "/login" },
  { label: "Notification", url: "/login/clerk/home/notification" },
  { label: "Contact", url: "/contact" },
];
export const ClerkLoginList = [
  { label: "Home", url: "/" },
  { label: "Register", url: "/signup" },
  { label: "Submit", url: "" },
  { label: "About Us", url: "/" },
  { label: "Contact", url: "/contact" },
];

export const MainEvents = [
  { label: "Home", url: "/login/clerk/home" },
  { label: "Login", url: "/login" },
  { label: "Notification", url: "/login/clerk/home/notification" },
  { label: "Contact", url: "/contact" },
];

export const SponsoresList = [
  { label: "Home", url: "/login/clerk/home" },
  { label: "Login", url: "/login" },
  { label: "Notification", url: "/login/clerk/home/notification" },
  { label: "Contact", url: "/contact" },
];

export const StaffMembers = [
  { label: "Home", url: "/login/clerk/home" },
  { label: "Login", url: "/login" },
  { label: "Notification", url: "/login/clerk/home/notification" },
  { label: "Contact", url: "/contact" },
];

export const StudentAchivements = [
  { label: "Home", url: "/login/clerk/home" },
  { label: "Login", url: "/login" },
  { label: "Notification", url: "/login/clerk/home/notification" },
  { label: "Contact", url: "/contact" },
];

export const TrainingPlacement = [
  { label: "Home", url: "/login/clerk/home" },
  { label: "Login", url: "/login" },
  { label: "Notification", url: "/login/clerk/home/notification" },
  { label: "Contact", url: "/contact" },
];

export const UpGraduation = [
  { label: "Home", url: "/login/clerk/home" },
  { label: "Login", url: "/login" },
  { label: "Notification", url: "/login/clerk/home/notification" },
  { label: "Contact", url: "/contact" },
];

export const FacultyVerifyLink = [
  { label: "Home", url: "/" },
  { label: "Verify", url: "" },
  { label: "Display", url: "" },
  // { label: "Profile", url: "/login/faculty/profile" },
  // { label: "Notification List", url: "/login/faculty/notificationlist" },
  { label: "Logout", url: "/" },
];
export const departmentMapping = {
  cse: "Computer Science & Engineering",
  amil: "Computer Science (AIML)",
  aids: "Artificial Intelligence and Data Science",
  antc: "Electronics and Telecommunication Engineering",
  ele: "Electrical Engineering",
  mech: "Mechanical Engineering",
  civil: "Civil Engineering",
  tt: "Textile Technology",
  tc: "Textile Chemistry",
  tp: "Textile Plant Engineering",
  mmtt: "Man-Made Textile Technology",
  ft: "Fashion Technology",
  diploma: "Diploma",
  mba: "MBA Technology",
};
export const departments = [
  "CSE",
  "CSE-AIML",
  "AIDS",
  "ENTC",
  "MECH",
  "ELEC",
  "CIVIL",
  "TC",
  "TT",
  "FT",
  "MMTT",
  "Diploma",
  "MBA",
];

export const categories = [
  "Faculty Achievements",
  "Student Achievements",
  "Student CGPA Ranks",
  "Engineering Companies",
  "Textile Companies",
  "Events",
  "Club Reports",
  "Staff Members",
  "Other",
];

 export const getClerkOptions = (navigate) => [
   {
     label: "Student Achievements",
     subOptions: [
       {
         label: "CGPA Ranks",
         action: () =>
           navigate(
             `/login/clerk/deptlist/deptlogin/home/studentachievement/courselist`
           ),
       },
       {
         label: "Paper/Project",
         action: () =>
           navigate(
             `/login/clerk/deptlist/deptlogin/home/studentachievement/paperproject`
           ),
       },
       {
         label: "GATE/TOEFL/NIFT/GRE",
         action: () =>
           navigate(
             `/login/clerk/deptlist/deptlogin/home/studentachievement/exams`
           ),
       },
       {
         label: "International Training",
         action: () =>
           navigate(
             `/login/clerk/deptlist/deptlogin/home/studentachievement/internationaltraining`
           ),
       },
       {
         label: "Higher Education",
         action: () =>
           navigate(
             `/login/clerk/deptlist/deptlogin/home/studentachievement/higherstudies`
           ),
       },
       {
         label: "Appreciation Prize",
         action: () =>
           navigate(
             `/login/clerk/deptlist/deptlogin/home/studentachievement/appreciationprize`
           ),
       },
       // Add more sub-options here...
     ],
   },
   {
     label: "Faculty Achievements",
     subOptions: [
       {
         label: "Paper /Journal Publication",
         action: () =>
           navigate(
             `/login/clerk/deptlist/deptlogin/home/facultyachievement/paperjournalpub`
           ),
       },
       {
         label: "Books Publication",
         action: () =>
           navigate(
             `/login/clerk/deptlist/deptlogin/home/facultyachievement/bookspublish`
           ),
       },
       {
         label: "Paper Presentation/Conference",
         action: () =>
           navigate(
             `/login/clerk/deptlist/deptlogin/home/facultyachievement/paperpresentation`
           ),
       },
       {
         label: "Patent Grant",
         action: () =>
           navigate(
             `/login/clerk/deptlist/deptlogin/home/facultyachievement/patentgrant`
           ),
       },
       {
         label: "Workshop/STTP/FDP",
         action: () =>
           navigate(
             `/login/clerk/deptlist/deptlogin/home/facultyachievement/workshop`
           ),
       },
       {
         label: "OTHER Special",
         action: () =>
           navigate(
             `/login/clerk/deptlist/deptlogin/home/facultyachievement/otherspecial`
           ),
       },
       {
         label: "Training Program",
         action: () =>
           navigate(
             `/login/clerk/deptlist/deptlogin/home/facultyachievement/trainingprogram`
           ),
       },
     ],
   },

   {
     label: "Training And Placement Activities",
     subOptions: [
       {
         label: "TEXTILE PLACEMENT REPORT",
         action: () =>
           navigate(
             `/login/clerk/deptlist/deptlogin/home/placement/textile/report`
           ),
       },
       {
         label: "ENGINEERING  PLACEMENT REPORT",
         action: () =>
           navigate(
             `/login/clerk/deptlist/deptlogin/home/placement/engineering/report`
           ),
       },
       {
         label: "TEXTILE PLACEMENT INTERNATIONAL COMPANIES",
         action: () =>
           navigate(
             `/login/clerk/deptlist/deptlogin/home/placement/textile/internationalcompanies`
           ),
       },
       {
         label: "TEXTILE PLACEMENT NATIONAL COMPANIES",
         action: () =>
           navigate(
             `/login/clerk/deptlist/deptlogin/home/placement/textile/nationalcompanies`
           ),
       },
       {
         label: "ENGINEERING PLACEMENT  COMPANIES",
         action: () =>
           navigate(
             `/login/clerk/deptlist/deptlogin/home/placement/engineering/companies`
           ),
       },
     ],
   },
   {
     label: "Club Reports",
     subOptions: [
       {
         label: "Reports",
         action: () =>
           navigate(`/login/clerk/deptlist/deptlogin/home/clubreports`),
       },
     ],
   },
   {
     label: "Main Events",
     subOptions: [
       {
         label: "Events ",
         action: () =>
           navigate(`/login/clerk/deptlist/deptlogin/home/mainevents`),
       },
     ],
   },
   {
     label: "Sponsors List",
     subOptions: [
       {
         label: "Sponsors",
         action: () =>
           navigate(`/login/clerk/deptlist/deptlogin/home/sponsors`),
       },
     ],
   },
   {
     label: "Staff Members",
     subOptions: [
       {
         label: "Members List",
         action: () =>
           navigate(`/login/clerk/deptlist/deptlogin/home/staffmembers`),
       },
     ],
   },
   {
     label: "Upgraduation",
     subOptions: [
       {
         label: "List ",
         action: () =>
           navigate(`/login/clerk/deptlist/deptlogin/home/upgraduation`),
       },
     ],
   },
   // Add more categories here...
 ];
