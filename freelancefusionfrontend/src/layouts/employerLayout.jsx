import { Outlet, Link } from 'react-router-dom';

import logo from '../assets/image.png'; // adjust the path as needed
const EmployerLayout = () => {
    return (
        <>
            {/* ========== HEADER ========== */}
            <header className="sticky top-0 inset-x-0 flex flex-wrap md:justify-start font-semibold md:flex-nowrap z-48 w-full bg-white border-b border-gray-200 text-sm py-2.5 lg:ps-65">
                <nav className="px-4 sm:px-6 flex basis-full items-center w-full mx-auto">
                    <div className="me-5 lg:me-0 lg:hidden">
                        {/* Logo */}
                        <a className="flex-none rounded-md text-xl inline-block font-semibold focus:outline-hidden focus:opacity-80" href="#" aria-label="Preline">
                            <img className="" width="50" height="50" src={logo} alt="Logo" />
                           
                        </a>
                        {/* End Logo */}

                        <div className="lg:hidden ms-1">

                        </div>
                    </div>

                    <div className="w-full flex items-center justify-end ms-auto md:justify-between gap-x-1 md:gap-x-3">

                        <div className="hidden md:block">
                            {/* Search Input */}
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-3.5">
                                    <svg className="shrink-0 size-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                                </div>
                                <input type="text" className="py-2 ps-10 pe-16 block w-full bg-white border-gray-200 rounded-lg text-sm focus:outline-hidden focus:border-blue-500 focus:ring-blue-500 checked:border-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Search" />
                                <div className="hidden absolute inset-y-0 end-0 flex items-center pointer-events-none z-20 pe-1">
                                    <button type="button" className="inline-flex shrink-0 justify-center items-center size-6 rounded-full text-gray-500 hover:text-blue-600 focus:outline-hidden focus:text-blue-600" aria-label="Close">
                                        <span className="sr-only">Close</span>
                                        <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="m15 9-6 6" /><path d="m9 9 6 6" /></svg>
                                    </button>
                                </div>
                                <div className="absolute inset-y-0 end-0 flex items-center pointer-events-none z-20 pe-3 text-gray-400">
                                    <svg className="shrink-0 size-3 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" /></svg>
                                    <span className="mx-1">
                                        <svg className="shrink-0 size-3 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                                    </span>
                                    <span className="text-xs">/</span>
                                </div>
                            </div>
                            {/* End Search Input */}
                        </div>

                        <div className="flex flex-row items-center justify-end gap-1">
                            <button type="button" className="md:hidden size-9.5 relative inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none">
                                <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                                <span className="sr-only">Search</span>
                            </button>
                            

                            <Link to="/employer/notification" className="size-9.5 relative inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none">
                                <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" /></svg>
                                <span className="sr-only">Notifications</span>
                            </Link>

                            <button type="button" className="size-9.5 relative inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none">
                                <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
                                <span className="sr-only">Activity</span>
                            </button>

                            {/* Dropdown */}
                            <div className="hs-dropdown [--placement:bottom-right] relative inline-flex">
                                <button id="hs-dropdown-account" type="button" className="size-9.5 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 focus:outline-hidden disabled:opacity-50 disabled:pointer-events-none" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                    <img className="shrink-0 size-9.5 rounded-full" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Avatar" />
                                </button>

                                <div className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-white shadow-md rounded-lg mt-2 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full" role="menu" aria-orientation="vertical" aria-labelledby="hs-dropdown-account">
                                    <div className="py-3 px-5 bg-gray-100 rounded-t-lg">
                                        <p className="text-sm text-gray-500">Signed in as</p>
                                        <p className="text-sm font-medium text-gray-800">james@site.com</p>
                                    </div>
                                    <div className="p-1.5 space-y-0.5">
                                        <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100" to="/employer/notification">
                                            <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" /></svg>
                                            Notifications
                                        </Link>
                                        
                                        {/* View Profile */}
                                        <Link
                                            className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100"
                                            to="/employer/view-own-profile"
                                        >
                                            {/* User Icon */}
                                            <svg
                                                className="shrink-0 h-6 w-6"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    d="M5.121 17.804A9 9 0 1118.879 6.196 9 9 0 015.12 17.804z"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M19.4 20.8a7.5 7.5 0 00-14.8 0"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                            Profile
                                        </Link>

                                        {/* Update Profile */}
                                        <Link
                                            className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100"
                                            to="/employer/update-profile"
                                        >
                                            {/* Pencil Icon */}
                                            <svg
                                                className="shrink-0 h-6 w-6"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    d="M15.232 5.232l3.536 3.536M9 11l6-6L20 8l-6 6-5 1 1-5z"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                            Update Profile
                                        </Link>

                                        {/* Log Out */}
                                        <Link
                                            className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100"
                                            to="/"
                                        >
                                            {/* Logout Icon */}
                                            <svg
                                                className="shrink-0 h-6 w-6"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h6a2 2 0 012 2v1"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                            Log Out
                                        </Link>

                                    </div>
                                </div>
                            </div>
                            {/* End Dropdown */}
                        </div>
                    </div>
                </nav>
            </header>
            {/* ========== END HEADER ========== */}

            {/* ========== MAIN CONTENT ========== */}
            <div className="-mt-px">
                {/* Breadcrumb */}
                <div className="sticky top-0 inset-x-0 z-20 bg-white border-y border-gray-200 px-4 sm:px-6 lg:px-8 lg:hidden">
                    <div className="flex items-center py-2">
                        {/* Navigation Toggle */}
                        <button type="button" className="size-8 flex justify-center items-center gap-x-2 border border-gray-200 text-gray-800 hover:text-gray-500 rounded-lg focus:outline-hidden focus:text-gray-500 disabled:opacity-50 disabled:pointer-events-none" aria-haspopup="dialog" aria-expanded="false" aria-controls="hs-application-sidebar" aria-label="Toggle navigation" data-hs-overlay="#hs-application-sidebar">
                            <span className="sr-only">Toggle Navigation</span>
                            <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" /><path d="M15 3v18" /><path d="m8 9 3 3-3 3" /></svg>
                        </button>
                        {/* End Navigation Toggle */}

                        {/* Breadcrumb */}
                        <ol className="ms-3 flex items-center whitespace-nowrap">
                            <li className="flex items-center text-sm text-gray-800">
                                Application Layout
                                <svg className="shrink-0 mx-3 overflow-visible size-2.5 text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </li>
                            <li className="text-sm font-bold text-gray-800 truncate" aria-current="page">
                                Dashboard
                            </li>
                        </ol>
                        {/* End Breadcrumb */}
                    </div>
                </div>
                {/* End Breadcrumb */}
            </div>

            {/* Sidebar */}
            <div id="hs-application-sidebar" className="hs-overlay  [--auto-close:lg]
  hs-overlay-open:translate-x-0
  -translate-x-full transition-all duration-300 transform
  w-65 h-full
  hidden
  fixed inset-y-0 start-0 z-60
  bg-white border-e border-gray-200
  lg:block lg:translate-x-0 lg:end-auto lg:bottom-0
 " role="dialog" tabindex="-1" aria-label="Sidebar">
                <div className="relative flex flex-col h-full max-h-full">
                    <div className="px-6 pt-4 flex items-center">
                        {/* Logo */}
                        <Link to="/employer/dashboard" className="flex-none rounded-xl text-xl inline-block font-semibold focus:outline-hidden focus:opacity-80" href="#" aria-label="Preline">
                            <h1 className="text-3xl font-extrabold italic text-gray-800 tracking-tight">
                                <span className="text-indigo-600">Freelance</span>
                                <span className="text-pink-500">Fusion</span>
                            </h1>

                        </Link>
                        {/* End Logo */}

                        <div className="hidden lg:block ms-2">

                        </div>
                    </div>

                    {/* Content */}
                    <div className="h-full overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300">
                        <nav className="hs-accordion-group p-3 w-full flex flex-col flex-wrap" data-hs-accordion-always-open>
                            <ul className="flex flex-col space-y-1">
                                <li>
                                    <Link  className="flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100" to="/employer/dashboard">
                                        <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
                                        Dashboard
                                    </Link>
                                </li>



                                <li>
                                    <Link
                                        className="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100"
                                        to="/employer/add-project"
                                    >
                                        <svg
                                            className="shrink-0 h-6 w-6"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M12 4v16m8-8H4"
                                            />
                                        </svg>
                                        Add Project
                                    </Link>
                                </li>



                                {/* Pending Payment */}
                                <li>
                                    <Link
                                        className="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100"
                                        to="/employer/make-payment"
                                    >
                                        {/* Credit Card Icon */}
                                        <svg
                                            className="shrink-0 h-6 w-6"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <rect x="1" y="4" width="22" height="16" rx="2" ry="2" strokeWidth="2" />
                                            <path d="M1 10h22" strokeWidth="2" />
                                        </svg>
                                        Pending Payment
                                    </Link>
                                </li>

                                {/* Pending Contracts */}
                                <li>
                                    <Link
                                        className="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100"
                                        to="/employer/pending-contracts"
                                    >
                                        {/* Clock Icon */}
                                        <svg
                                            className="shrink-0 h-6 w-6"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <circle cx="12" cy="12" r="10" strokeWidth="2" />
                                            <path d="M12 6v6l4 2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        Pending Contracts
                                    </Link>
                                </li>

                                {/* View All Contracts */}
                                <li>
                                    <Link
                                        className="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100"
                                        to="/employer/view-all-contracts"
                                    >
                                        {/* Folder Icon */}
                                        <svg
                                            className="shrink-0 h-6 w-6"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                d="M3 7a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                        View All Contracts
                                    </Link>
                                </li>

                                {/* View All Payments */}
                                <li>
                                    <Link
                                        className="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100"
                                        to="/employer/view-all-payments"
                                    >
                                        {/* Currency Dollar Icon */}
                                        <svg
                                            className="shrink-0 h-6 w-6"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path d="M12 2v4m0 12v4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        View All Payments
                                    </Link>
                                </li>

                                {/* All Projects */}
                                <li>
                                    <Link
                                        className="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100"
                                        to="/employer/view-all-own-project"
                                    >
                                        {/* Briefcase Icon */}
                                        <svg
                                            className="shrink-0 h-6 w-6"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <rect x="2" y="7" width="20" height="14" rx="2" ry="2" strokeWidth="2" />
                                            <path d="M16 3h-8a2 2 0 0 0-2 2v2h12V5a2 2 0 0 0-2-2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        All Projects
                                    </Link>
                                </li>

                                {/* All Applications */}
                                <li>
                                    <Link
                                        className="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100"
                                        to="/employer/employer-view-application"
                                    >
                                        {/* Clipboard List Icon */}
                                        <svg
                                            className="shrink-0 h-6 w-6"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <rect x="9" y="3" width="6" height="4" rx="1" ry="1" strokeWidth="2" />
                                            <path d="M9 11h6M9 15h6" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                        All Applications
                                    </Link>
                                </li>

                                {/* Approved Contracts */}
                                <li>
                                    <Link
                                        className="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100"
                                        to="/employer/approved-contracts"
                                    >
                                        {/* Check Circle Icon */}
                                        <svg
                                            className="shrink-0 h-6 w-6"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <circle cx="12" cy="12" r="10" strokeWidth="2" />
                                            <path d="M9 12l2 2 4-4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        Approved Contracts
                                    </Link>
                                </li>

                                {/* Chat */}
                                <li>
                                    <Link
                                        className="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100"
                                        to="/employer/messages"
                                    >
                                        {/* Chat Bubble Icon */}
                                        <svg
                                            className="shrink-0 h-6 w-6"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 0 1-4.255-.89L3 20l1.11-4.054A7.966 7.966 0 0 1 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                        Chat
                                    </Link>
                                </li>

                                {/* Review */}
                                <li>
                                    <Link
                                        className="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100"
                                        to="/employer/review"
                                    >
                                        {/* Star Icon */}
                                        <svg
                                            className="shrink-0 h-6 w-6"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 0 0 .95.69h4.163c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 0 0-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.538 1.118l-3.37-2.448a1 1 0 0 0-1.175 0l-3.37 2.448c-.783.57-1.838-.197-1.538-1.118l1.287-3.957a1 1 0 0 0-.364-1.118L2.01 9.384c-.783-.57-.38-1.81.588-1.81h4.163a1 1 0 0 0 .95-.69l1.286-3.957z"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                        Review
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    {/* End Content */}
                </div>
            </div>
            {/* End Sidebar */}

            {/* Content */}
            <div className="w-full lg:ps-64">
                <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                    {/* your content goes here ... */}

                    <Outlet />
                </div>
            </div>
            {/* End Content */}
            {/* ========== END MAIN CONTENT ========== */}
        </>
    );
};
export default EmployerLayout;