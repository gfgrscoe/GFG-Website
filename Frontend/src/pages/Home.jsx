import React, { useState } from 'react';
import { 
    Code, 
    Users, 
    Trophy, 
    Rocket, 
    Calendar,
    ArrowRight,
    Award,
    ImageIcon
} from 'lucide-react';
import logo from '../assets/logo.png'; 
import researchIcon from '../assets/Reserachpaper.jpg'; 
import workshopIcon from '../assets/3dworkshop.jpg';
import greIcon from '../assets/gre.jpg'; 
import { useNavigate } from 'react-router';
import GreenByteSection from '../components/GreenByteSection.jsx'; // ← Import the component


const Home = () => {
    const [isLogoHovered, setIsLogoHovered] = useState(false);
    const navigate = useNavigate();

    // Stats data
    const stats = [
        { icon: Users, number: '50+', label: 'Active Members', color: 'bg-gfg-green' },
        { icon: Trophy, number: '10+', label: 'Events Hosted', color: 'bg-gfg-navy' },
        { icon: Code, number: '800+', label: 'Community Growth', color: 'bg-gfg-accent-orange' },
        { icon: Rocket, number: '10+', label: 'Workshops', color: 'bg-gfg-accent-purple' },
    ];

    // Current week's concept (update this weekly)
   
    // Why join reasons
    const whyJoinReasons = [
        {
            icon: Code,
            title: 'Learn & Grow',
            description: 'Access exclusive workshops, coding bootcamps, and hands-on projects',
            color: 'from-gfg-green to-gfg-ocean'
        },
        {
            icon: Users,
            title: 'Network & Collaborate',
            description: 'Connect with like-minded coders and industry professionals',
            color: 'from-gfg-navy to-gfg-blue'
        },
        {
            icon: Trophy,
            title: 'Compete & Win',
            description: 'Participate in hackathons, coding contests, and win exciting prizes',
            color: 'from-gfg-accent-orange to-gfg-accent-yellow'
        },
        {
            icon: Award,
            title: 'Build Your Portfolio',
            description: 'Work on real-world projects and boost your resume with certificates',
            color: 'from-gfg-accent-purple to-gfg-accent-lime'
        }
    ];

    // Gallery placeholders
    const galleryImages = [
        { id: 1, title: 'Session on: "How to make Research Papers"', category: 'Event', pic: researchIcon },
        { id: 2, title: '3D App Development Workshop', category: 'Workshop', pic: workshopIcon },
        { id: 3, title: 'Session & Mock for "GRADUATE RECORD EXAMINATIONS (GRE)."', category: 'Community', pic: greIcon },
    ];

    return (
        <div className="min-h-screen bg-linear-to-br from-white via-gfg-gray to-[#f1f8f5]">
            {/* Hero Section */}
            <section className="pt-24 md:pt-32 pb-12 md:pb-20 px-4 sm:px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        
                        {/* LEFT - Info */}
                        <div className="space-y-4 md:space-y-6 order-2 lg:order-1 text-center lg:text-left">
                            <h1 className="font-sofia font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-gfg-black leading-tight">
                                GeeksForGeeks 
                                <span className="block bg-linear-to-r from-gfg-green via-gfg-ocean to-gfg-navy bg-clip-text text-transparent">
                                    Student Chapter
                                </span>
                            </h1>

                            <p className="font-source text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                                Welcome to the official GeeksforGeeks Student Chapter. Join 100+ passionate coders, 
                                attend workshops, compete in hackathons, and build projects that matter.
                            </p>

                            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
                                <button onClick={() => navigate('https://chat.whatsapp.com/JXUbInxZza2Cno35TdSyjT?mode=hqrt1')} className="group px-6 sm:px-8 py-3 sm:py-4 bg-gfg-green text-white font-sofia font-semibold rounded-xl hover:bg-gfg-ocean transform hover:scale-105 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                                    Join Our Community
                                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                                <button className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-gfg-green text-gfg-green font-sofia font-semibold rounded-xl hover:bg-gfg-green hover:text-white transition-all flex items-center justify-center gap-2" 
                                    onClick={() => navigate('/events')}>
                                    <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                                    View Events
                                </button>
                            </div>
                        </div>

                        {/* RIGHT - Rotating Logo */}
                        <div className="flex justify-center lg:justify-end order-1 lg:order-2">
                            <div className="relative">
                                <div className="absolute inset-0 bg-linear-to-r from-gfg-green via-gfg-ocean to-gfg-navy rounded-full blur-2xl md:blur-3xl opacity-30 animate-pulse"></div>
                                
                                <div 
                                    className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 bg-linear-to-br from-gfg-green to-gfg-ocean rounded-full p-6 sm:p-8 shadow-2xl transition-transform duration-700 ease-in-out cursor-pointer"
                                    style={{ transform: isLogoHovered ? 'rotate(360deg)' : 'rotate(0deg)' }}
                                    onMouseEnter={() => setIsLogoHovered(true)}
                                    onMouseLeave={() => setIsLogoHovered(false)}
                                >
                                    <div className="w-full h-full bg-white rounded-full flex items-center justify-center shadow-inner p-4 sm:p-6">
                                        <img 
                                            src={logo} 
                                            alt="GfG Logo" 
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                </div>

                                <div className="absolute -top-3 -right-3 md:-top-4 md:-right-4 w-16 h-16 md:w-20 md:h-20 bg-gfg-accent-lime rounded-full blur-xl opacity-60 animate-pulse"></div>
                                <div className="absolute -bottom-3 -left-3 md:-bottom-4 md:-left-4 w-12 h-12 md:w-16 md:h-16 bg-gfg-accent-orange rounded-full blur-xl opacity-60 animate-pulse" style={{ animationDelay: '1s' }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Cards */}
            <section className="py-8 md:py-12 px-4 sm:px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                        {stats.map((stat, idx) => {
                            const Icon = stat.icon;
                            return (
                                <div 
                                    key={idx}
                                    className="group bg-white rounded-xl md:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 cursor-pointer border border-gray-100"
                                >
                                    <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 ${stat.color} rounded-lg md:rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform mx-auto lg:mx-0`}>
                                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
                                    </div>
                                    <h3 className="font-sofia font-bold text-2xl sm:text-3xl md:text-4xl text-gfg-black mb-1 sm:mb-2 text-center lg:text-left">{stat.number}</h3>
                                    <p className="font-source text-xs sm:text-sm md:text-base text-gray-600 font-semibold text-center lg:text-left">{stat.label}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Green Byte Section - NOW A SEPARATE COMPONENT! */}
            <GreenByteSection/>

            {/* Why Join the Chapter */}
            <section className="py-12 md:py-20 px-4 sm:px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-8 md:mb-12">
                        <h2 className="font-sofia font-bold text-3xl sm:text-4xl lg:text-5xl text-gfg-black mb-3 sm:mb-4 px-4">
                            Why Join the Chapter?
                        </h2>
                        <p className="font-source text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4">
                            Discover the amazing benefits and opportunities waiting for you
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                        {whyJoinReasons.map((reason, idx) => {
                            const Icon = reason.icon;
                            return (
                                <div 
                                    key={idx}
                                    className="group relative bg-white rounded-xl md:rounded-2xl p-5 sm:p-6 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 cursor-pointer overflow-hidden border border-gray-100"
                                >
                                    <div className={`absolute inset-0 bg-linear-to-br ${reason.color} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
                                    
                                    <div className="relative z-10">
                                        <div className={`w-12 h-12 sm:w-14 sm:h-14 bg-linear-to-br ${reason.color} rounded-lg md:rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                                            <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                                        </div>
                                        <h3 className="font-sofia font-bold text-lg sm:text-xl text-gfg-black mb-2 sm:mb-3">{reason.title}</h3>
                                        <p className="font-source text-sm sm:text-base text-gray-600 leading-relaxed">{reason.description}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Glimpses / Gallery */}
            <section className="py-12 md:py-20 px-4 sm:px-6 bg-linear-to-br from-gfg-green/5 via-white to-gfg-ocean/5">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-8 md:mb-12">
                        <div className="inline-flex items-center gap-2 bg-gfg-ocean/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-3 sm:mb-4">
                            <ImageIcon className="w-4 h-4 sm:w-5 sm:h-5 text-gfg-ocean" />
                            <span className="font-source font-semibold text-gfg-ocean text-xs sm:text-sm">Our Moments</span>
                        </div>
                        <h2 className="font-sofia font-bold text-3xl sm:text-4xl lg:text-5xl text-gfg-black mb-3 sm:mb-4 px-4">
                            Glimpses of Our Journey
                        </h2>
                        <p className="font-source text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4">
                            Experience the energy, innovation, and collaboration that defines our community
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                        {galleryImages.map((image) => (
                            <div 
                                key={image.id}
                                className="group relative rounded-xl md:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 cursor-pointer h-64 sm:h-72 md:h-80"
                            >
                                <img 
                                    src={image.pic} 
                                    alt={image.title}
                                    className="w-full h-full object-cover"
                                />
                                
                                <div className="absolute inset-0 bg-linear-to-t from-gfg-black/80 via-gfg-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                                        <span className="inline-block px-2.5 sm:px-3 py-0.5 sm:py-1 bg-gfg-green text-white text-xs font-sofia font-bold rounded-full mb-1.5 sm:mb-2">
                                            {image.category}
                                        </span>
                                        <h3 className="font-sofia font-bold text-base sm:text-lg md:text-xl text-white line-clamp-2">
                                            {image.title}
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-8 md:mt-10">
                        <button className="group px-6 sm:px-8 py-3 sm:py-4 bg-gfg-ocean text-white font-sofia font-semibold rounded-xl hover:bg-gfg-green transform hover:scale-105 transition-all shadow-lg flex items-center gap-2 mx-auto text-sm sm:text-base" 
                            onClick={() => navigate('/events')}>
                            View Full Gallery
                            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
