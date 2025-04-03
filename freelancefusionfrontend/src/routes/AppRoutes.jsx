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
                    <Route path="/admin/dashboard" element={<AdminDashboard />} />
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
                    <Route path="/admin/notification" element={<AdminNotifications/>}/>




                </Route>

                {/* Employer Layout Routes */}
                <Route path="/employer" element={<EmployerLayout />}>
                    <Route index element={<EmployerDashboard />} />
                    {/* Add more employer routes here */}
                </Route>

                {/* Freelancer Layout Routes */}
                <Route path="/freelancer" element={<FreelancerLayout />}>
                    <Route index element={<FreelancerDashboard />} />
                    {/* Add more freelancer routes here */}
                </Route>

                {/* 404 Not Found Route */}
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
            
        </Router>
    );
};

export default AppRoutes;