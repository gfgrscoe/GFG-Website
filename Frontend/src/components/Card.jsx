import React, { useState } from 'react';
import { Github, Linkedin, Instagram, Mail, Award } from 'lucide-react';

const Card = ({ member }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div 
            className="group relative h-full"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="absolute -inset-0.5 bg-linear-to-r from-gfg-green via-gfg-ocean to-gfg-blue rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:animate-pulse pointer-events-none"></div>
     
            <div className="relative h-full bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100">

                <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-gfg-green via-gfg-ocean to-gfg-navy pointer-events-none"></div>

                <div className="relative p-6 flex flex-col items-center">

                    <div className="relative mb-6 pointer-events-none">
               
                        <div className="absolute -inset-2">
                            <div className={`w-full h-full rounded-full bg-linear-to-r from-gfg-green via-gfg-ocean to-gfg-navy transition-all duration-1000 ${isHovered ? 'animate-spin' : ''}`} style={{ animationDuration: '3s' }}></div>
                        </div>

                        <div className="absolute -inset-1 bg-white rounded-full"></div>

                        <div className="relative w-32 h-32 rounded-full overflow-hidden ring-4 ring-white shadow-xl">
                            <img 
                                src={member.photo || 'https://via.placeholder.com/150'} 
                                alt={member.name}
                                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-125 group-hover:rotate-6"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-gfg-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <div className="absolute -top-2 -right-2 w-4 h-4 bg-gfg-accent-lime rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
                        <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-gfg-accent-orange rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                    <h3 className="font-sofia font-bold text-xl text-center text-gfg-black mb-2 group-hover:text-gfg-green transition-colors duration-300 px-2 pointer-events-none">
                        {member.name}
                    </h3>
                    <div className="mb-3 px-5 py-2 bg-linear-to-r from-gfg-green to-gfg-ocean rounded-full shadow-lg transform group-hover:scale-110 transition-transform duration-300 pointer-events-none">
                        <div className="flex items-center gap-2">
                            <Award className="w-4 h-4 text-white" />
                            <span className="font-sofia font-bold text-white text-sm whitespace-nowrap">
                                {member.position}
                            </span>
                        </div>
                    </div>

                    {member.tagline && (
                        <p className="font-source text-sm text-center text-gray-500 mb-4 italic px-2 line-clamp-2 min-h-[40px] pointer-events-none">
                            "{member.tagline}"
                        </p>
                    )}
                    <div className="w-16 h-0.5 bg-linear-to-r from-transparent via-gfg-green to-transparent mb-4 group-hover:w-24 transition-all duration-500 pointer-events-none"></div>
                    <div className="flex justify-center gap-2 flex-wrap relative z-20">
                        {member.github && (
                            <a
                                href={member.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative w-11 h-11 bg-gray-100 hover:bg-gray-900 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-125 hover:-translate-y-1 shadow-md hover:shadow-xl group/icon overflow-hidden cursor-pointer"
                                aria-label="GitHub"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div className="absolute inset-0 bg-linear-to-br from-gray-900 to-black opacity-0 group-hover/icon:opacity-100 transition-opacity pointer-events-none"></div>
                                <Github className="relative w-5 h-5 text-gray-700 group-hover/icon:text-white transition-colors z-10 pointer-events-none" />
                            </a>
                        )}
                        {member.linkedin && (
                            <a
                                href={member.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative w-11 h-11 bg-blue-100 hover:bg-blue-600 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-125 hover:-translate-y-1 shadow-md hover:shadow-xl group/icon overflow-hidden cursor-pointer"
                                aria-label="LinkedIn"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div className="absolute inset-0 bg-linear-to-br from-blue-600 to-blue-700 opacity-0 group-hover/icon:opacity-100 transition-opacity pointer-events-none"></div>
                                <Linkedin className="relative w-5 h-5 text-blue-700 group-hover/icon:text-white transition-colors z-10 pointer-events-none" />
                            </a>
                        )}
                        {member.instagram && (
                            <a
                                href={member.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative w-11 h-11 bg-pink-100 hover:bg-linear-to-br hover:from-pink-600 hover:to-purple-600 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-125 hover:-translate-y-1 shadow-md hover:shadow-xl group/icon overflow-hidden cursor-pointer"
                                aria-label="Instagram"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div className="absolute inset-0 bg-linear-to-br from-pink-600 via-purple-600 to-orange-500 opacity-0 group-hover/icon:opacity-100 transition-opacity pointer-events-none"></div>
                                <Instagram className="relative w-5 h-5 text-pink-700 group-hover/icon:text-white transition-colors z-10 pointer-events-none" />
                            </a>
                        )}
                        {member.email && (
                            <a
                                href={`mailto:${member.email}`}
                                className="relative w-11 h-11 bg-green-100 hover:bg-gfg-green rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-125 hover:-translate-y-1 shadow-md hover:shadow-xl group/icon overflow-hidden cursor-pointer"
                                aria-label="Email"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div className="absolute inset-0 bg-linear-to-br from-gfg-green to-gfg-ocean opacity-0 group-hover/icon:opacity-100 transition-opacity pointer-events-none"></div>
                                <Mail className="relative w-5 h-5 text-green-700 group-hover/icon:text-white transition-colors z-10 pointer-events-none" />
                            </a>
                        )}
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 w-20 h-20 bg-linear-to-tr from-gfg-green/10 to-transparent rounded-tr-full transform -translate-x-10 translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-16 h-16 bg-linear-to-bl from-gfg-ocean/10 to-transparent rounded-bl-full transform translate-x-8 -translate-y-8 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 pointer-events-none"></div>

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                    <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
            </div>
        </div>
    );
};

export default Card;