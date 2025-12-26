import React, { useState, useEffect } from 'react';
import { Zap, ChevronRight } from 'lucide-react';
import api from '../api/axiosInstance'; 

const GreenByteSection = () => {
    const [concept, setConcept] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchLatestConcept = async () => {
            try {
                setLoading(true);
                const response = await api.get('/api/greenbyte/latest');
                
                if (response.data.success) {
                    setConcept(response.data.data);
                }
            } catch (err) {
                console.error('Error fetching Green Byte:', err);
                setError(err?.response?.data?.message || 'Failed to load concept');
            } finally {
                setLoading(false);
            }
        };

        fetchLatestConcept();
    }, []); 
    if (loading) {
        return (
            <section className="py-12 md:py-20 px-4 sm:px-6 bg-linear-to-br from-gfg-green/5 via-white to-gfg-navy/5">
                <div className="max-w-6xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-gfg-green px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-3 sm:mb-4">
                        <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-white animate-pulse" />
                        <span className="font-sofia font-bold text-white text-xs sm:text-sm">Loading...</span>
                    </div>
                    <div className="w-12 h-12 border-4 border-gfg-green border-t-transparent rounded-full animate-spin mx-auto"></div>
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section className="py-12 md:py-20 px-4 sm:px-6 bg-linear-to-br from-gfg-green/5 via-white to-gfg-navy/5">
                <div className="max-w-6xl mx-auto text-center">
                    <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                        <p className="font-source text-red-600">{error}</p>
                    </div>
                </div>
            </section>
        );
    }
    if (!concept) {
        return (
            <section className="py-12 md:py-20 px-4 sm:px-6 bg-linear-to-br from-gfg-green/5 via-white to-gfg-navy/5">
                <div className="max-w-6xl mx-auto text-center">
                    <p className="font-source text-gray-600">No Green Byte available yet.</p>
                </div>
            </section>
        );
    }

    return (
        <section id='green-byte' className="py-12 md:py-20 px-4 sm:px-6 bg-linear-to-br from-gfg-green/5 via-white to-gfg-navy/5">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-8 md:mb-12">
                    <div className="inline-flex items-center gap-2 bg-gfg-green px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-3 sm:mb-4">
                        <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                        <span className="font-sofia font-bold text-white text-xs sm:text-sm">Weekly Quest</span>
                    </div>
                    <h2 className="font-sofia font-bold text-3xl sm:text-4xl lg:text-5xl text-gfg-black mb-3 sm:mb-4 px-4">
                        Green Byte of the Week
                    </h2>
                    <p className="font-source text-base sm:text-lg lg:text-xl text-gray-600 px-4">
                        Master one concept every week and level up your coding skills
                    </p>
                </div>

                <div className="bg-white rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                    <div className="grid lg:grid-cols-5">
                        <div className="lg:col-span-3 p-6 sm:p-8 lg:p-12">
                            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 flex-wrap">
                                <span className="px-3 sm:px-4 py-1 sm:py-1.5 bg-gfg-green/10 text-gfg-green font-source font-bold text-xs sm:text-sm rounded-full">
                                    {concept.category}
                                </span>
                                <span className="px-3 sm:px-4 py-1 sm:py-1.5 bg-gfg-navy/10 text-gfg-navy font-source font-bold text-xs sm:text-sm rounded-full">
                                    {concept.difficulty}
                                </span>
                                <span className="px-3 sm:px-4 py-1 sm:py-1.5 bg-gray-100 text-gray-600 font-source font-bold text-xs sm:text-sm rounded-full">
                                    {concept.week}
                                </span>
                            </div>

                            <h3 className="font-sofia font-bold text-2xl sm:text-3xl lg:text-4xl text-gfg-black mb-3 sm:mb-4">
                                {concept.title}
                            </h3>

                            <p className="font-source text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed mb-4 sm:mb-6">
                                {concept.description}
                            </p>

                            {concept.keyPoints && concept.keyPoints.length > 0 && (
                                <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                                    <h4 className="font-sofia font-bold text-base sm:text-lg text-gfg-black">Key Takeaways:</h4>
                                    {concept.keyPoints.map((point, idx) => (
                                        <div key={idx} className="flex items-start gap-2 sm:gap-3">
                                            <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gfg-green rounded-full flex items-center justify-center shrink-0 mt-0.5">
                                                <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                                            </div>
                                            <span className="font-source text-sm sm:text-base text-gray-700">{point}</span>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {concept.resources && concept.resources.length > 0 && (
                                <div className="flex flex-wrap gap-2 sm:gap-3">
                                    {concept.resources.map((resource, idx) => (
                                        <a
                                            key={idx}
                                            href={resource.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-3 sm:px-5 py-2 sm:py-2.5 bg-gfg-gray hover:bg-gfg-green hover:text-white text-gfg-black font-source font-semibold text-xs sm:text-sm rounded-lg transition-all transform hover:scale-105"
                                        >
                                            {resource.label}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>

                        {concept.code && (
                            <div className="lg:col-span-2 bg-linear-to-br from-gfg-black to-gfg-navy p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
                                <div className="flex items-center gap-2 mb-3 sm:mb-4">
                                    <div className="flex gap-1.5 sm:gap-2">
                                        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
                                        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
                                        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
                                    </div>
                                    <span className="font-source text-gray-400 text-xs sm:text-sm ml-1 sm:ml-2">code.js</span>
                                </div>
                                <pre className="font-mono text-xs sm:text-sm text-gfg-accent-lime leading-relaxed overflow-x-auto">
                                    {concept.code}
                                </pre>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GreenByteSection;
