import React from 'react';

function LandingTestimonialsSection() {
    return (
        <section className="relative mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="mb-16 text-center">
                <h2 className="text-4xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-gray-800 to-gray-700 bg-clip-text text-transparent">
                    Trusted by Innovators
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-xl text-gray-600 dark:text-gray-300">
                    Join thousands of professionals transforming their workflow
                </p>
            </div>

            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                {[
                    {
                        name: "Jane Cooper",
                        role: "CEO at TechNova",
                        image: "https://randomuser.me/api/portraits/women/54.jpg",
                        text: "FreelanceFusion revolutionized our hiring process. The talent pool quality is unmatched.",
                        stats: "75% faster hiring"
                    },
                    {
                        name: "Emily Smith",
                        role: "Lead Developer",
                        image: "https://randomuser.me/api/portraits/women/30.jpg",
                        text: "The escrow system and milestone tracking brought peace of mind to our remote collaborations.",
                        stats: "95% project success rate"
                    },
                    {
                        name: "Sarah Brown",
                        role: "CTO at CodeCraft",
                        image: "https://randomuser.me/api/portraits/women/90.jpg",
                        text: "Integration with our existing tools was seamless. The API documentation is exceptional.",
                        stats: "40% efficiency boost"
                    },
                    {
                        name: "James White",
                        role: "Product Manager",
                        image: "https://randomuser.me/api/portraits/men/90.jpg",
                        text: "Real-time analytics helped us optimize our freelance workforce like never before.",
                        stats: "60% cost reduction"
                    }
                ].map((testimonial, index) => (
                    <div
                        key={index}
                        className="group relative overflow-hidden rounded-2xl bg-white/90 backdrop-blur-lg p-8 shadow-[0_8px_32px_rgba(0,0,0,0.05)] transition-all duration-300 hover:shadow-xl hover:-translate-y-2 dark:bg-gray-800/80 dark:shadow-none"
                    >
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        {/* Content */}
                        <div className="relative space-y-6">
                            {/* Testimonial Text */}
                            <div className="space-y-4">
                                <p className="text-2xl font-bold text-gray-800 dark:text-white">
                                    {testimonial.stats}
                                </p>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    {testimonial.text}
                                </p>
                            </div>

                            {/* Author */}
                            <div className="flex items-center gap-4 border-t border-gray-100 pt-6 dark:border-gray-700">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="h-14 w-14 rounded-full border-2 border-white shadow-lg"
                                />
                                <div>
                                    <p className="font-semibold text-gray-800 dark:text-white">
                                        {testimonial.name}
                                    </p>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        {testimonial.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Floating CTA */}
            <div className="mt-16 text-center animate-float">
                <p className="inline-flex items-center rounded-full bg-white px-8 py-3 text-gray-600 shadow-lg ring-1 ring-gray-900/5 dark:bg-gray-800 dark:text-gray-300">
                    <span className="mr-2">⭐</span>
                    Trusted by 50,000+ professionals worldwide
                </p>
            </div>
        </section>
    );
}

export default LandingTestimonialsSection;