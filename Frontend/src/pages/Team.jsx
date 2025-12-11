import React from 'react';
import Card from '../components/Card.jsx';
import { Users, Award, Sparkles, Heart } from 'lucide-react';
import sanket from '../assets/SanketPhoto.jpg';

const Team = () => {

    const facultyCoordinator = {
        name: 'Dr. Faculty Name',
        position: 'Faculty Coordinator',
        photo: 'https://via.placeholder.com/150', 
        tagline: 'Guiding future tech leaders',
        github: 'https://github.com/username',
        linkedin: 'https://linkedin.com/in/username',
        email: 'faculty@college.edu'
    };

    const coreTeam = [
        {
            name: 'Patel Abdul Rahman Khan',
            position: 'President',
            photo: 'https://via.placeholder.com/150',
            tagline: 'Leading with passion',
            github: 'https://github.com/patelrahmankhan',
            linkedin: 'https://linkedin.com/in/patelrahmankhan',
            instagram: 'https://instagram.com/patelrahmankhan'
        },
        {
            name: 'Priya Patel',
            position: 'Vice President',
            photo: 'https://via.placeholder.com/150',
            tagline: 'Innovating every day',
            github: 'https://github.com/priya',
            linkedin: 'https://linkedin.com/in/priya',
            instagram: 'https://instagram.com/priya'
        },
        {
            name: 'Sanket Mandwal',
            position: 'Secretary',
            photo: sanket,
            tagline: 'Organizing excellence',
            github: 'https://github.com/rahul',
            linkedin: 'https://linkedin.com/in/rahul',
            instagram: 'https://instagram.com/rahul'
        },
        {
            name: 'Sneha Desai',
            position: 'Treasurer',
            photo: 'https://via.placeholder.com/150',
            tagline: 'Managing resources wisely',
            github: 'https://github.com/sneha',
            linkedin: 'https://linkedin.com/in/sneha',
            instagram: 'https://instagram.com/sneha'
        }
    ];
    const teamMembers = [
        {
            name: 'Arjun Verma',
            position: 'Technical Lead',
            photo: 'https://via.placeholder.com/150',
            tagline: 'Code, debug, repeat',
            github: 'https://github.com/arjun',
            linkedin: 'https://linkedin.com/in/arjun',
            instagram: 'https://instagram.com/arjun'
        },
        {
            name: 'Isha Mehta',
            position: 'Design Lead',
            photo: 'https://via.placeholder.com/150',
            tagline: 'Creating beautiful experiences',
            github: 'https://github.com/isha',
            linkedin: 'https://linkedin.com/in/isha',
            instagram: 'https://instagram.com/isha'
        },
        {
            name: 'Vikram Singh',
            position: 'Event Lead',
            photo: 'https://via.placeholder.com/150',
            tagline: 'Making events memorable',
            github: 'https://github.com/vikram',
            linkedin: 'https://linkedin.com/in/vikram',
            instagram: 'https://instagram.com/vikram'
        },
        {
            name: 'Ananya Roy',
            position: 'PR Lead',
            photo: 'https://via.placeholder.com/150',
            tagline: 'Spreading the word',
            github: 'https://github.com/ananya',
            linkedin: 'https://linkedin.com/in/ananya',
            instagram: 'https://instagram.com/ananya'
        },
        {
            name: 'Karan Joshi',
            position: 'Content Lead',
            photo: 'https://via.placeholder.com/150',
            tagline: 'Words that inspire',
            github: 'https://github.com/karan',
            linkedin: 'https://linkedin.com/in/karan',
            instagram: 'https://instagram.com/karan'
        }
    ];

    return (
        <div className="min-h-screen bg-linear-to-br from-white via-gfg-gray to-[#f1f8f5]">

            {/* Hero Section */}
            <section className="pt-32 pb-12 px-4 sm:px-6 relative overflow-hidden">
                {/* Background decorations */}
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

            {/* Group Photo Section */}
            <section className="py-12 px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="relative group">
                        {/* Glow effect */}
                        <div className="absolute -inset-1 bg-linear-to-r from-gfg-green via-gfg-ocean to-gfg-navy rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition duration-500"></div>

                        {/* Image container */}
                        <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                            <div className="aspect-video bg-linear-to-br from-gfg-gray to-white flex items-center justify-center">
                                {/* Placeholder - Replace with actual group photo */}
                                <div className="text-center p-8">
                                    <Heart className="w-20 h-20 text-gfg-green mx-auto mb-4 animate-pulse" />
                                    <p className="font-sofia font-bold text-2xl text-gray-700">Team GfG RSCOE 2024-25</p>
                                    {/* <p className="font-source text-gray-500 mt-2">Replace with your group photo</p> */}
                                    {/* When you have photo: <img src="/team-photo.jpg" alt="Team" className="w-full h-full object-cover" /> */}
                                </div>
                            </div>

                            {/* Badge overlay */}
                            <div className="absolute top-6 right-6 px-6 py-3 bg-linear-to-r from-gfg-green to-gfg-ocean rounded-full shadow-xl backdrop-blur-sm">
                                <span className="font-sofia font-bold text-white flex items-center gap-2">
                                    <Award className="w-5 h-5" />
                                    31 Members Strong
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Faculty Coordinator */}
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

            {/* Core Team */}
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

            {/* Team Members */}
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

                    {/* Add more members message */}
                    {/* <div className="mt-12 text-center">
                        <div className="inline-block bg-white rounded-2xl px-8 py-6 shadow-lg border border-gray-100">
                            <p className="font-source text-gray-600 mb-2">
                                ... and 21 more amazing team members!
                            </p>
                            <p className="font-sofia font-bold text-gfg-green">
                                Add more members to the teamMembers array
                            </p>
                        </div>
                    </div> */}
                </div>
            </section>

        </div>
    );
};

export default Team;