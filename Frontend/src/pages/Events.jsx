import React, { useEffect, useState } from 'react';
import EventCard from '../components/EventCard.jsx';
import EventModal from '../components/EventModal.jsx';
import { Calendar, Sparkles, Filter, Search } from 'lucide-react';
import gre from '../assets/gre.jpg';
import workshop3d from '../assets/3dworkshop.jpg';
import Researchp from '../assets/Reserachpaper.jpg';
import { useLocation } from 'react-router';


const Events = () => {
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
      // Smooth scroll to top of events section
      setTimeout(() => {
        window.scrollTo({ top: 400, behavior: 'smooth' });
      }, 100);
    }
  }, [location.hash]);

  // Sample events data - REPLACE WITH YOUR ACTUAL DATA
  const events = [
    {
      id: 1,
      title: "How to Make Research Papers – Expert Session",
      category: "Workshop",
      date: { day: "07", month: "Oct", year: "2024" },
      duration: "1 Hour",
      attendees: "100+",
      location: "JSPM’s RSCOE",
      thumbnail: Researchp,
      brief:
        "A focused, highly informative session on research paper writing by Dr. Prema Sahane, covering structure, ethics, and academic writing.",
      summary:
        "The session explained the complete structure of research papers: introduction, literature review, methodology, results, conclusion, and referencing. Students also learned academic integrity, topic selection, writing clarity, and time management.",
      objectives: [
        "Understand full structure of a research paper",
        "Learn academic integrity & citation rules",
        "Improve topic selection and literature review skills",
        "Enhance academic writing clarity and precision",
        "Gain time management strategies"
      ],
      highlights: [
        "Detailed breakdown of research paper components",
        "Interactive Q&A session",
        "Guidance on academic writing style",
        "Real examples explained",
        "Improved student confidence in research writing"
      ],
      tags: ["Research", "Paper Writing", "Academics", "Methodology"],
      gallery: [
        "https://via.placeholder.com/800x600"
      ]
    },

    {
      id: 2,
      title: "GRE Information Session & Mock Exam",
      category: "Seminar",
      date: { day: "24", month: "Sep", year: "2024" },
      duration: "2 Hours (Session + Mock)",
      attendees: 237,
      location: "MBA Seminar Hall, JSPM’s RSCOE",
      thumbnail: gre,
      brief:
        "A GRE preparation session conducted by Ms. Sanika Shinde from IMFS, followed by a real mock GRE exam.",
      summary:
        "The session explained GRE structure, preparation strategies, resources, and universities accepting GRE. Students took a timed mock exam in classroom settings. Top performers were recognized, and spot assessments for US universities were offered.",
      objectives: [
        "Explain GRE structure and sections",
        "Provide preparation strategies and useful resources",
        "Help students understand GRE importance for admissions",
        "Offer real mock exam experience",
        "Enable students to assess strengths and weaknesses"
      ],
      highlights: [
        "237 students participated",
        "Full simulated mock GRE exam",
        "Top 3 performers rewarded",
        "Spot assessment for US universities",
        "Insights on scholarships & fee waivers"
      ],
      tags: ["GRE", "Abroad Studies", "Exam Prep", "Mock Test"],
      gallery: [
        "https://via.placeholder.com/800x600"
      ]
    },

    {
      id: 3,
      title: "3D App Development Workshop",
      category: "Workshop",
      date: { day: "11", month: "Jan", year: "2025" },
      duration: "3 Hours",
      attendees: "100+",
      location: "First Year Seminar Hall, B-Building, JSPM’s RSCOE",
      thumbnail: "https://via.placeholder.com/800x600",
      brief:
        "Hands-on workshop introducing students to 3D modeling and 3D application development using Unity and Blender.",
      summary:
        "Mr. Sahil Kandhare introduced 3D app development concepts, demonstrated 3D modeling, textures, object manipulation, and integration into apps. Real-life fintech 3D use cases were shown, followed by a Q&A and networking session.",
      objectives: [
        "Introduce fundamentals of 3D app development",
        "Teach basics of 3D modeling",
        "Use Unity & Blender for 3D projects",
        "Show real-world applications of 3D apps",
        "Guide students toward innovation in 3D development"
      ],
      highlights: [
        "Hands-on modeling with Unity & Blender",
        "Real fintech case studies",
        "Interactive Q&A session",
        "Career guidance in 3D development",
        "Strong student engagement"
      ],
      tags: ["3D Development", "Unity", "Blender", "App Development"],
      gallery: [
        "https://via.placeholder.com/800x600"
      ]
    },

    {
      id: 4,
      title: "Generative AI & ChatGPT Workshop",
      category: "Workshop",
      date: { day: "14", month: "Jul", year: "2024" },
      duration: "Not specified",
      attendees: 150,
      location: "Virtual Session",
      thumbnail: "https://via.placeholder.com/800x600",
      brief:
        "A virtual session by GFG Mentor Mr. Sahil Garg on the power of Generative AI and practical applications of ChatGPT.",
      summary:
        "The session introduced students to Generative AI, its applications across industries, and how mastering tools like ChatGPT boosts career opportunities. Students actively engaged in discussions and received official GfG e-certificates.",
      objectives: [
        "Introduce students to Generative AI",
        "Explain real-world AI applications",
        "Highlight career opportunities in AI",
        "Encourage student engagement",
        "Provide industry-recognized certification"
      ],
      highlights: [
        "150+ attendees",
        "Delivered by official GFG mentor",
        "Deep dive into ChatGPT applications",
        "Q&A discussion",
        "Official E-certificates provided"
      ],
      tags: ["AI", "ChatGPT", "Generative AI", "Technology"],
      gallery: [
        "https://via.placeholder.com/800x600"
      ]
    }
  ];


  const categories = ['All', 'Workshop', 'Hackathon', 'Seminar', 'Contest'];

  const filteredEvents = filterCategory === 'All'
    ? events
    : events.filter(event => event.category === filterCategory);

  return (
    <div className="min-h-screen bg-linear-to-br from-white via-gfg-gray to-[#f1f8f5]">

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 relative overflow-hidden">
        {/* Animated background blobs */}
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

          {/* Stats */}
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

      {/* Filter Section */}
      <section className="py-8 px-4 sm:px-6 sticky top-20 z-30 bg-white/80 backdrop-blur-lg border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* Category filters */}
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

            {/* Event count */}
            <div className="px-5 py-2.5 bg-linear-to-r from-gfg-green/10 to-gfg-ocean/10 rounded-full">
              <span className="font-sofia font-bold text-gfg-green text-sm">
                {filteredEvents.length} {filteredEvents.length === 1 ? 'Event' : 'Events'}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Events Grid */}
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

          {/* No results */}
          {filteredEvents.length === 0 && (
            <div className="text-center py-20">
              <Calendar className="w-20 h-20 text-gray-300 mx-auto mb-4" />
              <p className="font-sofia font-bold text-2xl text-gray-400 mb-2">No events found</p>
              <p className="font-source text-gray-500">Try a different category filter</p>
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
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