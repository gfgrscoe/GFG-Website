import React from 'react';
import { ExternalLink, Star, BookOpen, ArrowRight } from 'lucide-react';

const ResourceCard = ({ resource }) => {
    return (
        <a
            href={resource.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block h-full"
        >
            <div className="absolute -inset-0.5 bg-linear-to-r from-gfg-green via-gfg-ocean to-gfg-blue rounded-2xl opacity-0 group-hover:opacity-75 blur-lg transition-all duration-500 group-hover:animate-pulse"></div>

            <div className="relative h-full bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden transform group-hover:-translate-y-2">

                <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-gfg-green via-gfg-ocean to-gfg-navy"></div>

                <div className="flex items-start justify-between mb-4">
                    <div className={`w-14 h-14 bg-linear-to-br ${resource.color} rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                        {React.createElement(resource.icon, { className: "w-7 h-7 text-white" })}
                    </div>

                    {resource.isOfficial && (
                        <div className="flex items-center gap-1 px-3 py-1 bg-linear-to-r from-gfg-green/10 to-gfg-ocean/10 rounded-full">
                            <Star className="w-4 h-4 text-gfg-green fill-gfg-green" />
                            <span className="font-sofia font-bold text-xs text-gfg-green">Official</span>
                        </div>
                    )}
                </div>

                
                <h3 className="font-sofia font-bold text-lg text-gfg-black mb-2 group-hover:text-gfg-green transition-colors line-clamp-2">
                    {resource.title}
                </h3>

                <p className="font-source text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">
                    {resource.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                    {resource.tags.slice(0, 3).map((tag, idx) => (
                        <span 
                            key={idx}
                            className="px-2 py-1 bg-gray-100 text-gray-600 font-source text-xs rounded-md"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className={`px-3 py-1 ${resource.difficulty === 'Beginner' ? 'bg-green-100 text-green-700' : resource.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'} font-source font-semibold text-xs rounded-full`}>
                        {resource.difficulty}
                    </span>

                    <div className="flex items-center gap-1 text-gfg-green font-sofia font-bold text-sm transform group-hover:translate-x-1 transition-transform">
                        <span>Explore</span>
                        <ArrowRight className="w-4 h-4" />
                    </div>
                </div>

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                    <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
                <div className="absolute bottom-0 right-0 w-20 h-20 bg-linear-to-tl from-gfg-green/5 to-transparent rounded-tl-full transform translate-x-10 translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"></div>
            </div>
        </a>
    );
};

export default ResourceCard;