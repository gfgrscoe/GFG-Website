import React, { useEffect } from 'react';
import { 
    Code, 
    Users, 
    Target, 
    Award,
    Zap,
    BookOpen,
    Lightbulb,
    TrendingUp,
    Globe,
    Heart,
    Rocket,
    Trophy,
    Shield,
    Briefcase,
    GraduationCap,
    ChevronRight,
    Sparkles
} from 'lucide-react';
import { Helmet } from 'react-helmet';

const About = () => {

    <Helmet>
    <title>About Us - GeeksforGeeks Student Chapter @ RSCOE</title>
    <meta name="description" content="Learn about the GeeksforGeeks Student Chapter at RSCOE, our vision, mission, core values, and journey in building a community of passionate developers." />
    </Helmet>

     useEffect(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, []);

    const visionStatement = "To build a future-ready student developer community by fostering excellence in problem-solving, modern software development, and collaborative learning.";

    const missionStatement = "To deliver high-impact technical sessions, hands-on workshops, real-world projects, and leadership opportunities that empower every student to grow as a skilled, confident, and industry-ready engineer.";

    const coreValues = [
        {
            icon: Code,
            title: 'Technical Excellence',
            description: 'Mastering DSA, CP, and cutting-edge technologies through consistent practice',
            color: 'from-gfg-green to-gfg-ocean'
        },
        {
            icon: Users,
            title: 'Collaborative Learning',
            description: 'Growing together through peer learning, mentorship, and knowledge sharing',
            color: 'from-gfg-navy to-gfg-blue'
        },
        {
            icon: Lightbulb,
            title: 'Innovation & Creativity',
            description: 'Building real-world projects and solving problems with creative solutions',
            color: 'from-gfg-accent-orange to-gfg-accent-yellow'
        },
        {
            icon: Award,
            title: 'Professional Growth',
            description: 'Developing industry-ready skills and leadership through hands-on experience',
            color: 'from-gfg-accent-purple to-gfg-accent-lime'
        }
    ];

    const activities = [
        {
            icon: BookOpen,
            title: 'Workshops & Bootcamps',
            description: 'Intensive learning sessions on DSA, Web Dev, ML, and emerging technologies',
            stats: '10+ conducted'
        },
        {
            icon: Trophy,
            title: 'Coding Contests',
            description: 'Regular competitive programming contests to sharpen problem-solving skills',
            stats: '5+ events'
        },
        {
            icon: Rocket,
            title: 'Hackathons',
            description: '24-hour innovation marathons where ideas transform into working prototypes',
            stats: '3+ organized'
        },
        {
            icon: Users,
            title: 'Peer Learning',
            description: 'Study groups, doubt sessions, and collaborative project building',
            stats: 'Weekly sessions'
        },
        {
            icon: Briefcase,
            title: 'Industry Talks',
            description: 'Guest lectures from industry experts and alumni sharing real-world insights',
            stats: '8+ speakers'
        },
        {
            icon: Code,
            title: 'Open Source',
            description: 'Contributing to open-source projects and building impactful solutions',
            stats: 'Active participation'
        }
    ];

    const milestones = [
        { year: '2023', event: 'Chapter Established', description: 'Official GfG Student Chapter launched at RSCOE' },
        { year: '2024', event: '50+ Members', description: 'Growing community of passionate developers' },
        { year: '2024', event: '5+ Events', description: 'Successfully conducted workshops and competitions' },
        { year: '2025', event: '10+ Events', description: 'Successfully conducted workshops and competitions' }
    ];

    return (
        <div className="min-h-screen bg-linear-to-br from-white via-gfg-gray to-[#f1f8f5]">

            <section className="pt-32 pb-20 px-4 sm:px-6 relative overflow-hidden">
                <div className="absolute top-20 right-10 w-72 h-72 bg-gfg-green/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 left-10 w-96 h-96 bg-gfg-ocean/10 rounded-full blur-3xl"></div>

                <div className="max-w-5xl mx-auto text-center relative z-10">
                  

                    <h1 className="font-sofia font-bold text-4xl sm:text-5xl lg:text-6xl text-gfg-black mb-6 leading-tight">
                        Building the Next Generation of
                        <span className="block bg-linear-to-r from-gfg-green via-gfg-ocean to-gfg-navy bg-clip-text text-transparent">
                            Tech Leaders
                        </span>
                    </h1>

                    <p className="font-source text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                        We are the official GeeksforGeeks Student Chapter at RSCOE, dedicated to fostering 
                        a vibrant community of passionate coders, innovators, and problem solvers.
                    </p>
                </div>
            </section>

            <section className="py-20 px-4 sm:px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-gfg-green px-3 py-1 rounded-full mb-4">
                                <Globe className="w-4 h-4 text-white" />
                                <span className="font-sofia font-bold text-white text-xs">Parent Organization</span>
                            </div>

                            <h2 className="font-sofia font-bold text-3xl sm:text-4xl text-gfg-black mb-4">
                                About GeeksforGeeks
                            </h2>

                            <div className="space-y-4 font-source text-gray-600 leading-relaxed">
                                <p>
                                    <strong className="text-gfg-green">GeeksforGeeks</strong> is a leading platform 
                                    providing computer science resources and coding solutions. Founded to help students 
                                    and working professionals excel in technical interviews and programming competitions.
                                </p>
                                <p>
                                    With <strong>millions of users worldwide</strong>, GfG offers tutorials, practice 
                                    problems, interview experiences, and competitive programming content across various 
                                    domains including DSA, Web Development, Machine Learning, and System Design.
                                </p>
                                <p>
                                    The <strong>GfG Student Chapter Program</strong> extends this mission to college 
                                    campuses, empowering students through community-driven learning and skill development.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { icon: Users, label: 'Millions of Users', color: 'bg-gfg-green' },
                                { icon: BookOpen, label: '10000+ Articles', color: 'bg-gfg-navy' },
                                { icon: Code, label: '5000+ Problems', color: 'bg-gfg-accent-orange' },
                                { icon: Globe, label: '100+ Chapters', color: 'bg-gfg-accent-purple' }
                            ].map((item, idx) => {
                                const Icon = item.icon;
                                return (
                                    <div key={idx} className="bg-linear-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all">
                                        <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center mb-3`}>
                                            <Icon className="w-6 h-6 text-white" />
                                        </div>
                                        <p className="font-sofia font-bold text-sm text-gray-700">{item.label}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="font-sofia font-bold text-3xl sm:text-4xl lg:text-5xl text-gfg-black mb-4">
                            GfG Student Chapter @ RSCOE
                        </h2>
                        <p className="font-source text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                            Rajarshi Shahu College of Engineering's official GeeksforGeeks community
                        </p>
                    </div>

                    <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
                        <div className="grid md:grid-cols-3">
                            {[
                                {
                        
                                    title: 'Who We Are',
                                    description: 'Official GfG Student Chapter at RSCOE, Pune, bringing together coding enthusiasts from all departments to learn, build, and grow together.',
                                    color: 'bg-gfg-green'
                                },
                                {
                                    title: 'What We Do',
                                    description: 'We conduct workshops, hackathons, coding contests, and study sessions focused on DSA, competitive programming, and modern development.',
                                    color: 'bg-gfg-navy'
                                },
                                {
                                    title: 'Our Community',
                                    description: '50+ active members collaborating on projects, solving problems, and supporting each other to become industry-ready engineers.',
                                    color: 'bg-gfg-accent-orange'
                                }
                            ].map((item, idx) => {
                                return (
                                    <div key={idx} className="p-8 hover:bg-linear-to-br hover:from-gray-50 hover:to-white transition-all group">
                                        
                                        <h3 className="font-sofia font-bold text-xl text-gfg-black mb-3">{item.title}</h3>
                                        <p className="font-source text-gray-600 leading-relaxed">{item.description}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 px-4 sm:px-6 bg-linear-to-br from-gfg-green/5 via-white to-gfg-navy/5">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8">

                        <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-gray-100 hover:shadow-2xl transition-all group">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-14 h-14 bg-linear-to-br from-gfg-green to-gfg-ocean rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                                    <Target className="w-7 h-7 text-white" />
                                </div>
                                <h2 className="font-sofia font-bold text-2xl sm:text-3xl text-gfg-black">Our Vision</h2>
                            </div>
                            <p className="font-source text-lg text-gray-700 leading-relaxed">
                                {visionStatement}
                            </p>
                        </div>

                        <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-gray-100 hover:shadow-2xl transition-all group">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-14 h-14 bg-linear-to-br from-gfg-navy to-gfg-blue rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                                    <Rocket className="w-7 h-7 text-white" />
                                </div>
                                <h2 className="font-sofia font-bold text-2xl sm:text-3xl text-gfg-black">Our Mission</h2>
                            </div>
                            <p className="font-source text-lg text-gray-700 leading-relaxed">
                                {missionStatement}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 px-4 sm:px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="font-sofia font-bold text-3xl sm:text-4xl lg:text-5xl text-gfg-black mb-4">
                            Our Core Values
                        </h2>
                        <p className="font-source text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
                            The principles that guide everything we do
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {coreValues.map((value, idx) => {
                            const Icon = value.icon;
                            return (
                                <div 
                                    key={idx}
                                    className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 cursor-pointer overflow-hidden border border-gray-100"
                                >
                                    <div className={`absolute inset-0 bg-linear-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-opacity`}></div>

                                    <div className="relative z-10">
                                        <div className={`w-14 h-14 bg-linear-to-br ${value.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                                            <Icon className="w-7 h-7 text-white" />
                                        </div>
                                        <h3 className="font-sofia font-bold text-xl text-gfg-black mb-3">{value.title}</h3>
                                        <p className="font-source text-gray-600 leading-relaxed">{value.description}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

         
            <section className="py-20 px-4 sm:px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="font-sofia font-bold text-3xl sm:text-4xl lg:text-5xl text-gfg-black mb-4">
                            Our Journey
                        </h2>
                        <p className="font-source text-lg sm:text-xl text-gray-600">
                            Key milestones in our chapter's growth
                        </p>
                    </div>

                    <div className="relative">
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-linear-to-b from-gfg-green via-gfg-ocean to-gfg-navy hidden md:block"></div>

                        <div className="space-y-12">
                            {milestones.map((milestone, idx) => (
                                <div key={idx} className={`flex items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                                    <div className={`flex-1 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all">
                                            <span className="inline-block px-4 py-1 bg-linear-to-r from-gfg-green to-gfg-ocean text-white font-sofia font-bold text-sm rounded-full mb-3">
                                                {milestone.year}
                                            </span>
                                            <h3 className="font-sofia font-bold text-xl text-gfg-black mb-2">{milestone.event}</h3>
                                            <p className="font-source text-gray-600">{milestone.description}</p>
                                        </div>
                                    </div>

                                    <div className="hidden md:block w-4 h-4 bg-gfg-green rounded-full border-4 border-white shadow-lg z-10"></div>

                                    <div className="flex-1"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default About;