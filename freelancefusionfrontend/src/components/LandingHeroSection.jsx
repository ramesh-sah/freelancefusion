import React from "react";

const LandingHeroSection = () => {
    return (
        <section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 min-h-screen flex items-center">
            <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
                <div className="grid items-center gap-16 lg:grid-cols-2">
                    {/* Text Content */}
                    <div className="space-y-8">
                        <div className="space-y-6">
                            <span className="inline-block animate-fade-in-up opacity-0 animation-delay-300 rounded-full bg-white px-4 py-2 text-sm font-medium shadow-lg ring-1 ring-gray-900/5">
                                🚀 Trusted by 50k+ Professionals
                            </span>

                            <h1 className="text-4xl font-bold tracking-tight animate-fade-in-up opacity-0 animation-delay-500 sm:text-5xl lg:text-6xl">
                                <span className="block text-gray-900">Find Top Talent for</span>
                                <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent bg-300% animate-gradient-shift">
                                    Your Next Project
                                </span>
                            </h1>

                            <p className="text-lg text-gray-600 animate-fade-in-up opacity-0 animation-delay-700 sm:text-xl">
                                Connect with verified freelancers in development, design, and marketing.
                                Secure collaboration with smart contracts and escrow payments.
                            </p>
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                            <a
                                href="#"
                                className="inline-flex animate-fade-in-up opacity-0 animation-delay-900 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
                            >
                                Hire Talent Now
                            </a>
                            <a
                                href="#"
                                className="inline-flex animate-fade-in-up opacity-0 animation-delay-1000 items-center justify-center rounded-xl bg-white px-8 py-4 text-lg font-semibold text-gray-900 shadow-lg ring-1 ring-gray-900/5 transition-all hover:scale-105 hover:shadow-xl"
                            >
                                Browse Projects
                            </a>
                        </div>

                        {/* Stats */}
                        <div className="mt-12 grid animate-fade-in-up opacity-0 animation-delay-1200 grid-cols-2 gap-8 sm:grid-cols-3">
                            {[
                                { value: "250k+", label: "Projects Completed" },
                                { value: "4.9/5", label: "Avg. Rating" },
                                { value: "24h", label: "Avg. Delivery" }
                            ].map((stat, index) => (
                                <div
                                    key={index}
                                    className="rounded-xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5 transition-all hover:scale-105"
                                >
                                    <p className="text-3xl font-bold text-gray-900 sm:text-4xl">
                                        {stat.value}
                                    </p>
                                    <p className="mt-2 text-gray-600">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="relative overflow-hidden rounded-3xl shadow-2xl animate-float">
                        <img
                            src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80"
                            alt="Team collaboration"
                            className="h-full w-full object-cover"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-gray-100/30" />

                        {/* Floating Badge */}
                        <div className="absolute bottom-6 left-6 right-6 sm:left-auto sm:right-6 animate-float">
                            <div className="inline-flex items-center rounded-full bg-white px-6 py-3 shadow-lg ring-1 ring-gray-900/5">
                                <span className="mr-3 text-2xl">💼</span>
                                <div>
                                    <p className="text-sm font-medium text-gray-900">
                                        Featured Project
                                    </p>
                                    <p className="text-xs text-gray-600">Web Development</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LandingHeroSection;