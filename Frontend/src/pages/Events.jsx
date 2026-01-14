import React, { useEffect, useState } from 'react';
import EventCard from '../components/EventCard.jsx';
import EventModal from '../components/EventModal.jsx';
import { Calendar, Sparkles, Filter, Search } from 'lucide-react';
import { useLocation } from 'react-router';
import { events } from '../utils/events.js';
import { Helmet } from 'react-helmet';

const Events = () => {

  <Helmet>
    <title>Events & Workshops - GeeksforGeeks Campus Body @ RSCOE</title>
    <meta name="description" content="Explore the exciting events and workshops hosted by the GeeksforGeeks Campus Body at RSCOE. From hackathons to seminars, discover how we bring learning to life!" />
  </Helmet>

  const [selectedEvent, setSelectedEvent] = useState(null);
  const [filterCategory, setFilterCategory] = useState('All');
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.replace('#', '');

    const hashToCategory = {
      'workshops': 'Workshop',
      'hackathons': 'Hackathon',
      'contests': 'Contest',
      'seminars': 'Seminar'
    };

    if (hash && hashToCategory[hash]) {
      setFilterCategory(hashToCategory[hash]);
      setTimeout(() => {
        window.scrollTo({ top: 400, behavior: 'smooth' });
      }, 100);
    }
  }, [location.hash]);

  useEffect(() => {
    scrollTo(0, 0);
  }, []);





  const categories = ['All', 'Workshop', 'Hackathon', 'Seminar', 'Contest'];

  const filteredEvents = filterCategory === 'All'
    ? events
    : events.filter(event => event.category === filterCategory);

  return (
    <div className="min-h-screen bg-linear-to-br from-white via-gfg-gray to-[#f1f8f5]">

      <section className="pt-32 pb-16 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 bg-gfg-green/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-gfg-ocean/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

        <div className="max-w-7xl mx-auto text-center relative z-10">

          <h1 className="font-sofia font-bold text-4xl sm:text-5xl lg:text-6xl text-gfg-black mb-6 leading-tight">
            Events & Workshops That
            <span className="block bg-linear-to-r from-gfg-green via-gfg-ocean to-gfg-navy bg-clip-text text-transparent">
              Shaped Our Community
            </span>
          </h1>

          <p className="font-source text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
            From intensive workshops to exciting hackathons, explore the events that brought
            our community together and transformed learning into unforgettable experiences.
          </p>

          <div className="flex flex-wrap justify-center gap-8 mt-12">
            <div className="text-center">
              <div className="font-sofia font-bold text-4xl text-gfg-green mb-2">{events.length}+</div>
              <div className="font-source text-gray-600">Events Conducted</div>
            </div>
            <div className="text-center">
              <div className="font-sofia font-bold text-4xl text-gfg-ocean mb-2">500+</div>
              <div className="font-source text-gray-600">Students Impacted</div>
            </div>
            <div className="text-center">
              <div className="font-sofia font-bold text-4xl text-gfg-navy mb-2">10+</div>
              <div className="font-source text-gray-600">Hours of Learning</div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-8 px-4 sm:px-6 sticky top-20 z-30 bg-white/80 backdrop-blur-lg border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilterCategory(category)}
                  className={`px-6 py-2.5 rounded-full font-sofia font-bold text-sm transition-all duration-300 ${filterCategory === category
                    ? 'bg-linear-to-r from-gfg-green to-gfg-ocean text-white shadow-lg shadow-gfg-green/30'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="px-5 py-2.5 bg-linear-to-r from-gfg-green/10 to-gfg-ocean/10 rounded-full">
              <span className="font-sofia font-bold text-gfg-green text-sm">
                {filteredEvents.length} {filteredEvents.length === 1 ? 'Event' : 'Events'}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                onClick={setSelectedEvent}
              />
            ))}
          </div>


          {filteredEvents.length === 0 && (
            <div className="text-center py-20">
              <Calendar className="w-20 h-20 text-gray-300 mx-auto mb-4" />
              <p className="font-sofia font-bold text-2xl text-gray-400 mb-2">No events found</p>
              <p className="font-source text-gray-500">Try a different category filter</p>
            </div>
          )}
        </div>
      </section>


      {selectedEvent && (
        <EventModal
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      )}
    </div>
  );
};

export default Events;