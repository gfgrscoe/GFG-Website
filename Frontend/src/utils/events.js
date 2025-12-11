import gre from '../assets/gre.jpg';
import workshop3d from '../assets/3dworkshop.jpg';
import workshop3d1 from '../assets/3dworkshop1.jpg';
import workshop3d2 from '../assets/3dworkshop2.jpg';
import workshop3d3 from '../assets/3dworkshop3.jpg';
import Researchp from '../assets/Reserachpaper.jpg';
import Researchp2 from '../assets/Researchp2.jpg';
import grecover from '../assets/grecover.jpg';
import gre2 from '../assets/gre2.jpg';
import gre3 from '../assets/gre3.jpg';
import gre1 from '../assets/gre1.jpg';
import workshopcover from '../assets/3dfullstack.jpg';
import genai from '../assets/genai.jpg';


export const events = [
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
        Researchp,
        Researchp2,
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
      thumbnail: grecover,
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
        grecover,
        gre,
        gre1,
        gre2,
        gre3
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
      thumbnail: workshopcover,
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
        workshopcover,
        workshop3d,
        workshop3d1,
        workshop3d2,
        workshop3d3
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
      thumbnail: genai,
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
        genai      ]
    }
  ];