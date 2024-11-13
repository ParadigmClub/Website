import { Flag, Code,Palette, Globe,Aperture, Shield, Cpu,Speech, Database,Youtube, Smartphone, Zap, PenTool, Headphones } from 'lucide-react'

const domains = [
  { name: "Programming", icon: Code, description: "Engage in cybersecurity challenges and hone your hacking skills." },
  { name: "Web Development", icon: Globe, description: "Master the art of creating responsive and dynamic websites." },
  { name: "UI/UX Design", icon: PenTool, description: "Learn to protect systems, networks, and programs from digital attacks." },
  { name: "Video Editing", icon: Youtube  , description: "Explore the world of machine learning and intelligent systems." },
  { name: "Group Discussion", icon: Speech, description: "Analyze and interpret complex data to solve real-world problems." },
  { name: "Quizzing", icon: Smartphone, description: "Create innovative applications for iOS and Android platforms." },
  { name: "Cryptic Hunts", icon: Zap, description: "Connect and control devices through internet-based systems." },
  { name: "Graphic Design", icon: Palette, description: "Design intuitive and visually appealing user interfaces." },
  { name: "Music Mixing", icon: Headphones, description: "Understand the technology behind cryptocurrencies and decentralized systems." },
  { name: "Photography", icon: Aperture, description: "Develop audio applications and explore sound engineering." },
]

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
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-[#9AFF27] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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