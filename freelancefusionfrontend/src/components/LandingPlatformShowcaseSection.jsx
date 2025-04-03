import React from 'react';

const UserTypeCard = ({ icon, title, description }) => (
    <div className="group p-6 bg-white/95 backdrop-blur-lg border border-gray-200/50 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="text-5xl mb-5 text-gray-700 transition-all group-hover:text-blue-600">{icon}</div>
        <h3 className="text-2xl font-bold text-gray-800 mb-3 bg-gradient-to-r from-gray-800 to-gray-700 bg-clip-text text-transparent">
            {title}
        </h3>
        <p className="text-gray-600 text-base leading-relaxed">{description}</p>
    </div>
);

const PlatformAdvantage = ({ children }) => (
    <div className="flex items-center space-x-3 p-3 hover:bg-white/50 rounded-xl transition-all duration-200">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600/10 text-blue-600">
            ✓
        </span>
        <span className="text-gray-700 font-medium">{children}</span>
    </div>
);

export const LandingPlatformShowcaseSection = () => {
    return (
        <section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 py-24 px-4 sm:px-6 lg:px-8">
            {/* Animated texture overlay */}
            <div className="absolute inset-0 opacity-15 animate-texture-shift bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9Im5vbmUiLz48ZyBmaWx0ZXI9InVybCgjYSkiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNGRkYiLz48L2c+PGZpbHRlciBpZD0iYSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjEuNSIvPjwvZmlsdGVyPjwvc3ZnPg==')]"></div>

            <div className="mx-auto max-w-7xl flex flex-col lg:flex-row-reverse gap-16 items-center">
                {/* Image Section */}
                <div className="w-full lg:w-1/2 aspect-video lg:aspect-[3/4] overflow-hidden rounded-[2rem] shadow-2xl border border-gray-200/30">
                    <img
                        className="h-full w-full object-cover object-left-top transition-transform duration-700 hover:scale-105"
                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                        alt="Platform interface"
                        loading="lazy"
                    />
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-1/2 space-y-12">
                    <header className="space-y-6">
                        <h1 className="text-5xl sm:text-6xl font-bold leading-tight">
                            <span className="bg-gradient-to-r from-blue-600 to-gray-800 bg-clip-text text-transparent">
                                Fusion Platform
                            </span>
                            <br />
                            <span className="text-gray-800">Blockchain-Powered Workforce</span>
                        </h1>

                        <p className="text-xl text-gray-700 leading-relaxed">
                            The <strong className="font-semibold text-gray-800">next-generation ecosystem</strong> connecting<br />
                            <span className="text-blue-600 font-medium">Businesses</span>,
                            <span className="text-gray-800 font-medium"> Talent</span>, and
                            <span className="text-blue-600 font-medium"> Administrators</span><br />
                            through decentralized smart contracts and instant settlement.
                        </p>
                    </header>

                    {/* User Roles Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        <UserTypeCard
                            icon="🌐"
                            title="Enterprise"
                            description="Managed corporate accounts with AI-powered matching"
                        />
                        <UserTypeCard
                            icon="🤝"
                            title="Clients"
                            description="Escrow protection & milestone tracking"
                        />
                        <UserTypeCard
                            icon="💻"
                            title="Experts"
                            description="Portfolio showcase & instant payments"
                        />
                    </div>

                    {/* Platform Features */}
                    <div className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <PlatformAdvantage>Smart Contract Automation</PlatformAdvantage>
                            <PlatformAdvantage>Multi-chain Payments</PlatformAdvantage>
                            <PlatformAdvantage>Real-time Analytics</PlatformAdvantage>
                            <PlatformAdvantage>Enterprise Security</PlatformAdvantage>
                        </div>

                        {/* CTA Section */}
                        <div className="pt-6 space-y-5">
                            <a
                                href="#signup"
                                className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white bg-gradient-to-r from-blue-600 to-gray-800 rounded-2xl border border-gray-300/30 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group"
                            >
                                <span>Start Free Trial</span>
                                <span className="ml-3 transition-transform group-hover:translate-x-1">→</span>
                            </a>
                            <p className="text-sm text-gray-600 italic">
                                Join 50,000+ professionals across 150 countries
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};