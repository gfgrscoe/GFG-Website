import React, { use, useEffect, useState } from 'react';
import ResourceCard from '../components/ResourceCard.jsx';
import RoadmapSection from '../components/RoadmapSection.jsx';
import {
    BookOpen, Code, Trophy, Smartphone, Database, Globe,
    Zap, Sparkles, Map, Layers, FileCode, Terminal,
    Cpu, Layout, Palette, Box
} from 'lucide-react';
import { resourcesData } from '../utils/content.js';
import { useLocation } from 'react-router';

const Resources = () => {
    const [activeTab, setActiveTab] = useState('DSA');
    const [viewMode, setViewMode] = useState('resources'); 
    const location = useLocation();

    useEffect(() => {
        const hash = location.hash.replace('#', '');

        const hashToCategory = {
            'dsa': 'DSA',
            'web': 'WebDev',
            'cp': 'CP',
            'app': 'AppDev',
            'ml': 'ML',
            'cs': ''
        };

        if (hash && hashToCategory[hash]) {
            setActiveTab(hashToCategory[hash]);
            setTimeout(() => {
                window.scrollTo({ top: 400, behavior: 'smooth' });
            }, 100);
        }
    }, [location.hash]);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    const categories = [
        { id: 'DSA', name: 'Data Structures & Algorithms', icon: Code, color: 'from-gfg-green to-gfg-ocean' },
        { id: 'WebDev', name: 'Web Development', icon: Globe, color: 'from-gfg-navy to-gfg-blue' },
        { id: 'CP', name: 'Competitive Programming', icon: Trophy, color: 'from-gfg-accent-orange to-gfg-accent-yellow' },
        { id: 'AppDev', name: 'App Development', icon: Smartphone, color: 'from-gfg-accent-purple to-gfg-accent-lime' },
        { id: 'ML', name: 'Machine Learning', icon: Cpu, color: 'from-gfg-accent-pink to-gfg-accent-purple' },
        { id: 'CyberSecurity', name: 'Cyber Security', icon: Terminal, color: 'from-gfg-accent-red to-gfg-accent-orange' },
    ];


    const currentCategory = categories.find(cat => cat.id === activeTab);
    const currentData = resourcesData[activeTab];

    return (
        <div className="min-h-screen bg-linear-to-br from-white via-gfg-gray to-[#f1f8f5]">

            <section className="pt-32 pb-16 px-4 sm:px-6 relative overflow-hidden">
              
                <div className="absolute top-20 right-10 w-96 h-96 bg-gfg-green/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-10 left-10 w-80 h-80 bg-gfg-ocean/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

                <div className="max-w-7xl mx-auto text-center relative z-10">

                    <h1 className="font-sofia font-bold text-4xl sm:text-5xl lg:text-6xl text-gfg-black mb-6 leading-tight">
                        Your Journey to
                        <span className="block bg-linear-to-r from-gfg-green via-gfg-ocean to-gfg-navy bg-clip-text text-transparent">
                            Tech Mastery Starts Here
                        </span>
                    </h1>

                    <p className="font-source text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                        Curated resources, roadmaps, and learning paths from GeeksforGeeks to help you
                        master DSA, Web Development, Competitive Programming, and App Development.
                    </p>
                </div>
            </section>

            <section className="py-8 px-4 sm:px-6  top-20 z-30 bg-white/80 backdrop-blur-lg border-b border-gray-100 shadow-sm">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        {categories.map((category) => {
                            const Icon = category.icon;
                            const isActive = activeTab === category.id;

                            return (
                                <button
                                    key={category.id}
                                    onClick={() => setActiveTab(category.id)}
                                    className={`group relative p-4 rounded-2xl transition-all duration-300 ${isActive
                                            ? 'bg-linear-to-r ' + category.color + ' text-white shadow-2xl shadow-gfg-green/30 scale-105'
                                            : 'bg-white hover:bg-gray-50 text-gray-700 shadow-md hover:shadow-lg'
                                        }`}
                                >
                                    <div className="flex flex-col items-center gap-2 text-center">
                                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${isActive ? 'bg-white/20' : 'bg-gray-100'
                                            }`}>
                                            <Icon className={`w-6 h-6 ${isActive ? 'text-white' : 'text-gray-600'}`} />
                                        </div>
                                        <span className="font-sofia font-bold text-sm">{category.name}</span>
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                </div>
            </section>
            <section className="py-6 px-4 sm:px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center justify-between">
                        <h2 className="font-sofia font-bold text-2xl sm:text-3xl text-gfg-black">
                            {currentCategory.name}
                        </h2>

                        <div className="flex gap-2 bg-white rounded-xl p-1 shadow-md">
                            <button
                                onClick={() => setViewMode('resources')}
                                className={`px-4 py-2 rounded-lg font-sofia font-semibold text-sm transition-all ${viewMode === 'resources'
                                        ? 'bg-linear-to-r from-gfg-green to-gfg-ocean text-white shadow-lg'
                                        : 'text-gray-600 hover:bg-gray-50'
                                    }`}
                            >
                                Resources
                            </button>
                            <button
                                onClick={() => setViewMode('roadmap')}
                                className={`px-4 py-2 rounded-lg font-sofia font-semibold text-sm transition-all ${viewMode === 'roadmap'
                                        ? 'bg-linear-to-r from-gfg-green to-gfg-ocean text-white shadow-lg'
                                        : 'text-gray-600 hover:bg-gray-50'
                                    }`}
                            >
                                Roadmap
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pb-20 px-4 sm:px-6">
                <div className="max-w-7xl mx-auto">
                    {viewMode === 'resources' ? (
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {currentData.resources.map((resource, idx) => (
                                <ResourceCard key={idx} resource={resource} />
                            ))}
                        </div>
                    ) : (
                        <div className="max-w-4xl mx-auto">
                            <div className="mb-8 p-6 bg-linear-to-r from-gfg-green/10 to-gfg-ocean/10 rounded-2xl border border-gfg-green/20">
                                <div className="flex items-center gap-3 mb-3">
                                    <Map className="w-6 h-6 text-gfg-green" />
                                    <h3 className="font-sofia font-bold text-xl text-gfg-black">Learning Roadmap</h3>
                                </div>
                                <p className="font-source text-gray-700">
                                    Follow this step-by-step roadmap to master {currentCategory.name}.
                                    Click on each step to expand and see detailed topics and resources.
                                </p>
                            </div>

                            <RoadmapSection roadmap={currentData.roadmap} />
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Resources;