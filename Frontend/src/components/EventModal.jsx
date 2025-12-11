import React, { useEffect } from 'react';
import { X, Calendar, Users, MapPin, Clock, Target, Lightbulb, Award, Image as ImageIcon, ChevronLeft, ChevronRight } from 'lucide-react';

const EventModal = ({ event, onClose }) => {
    const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

   
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, [onClose]);

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % event.gallery.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + event.gallery.length) % event.gallery.length);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn">
            {/* Backdrop */}
            <div 
                className="absolute inset-0 bg-gfg-black/80 backdrop-blur-sm"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className="relative bg-white rounded-3xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto animate-slideUp">
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 z-20 w-12 h-12 bg-white/90 backdrop-blur-sm hover:bg-red-500 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg group"
                >
                    <X className="w-6 h-6 text-gray-700 group-hover:text-white transition-colors" />
                </button>

                {/* Hero Image */}
                <div className="relative h-80 overflow-hidden rounded-t-3xl">
                    <div 
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${event.thumbnail})` }}
                    ></div>
                    <div className="absolute inset-0 bg-linear-to-t from-gfg-black via-gfg-black/50 to-transparent"></div>

                    {/* Title overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                        <div className="flex items-center gap-3 mb-3">
                            <span className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full font-sofia font-bold text-white text-sm">
                                {event.category}
                            </span>
                            <span className="px-4 py-2 bg-linear-to-r from-gfg-green to-gfg-ocean rounded-full font-sofia font-bold text-white text-sm">
                                {event.date.day} {event.date.month} {event.date.year}
                            </span>
                        </div>
                        <h2 className="font-sofia font-bold text-4xl lg:text-5xl text-white mb-3">
                            {event.title}
                        </h2>
                        <div className="flex flex-wrap gap-4 text-white/90">
                            <div className="flex items-center gap-2">
                                <Clock className="w-5 h-5" />
                                <span className="font-source">{event.duration}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Users className="w-5 h-5" />
                                <span className="font-source">{event.attendees}+ attended</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin className="w-5 h-5" />
                                <span className="font-source">{event.location}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="p-8 lg:p-12">
                    {/* Summary */}
                    <div className="mb-10">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 bg-linear-to-br from-gfg-green to-gfg-ocean rounded-xl flex items-center justify-center">
                                <Lightbulb className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="font-sofia font-bold text-2xl text-gfg-black">Event Summary</h3>
                        </div>
                        <p className="font-source text-gray-700 text-lg leading-relaxed">
                            {event.summary}
                        </p>
                    </div>

                    {/* Objectives */}
                    <div className="mb-10">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 bg-linear-to-br from-gfg-navy to-gfg-blue rounded-xl flex items-center justify-center">
                                <Target className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="font-sofia font-bold text-2xl text-gfg-black">Key Objectives</h3>
                        </div>
                        <div className="grid gap-4">
                            {event.objectives.map((objective, idx) => (
                                <div key={idx} className="flex items-start gap-3 p-4 bg-linear-to-r from-gfg-green/5 to-gfg-ocean/5 rounded-xl">
                                    <div className="w-8 h-8 bg-linear-to-br from-gfg-green to-gfg-ocean rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                                        <span className="font-sofia font-bold text-white text-sm">{idx + 1}</span>
                                    </div>
                                    <p className="font-source text-gray-700 leading-relaxed">{objective}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Highlights */}
                    <div className="mb-10">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 bg-linear-to-br from-gfg-accent-orange to-gfg-accent-yellow rounded-xl flex items-center justify-center">
                                <Award className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="font-sofia font-bold text-2xl text-gfg-black">Event Highlights</h3>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-3">
                            {event.highlights.map((highlight, idx) => (
                                <div key={idx} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="w-2 h-2 bg-linear-to-r from-gfg-green to-gfg-ocean rounded-full"></div>
                                    <span className="font-source text-gray-700">{highlight}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Gallery */}
                    <div className="mb-6">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-linear-to-br from-gfg-accent-purple to-gfg-accent-lime rounded-xl flex items-center justify-center">
                                <ImageIcon className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="font-sofia font-bold text-2xl text-gfg-black">Event Gallery</h3>
                        </div>
                    

                        {/* Main image viewer */}
                        <div className="relative mb-4 rounded-2xl overflow-hidden shadow-2xl group">
                            <img 
                                src={event.gallery[currentImageIndex]} 
                                alt={`Gallery ${currentImageIndex + 1}`}
                                className="w-full h-96 object-cover"
                            />

                            {/* Navigation buttons */}
                            {event.gallery.length > 1 && (
                                <>
                                    <button
                                        onClick={prevImage}
                                        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm hover:bg-white rounded-full flex items-center justify-center transition-all shadow-lg opacity-0 group-hover:opacity-100"
                                    >
                                        <ChevronLeft className="w-6 h-6 text-gfg-black" />
                                    </button>
                                    <button
                                        onClick={nextImage}
                                        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm hover:bg-white rounded-full flex items-center justify-center transition-all shadow-lg opacity-0 group-hover:opacity-100"
                                    >
                                        <ChevronRight className="w-6 h-6 text-gfg-black" />
                                    </button>
                                </>
                            )}

                            {/* Image counter */}
                            <div className="absolute bottom-4 right-4 px-4 py-2 bg-gfg-black/80 backdrop-blur-sm rounded-full">
                                <span className="font-source text-white text-sm">
                                    {currentImageIndex + 1} / {event.gallery.length}
                                </span>
                            </div>
                        </div>

                        {/* Thumbnail strip */}
                        <div className="flex gap-3 overflow-x-auto pb-2">
                            {event.gallery.map((img, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentImageIndex(idx)}
                                    className={`shrink-0 w-24 h-24 rounded-xl overflow-hidden border-4 transition-all ${
                                        idx === currentImageIndex 
                                            ? 'border-gfg-green shadow-lg scale-105' 
                                            : 'border-transparent opacity-60 hover:opacity-100'
                                    }`}
                                >
                                    <img src={img} alt={`Thumb ${idx + 1}`} className="w-full h-full object-cover" />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                        {event.tags.map((tag, idx) => (
                            <span 
                                key={idx}
                                className="px-4 py-2 bg-linear-to-r from-gfg-green/10 to-gfg-ocean/10 text-gfg-green font-source font-semibold text-sm rounded-full"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventModal;