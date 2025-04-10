import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from '../pages/LangingPage';
import NotFoundPage from '../pages/NotFoundPage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import ForgetPasswordPage from '../pages/ForgetPasswordPage';


// // Example protected page components
// import AdminDashboard from '../pages/admin/Dashboard';
// import EmployerDashboard from '../pages/employer/Dashboard';
// import FreelancerDashboard from '../pages/freelancer/Dashboard';
import AdminLayout from './../layouts/adminLayout';
import EmployerLayout from './../layouts/employerLayout';
import FreelancerLayout from './../layouts/freelancerLayout';
import CareersPage from '../pages/CareersPage';
import PrivicyPolicyPage from '../pages/PrivicyPolicyPage';
import TermsConditionsPage from '../pages/TermsConditionsPage';
import AdminDashboard from '../pages/admin/AdminDashboard';
import EmployerDashboard from './../pages/employer/EmployerDashboard';
import FreelancerDashboard from './../pages/freelancer/FreelancerDashboard';
import AdminAddEmployer from '../pages/admin/AdminAddEmployer';
import AdminViewAllEmployer from '../pages/admin/AdminViewAllEmployer';
import AdminAddFreelancer from '../pages/admin/AdminAddFreelancer';
import AdminViewAllFreelancer from '../pages/admin/AdminViewAllFreelancer';
import AdminViewAllApplications from '../pages/admin/AdminViewAllApplications';
import AdminAddProjectCategory from '../pages/admin/AdminAddProjectCategory';
import AdminViewAllProjectCategory from '../pages/admin/AdminViewAllProjectCategory';
import AdminViewAllProject from '../pages/admin/AdminViewAllProject';
import AdminViewAllContract from './../pages/admin/AdminViewAllContract';
import AdminPendingContract from '../pages/admin/AdminPendingContract';
import AdminApprovedContract from '../pages/admin/AdminApprovedContract';
import AdminAddOrganizationSetting from '../pages/admin/AdminAddOrganizationSetting';
import AdminViewOrganizationSetting from '../pages/admin/AdminViewOrganizationSetting';
import AdminMessage from '../pages/admin/AdminMessage';
import AdminReview from '../pages/admin/AdminReview';
import AdminViewOwnProfile from '../pages/admin/AdminViewOwnProfile';
import AdminUpdateOwnProfile from '../pages/admin/AdminUpdateOwnProfile';
import AdminViewAllPayments from '../pages/admin/AdminViewAllPayments';
import AdminPendingPayments from '../pages/admin/AdminPendingPayments';
import AdminApprovedPayment from '../pages/admin/AdminApprovedPayment';
import AdminNotifications from '../pages/admin/AdminNotifications';
import AddProject from '../pages/employer/AddProject';
import ApprovedContracts from '../pages/employer/ApprovedContracts';
import EmployerViewAllApplications from '../pages/employer/EmployerViewAllApplications';
import MakePayment from '../pages/employer/MakePayment';
import Messages from '../pages/employer/Messages';
import Notifications from '../pages/employer/Notifications';
import PendingContracts from '../pages/employer/PendingContracts';
import Review from '../pages/employer/Review';
import UpdateProfile from '../pages/employer/UpdateProfile';
import ViewAllContracts from '../pages/employer/ViewAllContracts';
import ViewAllPayments from '../pages/employer/ViewAllPayments';
import ViewAllProject from '../pages/employer/ViewAllProject';
import ViewOwnProfile from '../pages/employer/ViewOwnProfile';
import FreelancerMessage from '../pages/freelancer/FreelancerMessage';
import FreelancerApproveContract from '../pages/freelancer/FreelancerApproveContract';
import FreelancerNotification from '../pages/freelancer/FreelancerNotification';
import FreelancerSendApplication from '../pages/freelancer/FreelancerSendApplication';
import FreelancerUpdateProfile from '../pages/freelancer/FreelancerUpdateProfile';
import FreelancerViewPayments from '../pages/freelancer/FreelancerViewPayments';
import FreelancerViewAllProject from './../pages/freelancer/FreelancerViewAllProject';
import FreelancerViewOwnProfile from '../pages/freelancer/FreelancerViewOwnProfile';




const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                {/* Public Routes */}
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/forget-password" element={<ForgetPasswordPage />} />
                <Route path='/careers' element={<CareersPage/>}/>
                <Route path='/policy' element={<PrivicyPolicyPage/>}/>
                <Route path='/terms' element={<TermsConditionsPage/>}/>

                {/* Admin Layout Routes */}
                <Route path="/admin" element={<AdminLayout />}>
                    {/* <Route path="/admin/dashboard" element={<AdminDashboard />} />
                    <Route path="/admin/add-employer" element={<AdminAddEmployer/>}/>
                    <Route path="/admin/view-employer" element={<AdminViewAllEmployer/>}/>
                    <Route path="/admin/add-freelancer" element={<AdminAddFreelancer />} />
                    <Route path="/admin/view-freelancer" element={<AdminViewAllFreelancer />} />
                    <Route path="/admin/view-applications" element={<AdminViewAllApplications/>}/>
                    <Route path="/admin/add-project-category" element={<AdminAddProjectCategory/>}/>
                    <Route path="/admin/view-project-category" element={<AdminViewAllProjectCategory/>}/>
                    <Route path="/admin/view-project" element={<AdminViewAllProject/>}/>
                    <Route path="/admin/view-contract" element={<AdminViewAllContract/>}/>
                    <Route path="/admin/pending-contract" element={<AdminPendingContract/>}/>
                    <Route path="/admin/approved-contract" element={<AdminApprovedContract/>}/>
                    <Route path="/admin/add-organization-setting" element={<AdminAddOrganizationSetting/>}/>
                    <Route path="/admin/view-organization-setting" element={<AdminViewOrganizationSetting/>}/>
                    <Route path="/admin/message" element={<AdminMessage/>}/>
                    <Route path="/admin/review" element={<AdminReview/>}/>
                    <Route path="/admin/view-profile" element={<AdminViewOwnProfile/>}/>
                    <Route path="/admin/update-profile" element={<AdminUpdateOwnProfile/>}/>
                    <Route path="/admin/view-payment" element={<AdminViewAllPayments/>}/>
                    <Route path="/admin/pending-payment" element={<AdminPendingPayments/>}/>
                    <Route path="/admin/approved-pyament" element={<AdminApprovedPayment/>}/>
                    <Route path="/admin/notification" element={<AdminNotifications/>}/> */}




                </Route>

                {/* Employer Layout Routes */}
                <Route path="/employer" element={<EmployerLayout />}>
                    
                    <Route path="/employer/dashboard" element={<EmployerDashboard />} />
                    <Route path="/employer/add-project" element={<AddProject />} />
                    <Route path="/employer/approved-contracts" element={<ApprovedContracts />} />
                    <Route path="/employer/employer-view-application" element={<EmployerViewAllApplications/>} />
                    <Route path="/employer/make-payment" element={<MakePayment/>}/>
                    <Route path="/employer/messages" element={<Messages/>}/>
                    <Route path="/employer/notification" element={<Notifications/>}/>
                    <Route path="/employer/pending-contracts" element={<PendingContracts/>}/>
                    <Route path="/employer/review" element={<Review/>}/>
                    <Route path="/employer/update-profile" element={<UpdateProfile/>}/>
                    <Route path="/employer/view-all-contracts" element={<ViewAllContracts/>}/>
                    <Route path="/employer/view-all-payments" element={<ViewAllPayments/>}/>
                    <Route path="/employer/view-all-own-project" element={<ViewAllProject/>}/>
                    <Route path="/employer/view-own-profile" element={<ViewOwnProfile/>}/>
                </Route>

                {/* Freelancer Layout Routes */}
                <Route path="/freelancer" element={<FreelancerLayout />}>
                  
                    <Route path="/freelancer/dashboard" element={<FreelancerDashboard />} />
                    <Route path="/freelancer/messages" element={<FreelancerMessage />} />
                    <Route path="/freelancer/approved-contracts" element={< FreelancerApproveContract/>} />
                    <Route path="/freelancer/notification" element={<FreelancerNotification/>}/>
                    <Route path="/freelancer/send-application" element={<FreelancerSendApplication/>}/>
                    <Route path="/freelancer/update-profile" element={<FreelancerUpdateProfile/>}/>
                    <Route path="/freelancer/view-payment" element={<FreelancerViewPayments/>}/>
                    <Route path="/freelancer/view-all-project" element={<FreelancerViewAllProject/>}/>
                    <Route path="/freelancer/view-own-profile" element={<FreelancerViewOwnProfile/>}/>
                 
                </Route>

                {/* 404 Not Found Route */}
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
            
        </Router>
    );
};

export default AppRoutes;