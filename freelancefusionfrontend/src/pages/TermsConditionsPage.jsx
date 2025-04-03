import React from 'react';
import { ChevronRight } from 'react-feather';

export default function TermsConditionsPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="py-20 px-4 bg-black text-white">
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-4xl font-bold mb-4">
                        FreelanceFusion Terms &amp; Conditions
                    </h1>
                    <p className="text-xl text-gray-300">
                        Your guide to using our remote job portal responsibly
                    </p>
                </div>
            </section>

            {/* Table of Contents */}
            <div className="max-w-6xl mx-auto px-4 py-8">
                <div className="bg-gray-50 border border-gray-200 rounded-lg shadow-sm p-6">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">
                        Quick Navigation
                    </h2>
                    <div className="grid gap-3">
                        {[
                            { label: 'Introduction', id: 'introduction' },
                            { label: 'User Obligations', id: 'user-obligations' },
                            { label: 'Payment Terms', id: 'payment-terms' },
                            { label: 'Intellectual Property', id: 'intellectual-property' },
                            { label: 'Termination', id: 'termination' },
                            { label: 'Disclaimer', id: 'disclaimer' },
                            { label: 'Governing Law', id: 'governing-law' },
                            { label: 'Contact', id: 'contact' },
                        ].map((item, index) => (
                            <a
                                key={index}
                                href={`#${item.id}`}
                                className="flex items-center justify-between p-3 border border-gray-200 rounded-md hover:bg-gray-100 transition-colors"
                            >
                                <span className="text-gray-900 font-medium">
                                    {item.label}
                                </span>
                                <ChevronRight className="w-5 h-5 text-gray-600" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto px-4 py-16 text-gray-800">
                {/* 1. Introduction */}
                <section id="introduction" className="mb-12">
                    <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
                    <p className="leading-relaxed">
                        Welcome to FreelanceFusion, the premier online remote job portal that connects talented professionals with businesses worldwide. By accessing and using our platform, you agree to abide by these Terms &amp; Conditions. Please read them carefully.
                    </p>
                </section>

                {/* 2. User Obligations */}
                <section id="user-obligations" className="mb-12">
                    <h2 className="text-2xl font-bold mb-4">2. User Obligations</h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Provide accurate and complete registration information.</li>
                        <li>Safeguard your account details and login credentials.</li>
                        <li>Use the platform only for lawful purposes and in compliance with applicable laws.</li>
                        <li>Respect the rights and intellectual property of others.</li>
                    </ul>
                </section>

                {/* 3. Payment Terms */}
                <section id="payment-terms" className="mb-12">
                    <h2 className="text-2xl font-bold mb-4">3. Payment Terms</h2>
                    <p className="leading-relaxed">
                        FreelanceFusion acts as an intermediary between clients and freelancers. All payment processes, service fees, and associated terms are clearly outlined during transactions. Please note that once services are rendered, certain fees may be non-refundable.
                    </p>
                </section>

                {/* 4. Intellectual Property */}
                <section id="intellectual-property" className="mb-12">
                    <h2 className="text-2xl font-bold mb-4">4. Intellectual Property</h2>
                    <p className="leading-relaxed">
                        All content on FreelanceFusion – including text, graphics, logos, and images – is owned by FreelanceFusion or its licensors. You are granted a limited, non-exclusive license to use the platform for its intended purpose. Unauthorized use or reproduction of any materials is strictly prohibited.
                    </p>
                </section>

                {/* 5. Termination */}
                <section id="termination" className="mb-12">
                    <h2 className="text-2xl font-bold mb-4">5. Termination</h2>
                    <p className="leading-relaxed">
                        We reserve the right to suspend or terminate your access to FreelanceFusion at any time, without prior notice, if you violate these Terms &amp; Conditions or engage in fraudulent or harmful activities.
                    </p>
                </section>

                {/* 6. Disclaimer and Limitation of Liability */}
                <section id="disclaimer" className="mb-12">
                    <h2 className="text-2xl font-bold mb-4">6. Disclaimer and Limitation of Liability</h2>
                    <p className="leading-relaxed">
                        FreelanceFusion provides its services on an "as is" basis without any warranties of any kind. Under no circumstances will FreelanceFusion be liable for any indirect, incidental, or consequential damages arising from the use of our platform.
                    </p>
                </section>

                {/* 7. Governing Law and Dispute Resolution */}
                <section id="governing-law" className="mb-12">
                    <h2 className="text-2xl font-bold mb-4">7. Governing Law and Dispute Resolution</h2>
                    <p className="leading-relaxed">
                        These Terms &amp; Conditions are governed by the laws applicable in the jurisdiction where FreelanceFusion operates. Any disputes that arise in connection with these terms will be resolved through binding arbitration.
                    </p>
                </section>

                {/* 8. Contact Information */}
                <section id="contact" className="mb-12">
                    <h2 className="text-2xl font-bold mb-4">8. Contact Information</h2>
                    <p className="leading-relaxed">
                        If you have any questions or concerns regarding these Terms &amp; Conditions, please contact our support team at{' '}
                        <a
                            href="mailto:support@freelancefusion.com"
                            className="text-black underline hover:text-gray-600 transition-colors"
                        >
                            support@freelancefusion.com
                        </a>.
                    </p>
                </section>
            </div>
        </div>
    );
}
