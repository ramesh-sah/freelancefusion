import React from 'react';

const TeamMemberCard = ({ member }) => (
    <div className="group relative overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 dark:bg-gray-800">
        <img
            className="h-80 w-full object-cover transition-opacity duration-300 group-hover:opacity-90"
            src={member.image}
            alt={member.name}
        />

        <div className="absolute inset-0 flex flex-col items-center justify-end bg-gradient-to-t from-black/80 p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="text-center">
                <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                <p className="mt-1 text-sm text-gray-200">{member.position}</p>
            </div>

            <div className="mt-4 flex space-x-4">
                {member.socials.map((social, index) => (
                    <a
                        key={index}
                        href={social.url}
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:bg-blue-600 hover:scale-110"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <social.icon className="h-5 w-5 text-white" />
                    </a>
                ))}
            </div>
        </div>
    </div>
);

const SocialIcon = ({ children }) => (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        {children}
    </svg>
);

export const LandingTeamSection = () => {
    const teamMembers = [
        {
            name: "Oliver Aguilerra",
            position: "Product Manager",
            image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
            socials: [
                {
                    url: "#",
                    icon: () => (
                        <SocialIcon>
                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                        </SocialIcon>
                    )
                },
                {
                    url: "#",
                    icon: () => (
                        <SocialIcon>
                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" />
                        </SocialIcon>
                    )
                }
            ]
        },
        // Add other team members following the same structure
        {
            name: "Oliver Aguilerra",
            position: "Product Manager",
            image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
            socials: [
                {
                    url: "#",
                    icon: () => (
                        <SocialIcon>
                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                        </SocialIcon>
                    )
                },
                {
                    url: "#",
                    icon: () => (
                        <SocialIcon>
                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" />
                        </SocialIcon>
                    )
                }
            ]
        }, {
            name: "Oliver Aguilerra",
            position: "Product Manager",
            image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
            socials: [
                {
                    url: "#",
                    icon: () => (
                        <SocialIcon>
                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                        </SocialIcon>
                    )
                },
                {
                    url: "#",
                    icon: () => (
                        <SocialIcon>
                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" />
                        </SocialIcon>
                    )
                }
            ]
        }, {
            name: "Oliver Aguilerra",
            position: "Product Manager",
            image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
            socials: [
                {
                    url: "#",
                    icon: () => (
                        <SocialIcon>
                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                        </SocialIcon>
                    )
                },
                {
                    url: "#",
                    icon: () => (
                        <SocialIcon>
                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" />
                        </SocialIcon>
                    )
                }
            ]
        }, {
            name: "Oliver Aguilerra",
            position: "Product Manager",
            image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
            socials: [
                {
                    url: "#",
                    icon: () => (
                        <SocialIcon>
                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                        </SocialIcon>
                    )
                },
                {
                    url: "#",
                    icon: () => (
                        <SocialIcon>
                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" />
                        </SocialIcon>
                    )
                }
            ]
        }, {
            name: "Oliver Aguilerra",
            position: "Product Manager",
            image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
            socials: [
                {
                    url: "#",
                    icon: () => (
                        <SocialIcon>
                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                        </SocialIcon>
                    )
                },
                {
                    url: "#",
                    icon: () => (
                        <SocialIcon>
                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" />
                        </SocialIcon>
                    )
                }
            ]
        }, {
            name: "Oliver Aguilerra",
            position: "Product Manager",
            image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
            socials: [
                {
                    url: "#",
                    icon: () => (
                        <SocialIcon>
                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                        </SocialIcon>
                    )
                },
                {
                    url: "#",
                    icon: () => (
                        <SocialIcon>
                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" />
                        </SocialIcon>
                    )
                }
            ]
        }, {
            name: "Oliver Aguilerra",
            position: "Product Manager",
            image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
            socials: [
                {
                    url: "#",
                    icon: () => (
                        <SocialIcon>
                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                        </SocialIcon>
                    )
                },
                {
                    url: "#",
                    icon: () => (
                        <SocialIcon>
                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" />
                        </SocialIcon>
                    )
                }
            ]
        },
    ];

    return (
        <div className="bg-white py-24 px-4 sm:px-6 lg:px-8 dark:bg-WHIT-900">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <span className="inline-block mb-4 text-5xl font-semibold text-blue-600 uppercase tracking-widest">
                        Our Core Team
                    </span>
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                        Meet the Leadership
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        A dedicated team of industry experts driving innovation and excellence
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {teamMembers.map((member, index) => (
                        <TeamMemberCard key={index} member={member} />
                    ))}
                </div>
            </div>
        </div>
    );
};