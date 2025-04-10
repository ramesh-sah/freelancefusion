import React from 'react';
import {

    ChevronRight,
    Shield,
    FileText,
    DollarSign,
    Users,
    Mail,
} from 'react-feather';
import LandingPageNavBar from '../components/LandingPageNavBar';
export default function PrivacyPolicyPage() {
    return (
        <>
            <LandingPageNavBar />  
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="py-20 px-4 bg-gradient-to-r from-gray-900 to-black" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1664575196644-808978af9b1f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}>
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-4xl font-bold mb-4 text-white">
                        FreelanceFusion Policies
                    </h1>
                    <p className="text-xl text-gray-300">
                        Transparent guidelines for our global community
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto px-4 py-16">
                {/* Table of Contents */}
                <div className="bg-white rounded-lg shadow-sm p-6 mb-12 border border-gray-200">
                    <h2 className="text-lg font-semibold mb-4 text-gray-900">
                        Quick Navigation
                    </h2>
                    <div className="grid gap-3">
                        {['Privacy', 'Terms', 'Refunds', 'Copyright', 'Community'].map(
                            (item, index) => (
                                <a
                                    key={index}
                                    href={`#${item.toLowerCase()}`}
                                    className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-md transition-colors border border-gray-200"
                                >
                                    <span className="text-gray-800">{item} Policy</span>
                                    <ChevronRight className="w-5 h-5 text-gray-600" />
                                </a>
                            )
                        )}
                    </div>
                </div>

                {/* Privacy Policy */}
                <div className="mb-12" id="privacy">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-3 bg-gray-100 text-gray-800 rounded-lg">
                            <Shield className="w-6 h-6" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900">Privacy Policy</h2>
                    </div>
                    <div className="prose max-w-none text-gray-600">
                        <h3 className="text-xl font-semibold text-gray-900">
                            Your Data Security Matters
                        </h3>
                        <p className="text-gray-600">Effective Date: January 1, 2024</p>
                        <ul className="list-disc pl-6 mt-4 space-y-2">
                            <li>
                                Information we collect (account data, payment details, project
                                information)
                            </li>
                            <li>
                                How we use your data (service improvement, communication,
                                analytics)
                            </li>
                            <li>Third-party sharing (only essential service providers)</li>
                            <li>Data retention policies (up to 5 years post-account closure)</li>
                            <li>GDPR &amp; CCPA compliance measures</li>
                        </ul>
                    </div>
                </div>

                {/* Terms of Service */}
                <div className="mb-12" id="terms">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-3 bg-gray-100 text-gray-800 rounded-lg">
                            <FileText className="w-6 h-6" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900">Terms of Service</h2>
                    </div>
                    <div className="prose max-w-none text-gray-600">
                        <h3 className="text-xl font-semibold text-gray-900">
                            Platform Usage Guidelines
                        </h3>
                        <ul className="list-disc pl-6 mt-4 space-y-2">
                            <li>User responsibilities and conduct</li>
                            <li>Payment terms and service fees</li>
                            <li>Dispute resolution process</li>
                            <li>Account termination conditions</li>
                            <li>Liability limitations</li>
                        </ul>
                    </div>
                </div>

                {/* Refund Policy */}
                <div className="mb-12" id="refunds">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-3 bg-gray-100 text-gray-800 rounded-lg">
                            <DollarSign className="w-6 h-6" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900">Refund Policy</h2>
                    </div>
                    <div className="prose max-w-none text-gray-600">
                        <h3 className="text-xl font-semibold text-gray-900">
                            Money-Back Guarantee
                        </h3>
                        <p className="text-gray-600">
                            We offer flexible refund options based on project status:
                        </p>
                        <table className="w-full mt-4 border-collapse">
                            <thead>
                                <tr className="border-b border-gray-200">
                                    <th className="text-left py-3 px-4 font-semibold text-gray-900">
                                        Situation
                                    </th>
                                    <th className="text-left py-3 px-4 font-semibold text-gray-900">
                                        Refund Eligibility
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-gray-200 hover:bg-gray-50">
                                    <td className="py-3 px-4">Uncompleted work</td>
                                    <td className="py-3 px-4">Full refund within 14 days</td>
                                </tr>
                                <tr className="border-b border-gray-200 hover:bg-gray-50">
                                    <td className="py-3 px-4">Disputed deliverables</td>
                                    <td className="py-3 px-4">Case-by-case review</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="py-3 px-4">Platform fees</td>
                                    <td className="py-3 px-4">Non-refundable</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Copyright Policy */}
                <div className="mb-12" id="copyright">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-3 bg-gray-100 text-gray-800 rounded-lg">
                            {/* Using a simple © symbol in place of an icon */}
                            <span className="text-xl font-bold">©</span>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900">
                            Copyright Policy
                        </h2>
                    </div>
                    <div className="prose max-w-none text-gray-600">
                        <h3 className="text-xl font-semibold text-gray-900">
                            Intellectual Property Protection
                        </h3>
                        <ul className="list-disc pl-6 mt-4 space-y-2">
                            <li>Ownership of delivered work</li>
                            <li>DMCA takedown procedures</li>
                            <li>Content licensing agreements</li>
                            <li>Prohibited content guidelines</li>
                        </ul>
                    </div>
                </div>

                {/* Community Guidelines */}
                <div className="mb-12" id="community">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-3 bg-gray-100 text-gray-800 rounded-lg">
                            <Users className="w-6 h-6" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900">
                            Community Guidelines
                        </h2>
                    </div>
                    <div className="prose max-w-none text-gray-600">
                        <h3 className="text-xl font-semibold text-gray-900">
                            Building a Professional Ecosystem
                        </h3>
                        <div className="grid gap-6 md:grid-cols-2 mt-6">
                            <div className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                                <h4 className="font-semibold mb-3 text-gray-900">For Clients</h4>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Clear project requirements</li>
                                    <li>Timely payments</li>
                                    <li>Respectful communication</li>
                                </ul>
                            </div>
                            <div className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                                <h4 className="font-semibold mb-3 text-gray-900">For Freelancers</h4>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Authentic portfolio</li>
                                    <li>Meeting deadlines</li>
                                    <li>Professional conduct</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Section */}
                <div className="mt-16 p-8 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="flex items-center gap-4 mb-4">
                        <Mail className="w-8 h-8 text-gray-800" />
                        <h2 className="text-xl font-bold text-gray-900">Policy Inquiries</h2>
                    </div>
                    <p className="text-gray-600">
                        Contact our legal team at{' '}
                        <a
                            href="mailto:legal@freelancefusion.com"
                            className="text-gray-900 underline hover:text-gray-700"
                        >
                            legal@freelancefusion.com
                        </a>
                    </p>
                    <p className="mt-2 text-sm text-gray-500">
                        Last Updated: January 15, 2024
                    </p>
                </div>
            </div>
        </div>
        </>
    );
}
