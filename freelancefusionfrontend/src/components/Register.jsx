import { useState } from "react";
import { FaUser, FaEnvelope, FaEye, FaEyeSlash, FaLock } from "react-icons/fa";
import CustomUserRegisterService from './../services/CustomUserService/CustomUserRegisterService';
import {  Link,  useNavigate } from "react-router-dom";
import logo from '../assets/image.png';
const Register = () => {
    const [formData, setFormData] = useState({
        full_name: "",
        email: "",
        user_type: "",
        password: "",
        password2: ""
    });
    const navigate=useNavigate()
    
    


    const [showPassword, setShowPassword] = useState(false);
    const [showpassword2, setShowpassword2] = useState(false);
    const [errors, setErrors] = useState({});

    const validateField = (name, value) => {
        switch (name) {
            case "full_name":
                return value.length < 3 ? "Name must be at least 3 characters" : "";
            case "email":
                return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? "Invalid email format" : "";
            case "user_type":
                return !value ? "Please select a user type" : "";
            case "password":
                return !/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value)
                    ? "Password must contain at least 8 characters, one uppercase letter, one number, and one special character"
                    : "";
            case "password2":
                return value !== formData.password ? "Passwords do not match" : "";
            default:
                return "";
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};
        Object.keys(formData).forEach((key) => {
            const error = validateField(key, formData[key]);
            if (error) newErrors[key] = error;
        });
        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            console.log("Form submitted:", formData);
            // Here you can call your API to register the user
            CustomUserRegisterService.CustomUserRegister(formData)
                .then((response) => {
                    console.log("Registration successful:", response);
                    // Handle success (e.g., redirect to login page or show a success message)
                      
                      navigate("/login");    
                })
                .catch((error) => {
                    console.error("Registration failed:", error);
                    // Handle error (e.g., show a notification)
                });
        }
    };

    return (
        <div className="min-h-screen  mt-15 bg-gradient-to-br from-blue-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Left Column - Brand Info */}
                        <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 text-white flex flex-col justify-center">
                            <div className="mb-8">
                                <img
                                    src={logo}
                                    alt="FreelanceFusion Logo"
                                    className="w-48 mx-auto mb-6 rounded-2xl"
                                />
                                <h2 className="text-3xl font-bold text-center mb-4">Welcome to FreelanceFusion</h2>
                                <p className="text-blue-100 text-center">
                                    Join our community of freelancers and employers to unlock endless opportunities.
                                </p>
                            </div>
                        </div>

                        {/* Right Column - Registration Form */}
                        <div className="p-8">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Create your account</h3>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                {/* Full Name Input */}
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <FaUser className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        type="text"
                                        name="full_name"
                                        value={formData.full_name}
                                        onChange={handleChange}
                                        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        placeholder="Enter your full name"
                                    />
                                    {errors.full_name && <p className="mt-1 text-sm text-red-600">{errors.full_name}</p>}
                                </div>

                                {/* Email Input */}
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <FaEnvelope className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        placeholder="your.email@example.com"
                                    />
                                    {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                                </div>

                                {/* User Type Dropdown */}
                                <div className="relative">
                                    <select
                                        name="user_type"
                                        value={formData.user_type}
                                        onChange={handleChange}
                                        className="block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md leading-5 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    >
                                        <option value="">Select user type</option>
                                        <option value="freelancer">Freelancer</option>
                                        <option value="employer">Employer</option>
                                       
                                    </select>
                                    {errors.user_type && <p className="mt-1 text-sm text-red-600">{errors.user_type}</p>}
                                </div>

                                {/* Password Input */}
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <FaLock className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        className="block w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        placeholder="Enter password"
                                    />
                                    <button
                                        type="button"
                                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? (
                                            <FaEyeSlash className="h-5 w-5 text-gray-400" />
                                        ) : (
                                            <FaEye className="h-5 w-5 text-gray-400" />
                                        )}
                                    </button>
                                    {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
                                </div>

                                {/* Confirm Password Input */}
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <FaLock className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        type={showpassword2 ? "text" : "password"}
                                        name="password2"
                                        value={formData.password2}
                                        onChange={handleChange}
                                        className="block w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        placeholder="Confirm password"
                                    />
                                    <button
                                        type="button"
                                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                        onClick={() => setShowpassword2(!showpassword2)}
                                    >
                                        {showpassword2 ? (
                                            <FaEyeSlash className="h-5 w-5 text-gray-400" />
                                        ) : (
                                            <FaEye className="h-5 w-5 text-gray-400" />
                                        )}
                                    </button>
                                    {errors.password2 && (
                                        <p className="mt-1 text-sm text-red-600">{errors.password2}</p>
                                    )}
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200"
                                >
                                    Create Account
                                </button>

                                {/* Login Link */}
                               <Link to='/login'> 
                                <p className="mt-4 text-center text-sm text-gray-600">
                                    Already have an account?{" "}
                                    <button type="button" className="font-medium text-blue-600 hover:text-blue-500">
                                        Sign in
                                    </button>
                                </p>
                                </Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;