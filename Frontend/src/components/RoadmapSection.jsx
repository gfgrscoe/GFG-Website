import React, { useState } from 'react';
import { CheckCircle, Circle, ChevronDown, ChevronUp } from 'lucide-react';
import { ExternalLink } from 'lucide-react';
const RoadmapSection = ({ roadmap }) => {
    const [expandedSteps, setExpandedSteps] = useState([]);

    const toggleStep = (index) => {
        if (expandedSteps.includes(index)) {
            setExpandedSteps(expandedSteps.filter(i => i !== index));
        } else {
            setExpandedSteps([...expandedSteps, index]);
        }
    };

    return (
        <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gfg-green via-gfg-ocean to-gfg-navy hidden md:block"></div>

            {/* Steps */}
            <div className="space-y-6">
                {roadmap.steps.map((step, index) => {
                    const isExpanded = expandedSteps.includes(index);
                    const isCompleted = step.completed || false;

                    return (
                        <div key={index} className="relative">
                            {/* Timeline dot */}
                            <div className="absolute left-0 md:left-6 w-4 h-4 mt-2">
                                <div className={`w-full h-full rounded-full ${isCompleted ? 'bg-gfg-green' : 'bg-white border-2 border-gfg-ocean'} shadow-lg`}></div>
                            </div>

                            {/* Card */}
                            <div className="ml-8 md:ml-14">
                                <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
                                    {/* Header - Clickable */}
                                    <button
                                        onClick={() => toggleStep(index)}
                                        className="w-full p-6 text-left flex items-start justify-between hover:bg-gray-50 transition-colors"
                                    >
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-2">
                                                <span className="px-3 py-1 bg-gradient-to-r from-gfg-green to-gfg-ocean text-white font-sofia font-bold text-xs rounded-full">
                                                    Step {index + 1}
                                                </span>
                                                <span className="font-source text-xs text-gray-500">
                                                    {step.duration}
                                                </span>
                                            </div>
                                            <h4 className="font-sofia font-bold text-xl text-gfg-black mb-2">
                                                {step.title}
                                            </h4>
                                            <p className="font-source text-gray-600 text-sm">
                                                {step.description}
                                            </p>
                                        </div>

                                        <div className="ml-4">
                                            {isExpanded ? (
                                                <ChevronUp className="w-6 h-6 text-gfg-green" />
                                            ) : (
                                                <ChevronDown className="w-6 h-6 text-gray-400" />
                                            )}
                                        </div>
                                    </button>

                                    {/* Expanded content */}
                                    {isExpanded && (
                                        <div className="px-6 pb-6 border-t border-gray-100 animate-slideDown">
                                            {/* Topics */}
                                            {step.topics && (
                                                <div className="mt-4 mb-4">
                                                    <h5 className="font-sofia font-bold text-sm text-gfg-black mb-3">Topics to Cover:</h5>
                                                    <div className="grid sm:grid-cols-2 gap-2">
                                                        {step.topics.map((topic, idx) => (
                                                            <div key={idx} className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
                                                                <CheckCircle className="w-4 h-4 text-gfg-green shrink-0" />
                                                                <span className="font-source text-sm text-gray-700">{topic}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}

                                            {/* Resources */}
                                            {step.resources && (
                                                <div>
                                                    <h5 className="font-sofia font-bold text-sm text-gfg-black mb-3">Recommended Resources:</h5>
                                                    <div className="space-y-2">
                                                        {step.resources.map((resource, idx) => (
                                                            <a
                                                                key={idx}
                                                                href={resource.link}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="flex items-center justify-between p-3 bg-gradient-to-r from-gfg-green/5 to-gfg-ocean/5 hover:from-gfg-green/10 hover:to-gfg-ocean/10 rounded-lg transition-all group/link"
                                                            >
                                                                <span className="font-source text-sm text-gfg-black">{resource.name}</span>
                                                                <ExternalLink className="w-4 h-4 text-gfg-green transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                                                            </a>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default RoadmapSection;