import React from 'react';
import { Briefcase, Globe, Award, Clock, Code, Users, Zap, DollarSign } from 'react-feather';
import LandingPageNavBar from '../components/LandingPageNavBar';


// Reusable Components
const JobCard = ({ title, type, location, tags, description }) => (
    <div className="group p-6 bg-white border border-gray-200 rounded-xl transition-all duration-300 hover:border-blue-500 hover:shadow-xl">
        <div className="flex justify-between items-start">
            <div>
                <h3 className="text-xl font-bold text-gray-900">{title}</h3>
                <div className="flex items-center gap-3 mt-2">
                    <span className="flex items-center text-sm text-gray-600">
                        <Briefcase className="w-4 h-4 mr-1" />
                        {type}
                    </span>
                    <span className="flex items-center text-sm text-gray-600">
                        <Globe className="w-4 h-4 mr-1" />
                        {location}
                    </span>
                </div>
            </div>
            <span className="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full">New</span>
        </div>
        <p className="mt-4 text-gray-600">{description}</p>
        <div className="mt-6 flex flex-wrap gap-2">
            {tags.map((tag, index) => (
                <span key={index} className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full">
                    {tag}
                </span>
            ))}
        </div>
        <button className="mt-6 px-6 py-2 text-white bg-blue-600 rounded-lg transition-all duration-300 hover:bg-blue-700 group-hover:shadow-lg">
            Apply Now
        </button>
    </div>
);

const BenefitCard = ({ icon, title, description }) => (
    <div className="p-6 bg-white border border-gray-200 rounded-xl transition-all duration-300 hover:border-blue-500">
        <div className="w-12 h-12 flex items-center justify-center bg-blue-100 text-blue-600 rounded-lg mb-4">
            {icon}
        </div>
        <h4 className="text-lg font-semibold text-gray-900 mb-2">{title}</h4>
        <p className="text-gray-600">{description}</p>
    </div>
);

// Main Careers Page
const CareersPage = () => {
    const jobOpenings = [
        {
            title: "Senior Frontend Developer",
            type: "Full-time",
            location: "Remote",
            tags: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
            description: "Lead the development of our client-facing dashboard and implement new features."
        },
        {
            title: "Blockchain Engineer",
            type: "Contract",
            location: "Global",
            tags: ["Solidity", "Smart Contracts", "Ethereum", "Web3"],
            description: "Build and optimize our decentralized payment infrastructure."
        },
        {
            title: "UX Designer",
            type: "Freelance",
            location: "Remote",
            tags: ["Figma", "User Research", "Prototyping", "UI/UX"],
            description: "Redesign our platform experience for better user engagement."
        }
    ];

    const benefits = [
        {
            icon: <Award className="w-6 h-6" />,
            title: "Professional Growth",
            description: "Annual learning budget and conference allowances"
        },
        {
            icon: <Clock className="w-6 h-6" />,
            title: "Flexible Hours",
            description: "Work when you're most productive with async collaboration"
        },
        {
            icon: <Code className="w-6 h-6" />,
            title: "Cutting-edge Tech",
            description: "Work with modern stack and open source projects"
        },
        {
            icon: <Users className="w-6 h-6" />,
            title: "Global Team",
            description: "Collaborate with top talent from 30+ countries"
        }
    ];

    return (

        <>
        
            <LandingPageNavBar />  
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="py-20 px-4 bg-gradient-to-r from-gray-900 to-blue-900 text-white">
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-4xl font-bold mb-6 sm:text-5xl">Shape the Future of Freelancing</h1>
                    <p className="text-xl text-gray-200 mb-8">Join our mission to empower 10M+ freelancers worldwide</p>
                    <div className="flex justify-center gap-4">
                        <button className="px-8 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
                            View Open Roles
                        </button>
                        <button className="px-8 py-3 border border-white rounded-lg hover:bg-white hover:text-gray-900 transition-colors">
                            Learn About Us
                        </button>
                    </div>
                </div>
            </section>

            {/* Open Positions */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Current Openings</h2>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {jobOpenings.map((job, index) => (
                            <JobCard key={index} {...job} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Join Us */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Why FreelanceFusion?</h2>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {benefits.map((benefit, index) => (
                            <BenefitCard key={index} {...benefit} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Values */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Core Values</h2>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <div className="p-6 bg-white rounded-xl border border-gray-200">
                            <Zap className="w-8 h-8 text-blue-600 mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Innovation First</h3>
                            <p className="text-gray-600">Pioneering new solutions for the freelance economy</p>
                        </div>
                        <div className="p-6 bg-white rounded-xl border border-gray-200">
                            <Users className="w-8 h-8 text-blue-600 mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Community Driven</h3>
                            <p className="text-gray-600">Empowering every member of our ecosystem</p>
                        </div>
                        <div className="p-6 bg-white rounded-xl border border-gray-200">
                            <DollarSign className="w-8 h-8 text-blue-600 mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Fair Economy</h3>
                            <p className="text-gray-600">Ensuring equitable opportunities for all</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Hiring Process */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Hiring Process</h2>
                    <div className="grid gap-8 md:grid-cols-4">
                        {['Application Review', 'Skills Assessment', 'Team Interview', 'Offer'].map((step, index) => (
                            <div key={index} className="text-center">
                                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                                    <span className="text-blue-600 font-bold">{index + 1}</span>
                                </div>
                                <h3 className="text-lg font-semibold">{step}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 px-4 bg-gray-900 text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6">Not Seeing Your Role?</h2>
                    <p className="text-gray-300 mb-8"> We`re always looking for exceptional talent. Send us your resume!</p>
                    <button className="px-8 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
                        Submit General Application
                    </button>
                </div>
            </section>
        </div>
        </>
    );
};

export default CareersPage;