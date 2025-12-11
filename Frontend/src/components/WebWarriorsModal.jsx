import React from 'react';
import { X, Github, Linkedin, Mail, ExternalLink, Code, Heart, Sparkles } from 'lucide-react';

const WebWarriorsModal = ({ isOpen, onClose, contributors }) => {
  if (!isOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 animate-fadeIn"
        onClick={onClose}
      ></div>

      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        <div 
          className="relative w-full max-w-5xl max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden pointer-events-auto animate-slideUp"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-10 p-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-900 transition-all group"
          >
            <X className="w-5 h-5 group-hover:rotate-90 transition-transform" />
          </button>

          <div className="relative overflow-y-auto max-h-[90vh] custom-scrollbar">
            <div className="bg-gradient-to-r from-gfg-green to-gfg-ocean px-8 py-10">
              <div className="flex items-center justify-center gap-4 mb-3">
                <div>
                  <h2 className="text-4xl font-sofia font-bold text-white mb-1">Web Warriors</h2>
                  <p className="text-base ml-7 text-white/90 font-source">The minds behind this website</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-2 text-sm text-white/80 font-source">
                <Heart className="w-4 h-4 text-red-300 fill-red-300" />
                <span>Built with passion and dedication</span>
              </div>
            </div>

            <div className="p-8 bg-gray-50">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {contributors.map((contributor, idx) => (
                  <div 
                    key={idx}
                    className="group relative bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl hover:border-gfg-green transition-all duration-300 hover:-translate-y-2"
                  >
                    <div className="p-6">
                      <div className="relative mb-4">
                        <div className="relative w-24 h-24 mx-auto bg-gradient-to-br from-gfg-green to-gfg-ocean rounded-full p-1 shadow-lg">
                          {contributor.avatar ? (
                            <img 
                              src={contributor.avatar} 
                              alt={contributor.name}
                              className="w-full h-full rounded-full object-cover bg-white"
                            />
                          ) : (
                            <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                              <span className="text-3xl font-sofia font-bold text-gfg-green">
                                {contributor.name.charAt(0)}
                              </span>
                            </div>
                          )}
                        </div>
                        {contributor.role && (
                          <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                            <span className="px-4 py-1.5 bg-gradient-to-r from-gfg-green to-gfg-ocean text-white text-xs font-sofia font-bold rounded-full shadow-md whitespace-nowrap">
                              {contributor.role}
                            </span>
                          </div>
                        )}
                      </div>

                      <div className="text-center mt-8 mb-4">
                        <h3 className="font-sofia font-bold text-xl text-gray-900 mb-1">
                          {contributor.name}
                        </h3>
                        {contributor.title && (
                          <p className="text-sm text-gray-600 font-source mb-2">
                            {contributor.title}
                          </p>
                        )}
                        {contributor.description && (
                          <p className="text-xs text-gray-500 font-source mt-3 leading-relaxed">
                            {contributor.description}
                          </p>
                        )}
                      </div>

                      {contributor.techStack && contributor.techStack.length > 0 && (
                        <div className="mb-4">
                          <p className="text-xs text-gray-500 font-source font-semibold mb-2 text-center">Tech Stack</p>
                          <div className="flex flex-wrap gap-1.5 justify-center">
                            {contributor.techStack.map((tech, i) => (
                              <span 
                                key={i}
                                className="px-2.5 py-1 bg-gfg-green/10 text-gfg-green border border-gfg-green/20 text-xs font-source font-semibold rounded-lg"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="flex items-center justify-center gap-3 pt-4 border-t border-gray-200">
                        {contributor.github && (
                          <a
                            href={contributor.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 rounded-lg bg-gray-100 hover:bg-gray-900 hover:text-white text-gray-700 transition-all group/link"
                            title="GitHub"
                          >
                            <Github className="w-4 h-4 group-hover/link:scale-110 transition-transform" />
                          </a>
                        )}
                        {contributor.linkedin && (
                          <a
                            href={contributor.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 rounded-lg bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 transition-all group/link"
                            title="LinkedIn"
                          >
                            <Linkedin className="w-4 h-4 group-hover/link:scale-110 transition-transform" />
                          </a>
                        )}
                        {contributor.email && (
                          <a
                            href={`mailto:${contributor.email}`}
                            className="p-2.5 rounded-lg bg-gray-100 hover:bg-gfg-ocean hover:text-white text-gray-700 transition-all group/link"
                            title="Email"
                          >
                            <Mail className="w-4 h-4 group-hover/link:scale-110 transition-transform" />
                          </a>
                        )}
                        {contributor.portfolio && (
                          <a
                            href={contributor.portfolio}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 rounded-lg bg-gray-100 hover:bg-gfg-green hover:text-white text-gray-700 transition-all group/link"
                            title="Portfolio"
                          >
                            <ExternalLink className="w-4 h-4 group-hover/link:scale-110 transition-transform" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #00895e;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #006644;
        }
      `}</style>
    </>
  );
};

export default WebWarriorsModal;
