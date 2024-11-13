import { useState } from 'react'
import { Github, Figma, Framer, Globe, Code, Search } from 'lucide-react'


const projects = [
  {
    name: "StreetScout",
    description: "A mobile app for reporting and tracking damage to public property",
    type: "github",
    link: "https://github.com/paradigm-tech/ecotrack",
    image: "https://placehold.co/600x400",
    tags: ["React Native", "Node.js", "MongoDB"]
  },
   {
    name: "Whispering Shadows",
    description: "A short film dwelling into the old noir and mystery genre in a modern setting inspired by dan brown",
    type: "github",
    link: "https://github.com/paradigm-tech/ecotrack",
    image: "https://placehold.co/600x400",
    tags: ["Film", "AfterEffects", "DSLR"]
  },
   {
    name: "Let it Happen",
    description: "A short film devoid of dialogue exploring the ramifications of social media addiction ",
    type: "github",
    link: "https://github.com/paradigm-tech/ecotrack",
    image: "https://placehold.co/600x400",
    tags: ["Film", "DSLR", "AfterEffects"]
  },
  {
    name: "Cyber Security 101",
    description: "Website crafted to educate beginners about cybersecurity",
    type: "github",
    link: "https://www.figma.com/file/smarthomehub",
    image: "https://placehold.co/600x400",
    tags: ["React", "Tailwind", "Cybersecurity"]
  },
  {
    name: "SmartHome Hub",
    description: "IoT dashboard for home automation",
    type: "figma",
    link: "https://www.figma.com/file/smarthomehub",
    image: "https://placehold.co/600x400",
    tags: ["IoT", "Dashboard", "UX Design"]
  },
  {
    name: "CodeMentor",
    description: "Peer-to-peer coding mentorship platform",
    type: "github",
    link: "https://github.com/paradigm-tech/codementor",
    image: "https://placehold.co/600x400",
    tags: ["Vue.js", "Express", "WebRTC"]
  },
  {
    name: "ArtificialCanvas",
    description: "AI-generated art collaboration tool",
    type: "behance",
    link: "https://www.behance.net/gallery/artificialcanvas",
    image: "https://placehold.co/600x400",
    tags: ["Generative AI", "Collaboration", "Art"]
  }
]

export function Projects() {
  const [filter, setFilter] = useState('')

  const filteredProjects = projects.filter(project =>
    project.name.toLowerCase().includes(filter.toLowerCase()) ||
    project.description.toLowerCase().includes(filter.toLowerCase()) ||
    project.tags.some(tag => tag.toLowerCase().includes(filter.toLowerCase()))
  )

  const getIcon = (type) => {
    switch (type) {
      case 'github':
        return <Github className="w-6 h-6" />
      case 'behance':
        return <Framer className="w-6 h-6" />
      case 'figma':
        return <Figma className="w-6 h-6" />
      default:
        return <Globe className="w-6 h-6" />
    }
  }

  return (
    <div className="min-h-screen bg-[#0F0A0A] text-[#FCFCFC] py-24 px-6 md:px-12 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-5xl md:text-6xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#9AFF27] to-cyan-400">
          Our Innovative Projects
        </h1>
        <p className="text-xl text-center mb-16 text-[#FCFCFC]/80 max-w-3xl mx-auto">
          Explore the cutting-edge projects developed by our talented members, showcasing our skills and creativity.
        </p>

        <div className="relative mb-12">
          <input
            type="text"
            placeholder="Search projects..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full py-3 px-4 pl-12 bg-[#1A1A1A] rounded-lg text-[#FCFCFC] focus:outline-none focus:ring-2 focus:ring-[#9AFF27]"
          />
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#FCFCFC]/60" />
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] p-1">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-[#9AFF27] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-[#0F0A0A] rounded-xl overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  width={600}
                  height={400}
                  className="object-cover w-full h-48"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold">{project.name}</h2>
                    {getIcon(project.type)}
                  </div>
                  <p className="text-[#FCFCFC]/80 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-2 py-1 bg-[#9AFF27]/20 text-[#9AFF27] text-sm rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-400 to-[#9AFF27] text-[#0F0A0A] font-semibold rounded-md transform hover:scale-105 transition-transform duration-300"
                  >
                    View Project <Code className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}