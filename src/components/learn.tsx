import { Code, Globe, Palette, Video, Users, HelpCircle, Search, Image, Music, Camera } from 'lucide-react';

const domains = [
  { 
    name: "Programming", 
    icon: Code, 
    description: "Discover the foundations of coding and software development, covering languages, algorithms, and problem-solving." 
  },
  { 
    name: "Web Development", 
    icon: Globe, 
    description: "Learn to create responsive and dynamic websites with skills in HTML, CSS, JavaScript, and frameworks." 
  },
  { 
    name: "UI/UX Design", 
    icon: Palette, 
    description: "Dive into user experience and interface design to make digital products both functional and visually appealing." 
  },
  { 
    name: "Video Editing", 
    icon: Video, 
    description: "Explore editing techniques, transitions, and effects to create engaging videos and animations." 
  },
  { 
    name: "Group Discussion", 
    icon: Users, 
    description: "Improve communication and analytical skills by participating in discussions on various topics to enhance critical thinking." 
  },
  { 
    name: "Quizzing", 
    icon: HelpCircle, 
    description: "Test and expand your knowledge on diverse topics, ranging from general knowledge to specific subjects." 
  },
  { 
    name: "Cryptic Hunts", 
    icon: Search, 
    description: "Solve puzzles and decipher clues in challenging hunts that require logical thinking and attention to detail." 
  },
  { 
    name: "Graphic Design", 
    icon: Image, 
    description: "Create eye-catching visuals and graphics for branding, advertisements, or social media." 
  },
  { 
    name: "Music Mixing", 
    icon: Music, 
    description: "Learn the basics of audio engineering and production to mix and create music tracks." 
  },
  { 
    name: "Photography", 
    icon: Camera, 
    description: "Understand photography basics, including lighting, composition, and editing, to capture compelling images." 
  },
];


export function Learn() {
  return (
    <div className="min-h-screen bg-[#0F0A0A] text-[#FCFCFC] py-24 px-6 md:px-12 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-5xl md:text-6xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#9AFF27] to-cyan-400">
          Explore Our Tech Domains
        </h1>
        <p className="text-xl text-center mb-16 text-[#FCFCFC]/80 max-w-3xl mx-auto">
          Dive into the cutting-edge realms of technology. Each domain offers unique challenges and opportunities for growth.
        </p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {domains.map((domain, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] p-1">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-[#9AFF27] opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
              <div className="relative bg-[#0F0A0A] p-6 rounded-xl h-full flex flex-col justify-between z-10">
                <div>
                  <div className="flex items-center mb-4">
                    <domain.icon className="w-10 h-10 mr-4 text-[#9AFF27] group-hover:text-cyan-400 transition-colors duration-300" />
                    <h2 className="text-2xl font-bold">{domain.name}</h2>
                  </div>
                  <p className="text-[#FCFCFC]/80 mb-6">{domain.description}</p>
                </div>
                <button className="self-start px-4 py-2 bg-gradient-to-r from-cyan-400 to-[#9AFF27] text-[#0F0A0A] font-semibold rounded-md transform hover:scale-105 transition-transform duration-300">
                  Explore
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}