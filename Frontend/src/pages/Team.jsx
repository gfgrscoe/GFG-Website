import React, { useEffect } from 'react';
import Card from '../components/Card.jsx';
import { Users, Award, Sparkles, Heart } from 'lucide-react';
import { facultyCoordinator, coreTeam, teamMembers } from '../utils/team.js';
import { Helmet } from 'react-helmet';

const Team = () => {

    <Helmet>
    <title>Team - GeeksforGeeks Student Chapter @ RSCOE</title>
    <meta name="description" content="Meet the passionate team behind the GeeksforGeeks Student Chapter at RSCOE. Discover our core committee, team leads, and members who drive innovation and organize exciting tech events." />
    </Helmet>

     useEffect(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, []);
  

    return (
        <div className="min-h-screen bg-linear-to-br from-white via-gfg-gray to-[#f1f8f5]">

            <section className="pt-32 pb-12 px-4 sm:px-6 relative overflow-hidden">
              
                <div className="absolute top-20 right-10 w-72 h-72 bg-gfg-green/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-10 left-10 w-96 h-96 bg-gfg-ocean/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-2 bg-gfg-green/10 px-4 py-2 rounded-full mb-6">
                        <Users className="w-5 h-5 text-gfg-green" />
                        <span className="font-source font-semibold text-gfg-green text-sm">Meet Our Team</span>
                    </div>

                    <h1 className="font-sofia font-bold text-4xl sm:text-5xl lg:text-6xl text-gfg-black mb-6 leading-tight">
                        The Minds Behind
                        <span className="block bg-linear-to-r from-gfg-green via-gfg-ocean to-gfg-navy bg-clip-text text-transparent">
                            GfG Student Chapter
                        </span>
                    </h1>

                    <p className="font-source text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                        Meet the passionate individuals driving innovation, organizing events, 
                        and building a thriving tech community at RSCOE.
                    </p>
                </div>
            </section>
{/* 
            <section className="py-12 px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="relative group">
                       
                        <div className="absolute -inset-1 bg-linear-to-r from-gfg-green via-gfg-ocean to-gfg-navy rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition duration-500"></div>

                       
                        <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                            <div className="aspect-video bg-linear-to-br from-gfg-gray to-white flex items-center justify-center">
        
                                <div className="text-center p-8">
                                    <Heart className="w-20 h-20 text-gfg-green mx-auto mb-4 animate-pulse" />
                                    <p className="font-sofia font-bold text-2xl text-gray-700">Team GfG RSCOE 2024-25</p>
                                    <p className="font-source text-gray-500 mt-2">Replace with your group photo</p>
                                    When you have photo: <img src="/team-photo.jpg" alt="Team" className="w-full h-full object-cover" />
                                </div>
                            </div>

                        
                            <div className="absolute top-6 right-6 px-6 py-3 bg-linear-to-r from-gfg-green to-gfg-ocean rounded-full shadow-xl backdrop-blur-sm">
                                <span className="font-sofia font-bold text-white flex items-center gap-2">
                                    <Award className="w-5 h-5" />
                                    31 Members Strong
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            <section className="py-12 px-4 sm:px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 bg-gfg-navy/10 px-4 py-2 rounded-full mb-4">
                            <Award className="w-5 h-5 text-gfg-navy" />
                            <span className="font-sofia font-bold text-gfg-navy text-sm">Our Mentor</span>
                        </div>
                        <h2 className="font-sofia font-bold text-3xl sm:text-4xl text-gfg-black">
                            Faculty Coordinator
                        </h2>
                    </div>

                    <div className="max-w-sm mx-auto">
                        <Card member={facultyCoordinator} />
                    </div>
                </div>
            </section>

            <section className="py-12 px-4 sm:px-6 bg-linear-to-br from-gfg-green/5 via-white to-gfg-navy/5">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 bg-gfg-green/10 px-4 py-2 rounded-full mb-4">
                            <Sparkles className="w-5 h-5 text-gfg-green" />
                            <span className="font-sofia font-bold text-gfg-green text-sm">Leadership</span>
                        </div>
                        <h2 className="font-sofia font-bold text-3xl sm:text-4xl text-gfg-black mb-4">
                            Core Committee
                        </h2>
                        <p className="font-source text-lg text-gray-600">
                            The decision-makers steering our chapter to success
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {coreTeam.map((member, idx) => (
                            <Card key={idx} member={member} />
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 px-4 sm:px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 bg-gfg-ocean/10 px-4 py-2 rounded-full mb-4">
                            <Users className="w-5 h-5 text-gfg-ocean" />
                            <span className="font-sofia font-bold text-gfg-ocean text-sm">Our Team</span>
                        </div>
                        <h2 className="font-sofia font-bold text-3xl sm:text-4xl text-gfg-black mb-4">
                            Team Leads & Members
                        </h2>
                        <p className="font-source text-lg text-gray-600">
                            The passionate individuals making it all happen
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {teamMembers.map((member, idx) => (
                            <Card key={idx} member={member} />
                        ))}
                    </div>

                 
                </div>
            </section>

        </div>
    );
};

export default Team;