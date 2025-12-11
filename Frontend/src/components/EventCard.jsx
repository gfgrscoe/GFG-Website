import React from 'react';
import { Calendar, Users, MapPin, ArrowRight, Sparkles, Clock, Tag } from 'lucide-react';

const EventCard = ({ event, onClick }) => {
    return (
        <div 
            onClick={() => onClick(event)}
            className="group relative cursor-pointer h-full"
        >
            {/* Outer glow effect */}
            <div className="absolute -inset-1 bg-linear-to-r from-gfg-green via-gfg-ocean to-gfg-navy rounded-3xl blur-xl opacity-0 group-hover:opacity-60 transition-all duration-700 animate-pulse"></div>

            {/* Main card */}
            <div className="relative h-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100 transform transition-all duration-500 group-hover:-translate-y-3 group-hover:shadow-[0_30px_60px_-15px_rgba(0,137,94,0.3)]">

                {/* Image section with overlay */}
                <div className="relative h-64 overflow-hidden">
                    {/* Background image */}
                    <div 
                        className="absolute inset-0 bg-cover bg-center transform transition-transform duration-700 group-hover:scale-110"
                        style={{ backgroundImage: `url(${event.thumbnail})` }}
                    ></div>

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-gfg-black via-gfg-black/50 to-transparent"></div>

                    {/* Shimmer effect on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                        <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    </div>

                    {/* Category badge */}
                    <div className="absolute top-4 left-4 z-10">
                        <div className="flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-md rounded-full shadow-lg">
                            <Tag className="w-4 h-4 text-gfg-green" />
                            <span className="font-sofia font-bold text-sm text-gfg-black">{event.category}</span>
                        </div>
                    </div>

                    {/* Date badge */}
                    <div className="absolute top-4 right-4 z-10">
                        <div className="flex flex-col items-center px-4 py-3 bg-linear-to-br from-gfg-green to-gfg-ocean rounded-2xl shadow-lg text-center min-w-[70px]">
                            <span className="font-sofia font-bold text-2xl text-white leading-none">{event.date.day}</span>
                            <span className="font-source text-xs text-white/90 uppercase mt-1">{event.date.month}</span>
                        </div>
                    </div>

                    {/* Title at bottom of image */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                        <h3 className="font-sofia font-bold text-2xl text-white mb-2 transform transition-transform duration-300 group-hover:translate-x-2">
                            {event.title}
                        </h3>
                        <div className="flex items-center gap-4 text-white/80 text-sm">
                            <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                <span className="font-source">{event.duration}</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <Users className="w-4 h-4" />
                                <span className="font-source">{event.attendees}+ attended</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content section */}
                <div className="p-6">
                    {/* Brief description */}
                    <p className="font-source text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                        {event.brief}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                        {event.tags.slice(0, 3).map((tag, idx) => (
                            <span 
                                key={idx}
                                className="px-3 py-1 bg-linear-to-r from-gfg-green/10 to-gfg-ocean/10 text-gfg-green font-source font-semibold text-xs rounded-full"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Location */}
                    <div className="flex items-center gap-2 text-gray-500 mb-4">
                        <MapPin className="w-4 h-4" />
                        <span className="font-source text-sm">{event.location}</span>
                    </div>

                    {/* View Details Button */}
                    <button className="w-full py-3 bg-linear-to-r from-gfg-green to-gfg-ocean text-white font-sofia font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-gfg-green/50 relative overflow-hidden">
                        <span className="relative z-10">View Full Details</span>
                        <ArrowRight className="w-5 h-5 relative z-10 transform group-hover:translate-x-1 transition-transform" />

                        {/* Button shine effect */}
                        <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    </button>
                </div>

                {/* Decorative corner */}
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-linear-to-tl from-gfg-ocean/10 to-transparent rounded-tl-full transform translate-x-12 translate-y-12 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"></div>
            </div>
        </div> 
    );
};

export default EventCard;