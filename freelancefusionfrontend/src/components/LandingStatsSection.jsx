import React, { useState, useEffect, useRef } from 'react';

const LandingStatsSection = () => {
    const [projectsCount, setProjectsCount] = useState(0);
    const [clientsCount, setClientsCount] = useState(0);
    const [freelancersCount, setFreelancersCount] = useState(0);
    const intervals = useRef([]);

    const stats = [
        { id: 1, target: 4670, state: projectsCount, setter: setProjectsCount, suffix: '+' },
        { id: 2, target: 80000, state: clientsCount, setter: setClientsCount, suffix: '+' },
        { id: 3, target: 100, state: freelancersCount, setter: setFreelancersCount, suffix: 'k+' }
    ];

    useEffect(() => {
        const animateCountUp = (targetValue, setter, suffix) => {
            let currentCount = 0;
            const increment = Math.ceil(targetValue / 200);

            const interval = setInterval(() => {
                currentCount += increment;
                if (currentCount >= targetValue) {
                    clearInterval(interval);
                    setter(`${targetValue}${suffix}`);
                } else {
                    setter(currentCount);
                }
            }, 10);

            intervals.current.push(interval);
        };

        stats.forEach(({ target, setter, suffix }) => {
            animateCountUp(target, setter, suffix);
        });

        return () => intervals.current.forEach(clearInterval);
    }, []);

    return (
        <section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 py-24">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header with animations */}
                <div className="max-w-4xl mx-auto text-center animate-fade-in-up opacity-0 animation-delay-300">
                    <h2 className="text-4xl font-bold text-gray-900">
                        Empowering <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent animate-gradient-shift bg-300%">Freelance Excellence</span>
                    </h2>
                    <p className="mt-4 text-xl text-gray-600 animation-delay-500">
                        Join our thriving community of top-tier professionals
                    </p>
                </div>

                {/* Stats Cards */}
                <div className="mt-12 animate-fade-in-up opacity-0 animation-delay-700">
                    <dl className="grid grid-cols-1 gap-8 sm:grid-cols-3">
                        {/* Projects Card */}
                        <div className="group relative bg-white rounded-2xl p-8 shadow-lg ring-1 ring-gray-900/5 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white to-gray-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                            <dt className="text-lg font-medium text-gray-700">
                                Projects Completed
                            </dt>
                            <dd className="mt-4 text-5xl font-bold text-blue-600">
                                {projectsCount}
                            </dd>
                            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 transition-all duration-300 group-hover:ring-blue-500/20" />
                        </div>

                        {/* Clients Card */}
                        <div className="group relative bg-white rounded-2xl p-8 shadow-lg ring-1 ring-gray-900/5 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white to-gray-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                            <dt className="text-lg font-medium text-gray-700">
                                Satisfied Clients
                            </dt>
                            <dd className="mt-4 text-5xl font-bold text-cyan-500">
                                {clientsCount}
                            </dd>
                            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 transition-all duration-300 group-hover:ring-cyan-500/20" />
                        </div>

                        {/* Freelancers Card */}
                        <div className="group relative bg-white rounded-2xl p-8 shadow-lg ring-1 ring-gray-900/5 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white to-gray-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                            <dt className="text-lg font-medium text-gray-700">
                                Expert Freelancers
                            </dt>
                            <dd className="mt-4 text-5xl font-bold text-purple-600">
                                {freelancersCount}
                            </dd>
                            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 transition-all duration-300 group-hover:ring-purple-500/20" />
                        </div>
                    </dl>
                </div>

                {/* Floating Badge */}
                <div className="mt-16 flex justify-center animate-float">
                    <div className="rounded-full bg-white px-8 py-4 shadow-xl ring-1 ring-gray-900/5 transition-all hover:scale-105">
                        <span className="text-gray-700">🚀 Trusted by Teams in </span>
                        <span className="font-medium text-blue-600">50+ Countries</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LandingStatsSection;