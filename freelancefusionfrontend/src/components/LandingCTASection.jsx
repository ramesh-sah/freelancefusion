import React from 'react';

const LandingCTASection = () => {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-white via-purple-800 to-teal-900 py-24 px-4 sm:px-6 lg:px-8">
            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9Im5vbmUiLz48ZyBmaWx0ZXI9InVybCgjYSkiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNGRkYiLz48L2c+PGZpbHRlciBpZD0iYSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9Ii43Ii8+PC9maWx0ZXI+PC9zdmc+')]"></div>

            <div className="max-w-7xl mx-auto text-center">
                <div className="relative space-y-8">
                    {/* Headline with animated gradient */}
                    <h2 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
                        <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-shift">
                            Become a Code Pioneer
                        </span>
                        <br />
                        <span className="mt-4 block text-3xl font-medium text-cyan-100">
                            Shape the Future of Open Source
                        </span>
                    </h2>

                    {/* Community Stats */}
                    <div className="flex flex-wrap justify-center gap-8 text-white">
                        <div className="p-4 bg-white/10 rounded-xl backdrop-blur-lg">
                            <div className="text-3xl font-bold">1.2M+</div>
                            <div className="text-sm">Monthly Downloads</div>
                        </div>
                        <div className="p-4 bg-white/10 rounded-xl backdrop-blur-lg">
                            <div className="text-3xl font-bold">4.8★</div>
                            <div className="text-sm">Community Rating</div>
                        </div>
                        <div className="p-4 bg-white/10 rounded-xl backdrop-blur-lg">
                            <div className="text-3xl font-bold">850+</div>
                            <div className="text-sm">Active Contributors</div>
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <a
                            href="#contribute"
                            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-green-500 to-cyan-600 rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
                        >
                            🌟 Contribute Now
                        </a>
                        <a
                            href="#docs"
                            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white border-2 border-cyan-300 rounded-xl backdrop-blur-lg hover:bg-cyan-400/10 transition-all duration-300 hover:scale-105"
                        >
                            📚 View Documentation
                        </a>
                    </div>

                    {/* Value Proposition */}
                    <div className="grid md:grid-cols-3 gap-8 pt-12 text-left">
                        <div className="p-6 bg-white/5 rounded-xl backdrop-blur-lg">
                            <div className="text-cyan-400 text-2xl mb-4">🚀</div>
                            <h3 className="text-xl font-semibold text-white mb-2">Build Your Reputation</h3>
                            <p className="text-cyan-100">Gain recognition in the developer community</p>
                        </div>
                        <div className="p-6 bg-white/5 rounded-xl backdrop-blur-lg">
                            <div className="text-green-400 text-2xl mb-4">🧠</div>
                            <h3 className="text-xl font-semibold text-white mb-2">Learn & Grow</h3>
                            <p className="text-cyan-100">Collaborate with top developers worldwide</p>
                        </div>
                        <div className="p-6 bg-white/5 rounded-xl backdrop-blur-lg">
                            <div className="text-purple-400 text-2xl mb-4">❤️</div>
                            <h3 className="text-xl font-semibold text-white mb-2">Make an Impact</h3>
                            <p className="text-cyan-100">Your code powers thousands of applications</p>
                        </div>
                    </div>

                    {/* Open Source Badge */}
                    <div className="pt-8">
                        <div className="inline-flex items-center bg-black/30 px-6 py-3 rounded-full border border-cyan-400/30">
                            <span className="text-cyan-400 mr-2">💻</span>
                            <span className="text-white">100% Open Source • Apache-2.0 License</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LandingCTASection;