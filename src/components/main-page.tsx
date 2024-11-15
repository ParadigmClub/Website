import { useState, useEffect } from 'react'

import { motion } from 'framer-motion'
import { ChevronDown, Figma, Github, Globe, Instagram, Linkedin, } from 'lucide-react'
import { achievements } from './achievements'
import { teamMembers } from './teamMembers'
import { alumniMembers } from './alumniMembers'

export function MainPageComponent() {
  const [currentWord, setCurrentWord] = useState(0)
  const words = ['Do', 'Dream',]
  const [showAlumni, setShowAlumni] = useState(false)
    const [showAllMembers, setShowAllMembers] = useState(false)
  

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-[#0F0A0A] text-[#FCFCFC]">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center h-screen overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="h-full w-full bg-gradient-to-br from-[#0F0A0A] to-[#1A1A1A]">
            <div className="grid w-full h-full grid-cols-12 grid-rows-6">
              {[...Array(72)].map((_, i) => (
                <div key={i} className="border-[0.5px] border-[#9AFF27]/10"></div>
              ))}
            </div>
          </div>
        </div>
        <div className="z-10 mb-2 text-center">
         <h1 className="text-6xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-[#9AFF27] to-cyan-400 leading-relaxed">
  PARADIGM Club
</h1>
       
      <div className="flex items-center justify-center h-20 mb-8">
  <span className="text-4xl font-light">To dare is to &nbsp;</span> 
  <motion.p
    key={currentWord}
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: -20, opacity: 0 }}
    transition={{ duration:  0.5 }}
    className="text-4xl font-light"
  >
    <span className="pb-1 font-bold rounded-sm text-slate-50 bg-fuchsia-500">&nbsp; {words[currentWord]} &nbsp; </span>
  </motion.p>
</div>
          <div className="flex justify-center space-x-4">
            <a href="/learn" className="px-6 py-3 bg-[#9AFF27] text-[#0F0A0A] font-semibold rounded-md hover:bg-[#8AEF17] transition-colors">
              Learn More
            </a>
            <a href="/events" className="px-6 py-3 bg-cyan-400 text-[#0F0A0A] font-semibold rounded-md hover:bg-cyan-300 transition-colors">
              The Team
            </a>
            <a href="/join" className="px-6 py-3 border-2 border-[#FCFCFC] text-[#FCFCFC] font-semibold rounded-md hover:bg-[#FCFCFC] hover:text-[#0F0A0A] transition-colors">
              Join Us
            </a>
          </div>
        </div>
        <motion.div
          className="absolute transform -translate-x-1/2 bottom-8 left-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown className="w-8 h-8 text-cyan-400" />
        </motion.div>
      </section>

      {/* About Section */}
      <section className="px-8 py-32 md:px-16">
        <div className="container mx-auto">
          <h2 className="mb-16 text-5xl font-bold text-center">About Us</h2>
          <div className="flex flex-col items-center gap-16 md:flex-row">
            <div className="space-y-8 md:w-1/2">
              <h3 className="text-3xl font-semibold text-[#9AFF27] underline underline-offset-8 decoration-4">Who We Are</h3>
              <p className="text-xl leading-relaxed ">
              Paradigm is a student-led tech club at Mayoor School Noida, dedicated to fostering innovation, creativity and collaboration in the tech community. We provide a platform for students to learn, build and share their projects, and connect with like-minded individuals who share a passion for technology.
              </p>
              <h3 className="text-3xl font-semibold text-[#9AFF27] underline underline-offset-8 decoration-4">Our History</h3>
              <p className="text-xl leading-relaxed">
Founded in 2011 by a group of tech enthusiasts, Paradigm has been revived in 2024 by a new generation of students who are passionate about technology. Over the years, we have successfully organized over 14 editions of our premier inter school event BOT hosting over 1000+ children annually and won numerous awards in various competitions.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://media.discordapp.net/attachments/1159888188228259930/1306661530581860402/1000024701.png?ex=67377ae1&is=67362961&hm=4851d6de655584b51e3dae98954069ed346903008d084c1cb67c7de69068a8bb&=&format=webp&quality=lossless&width=936&height=702"
                alt="The Team"
                width={800}
                height={600}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-32 bg-[#0F0A0A]/50">
        <div className="container mx-auto">
          <h2 className="mb-16 text-5xl font-bold text-center">Our Accolades</h2>
          <div className="relative overflow-x-auto">
            <div className="flex gap-8 pb-4 overflow-x-auto custom-scrollbar">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex-shrink-0 w-80 bg-[#FCFCFC]/10 p-6 rounded-lg">
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    width={100}
                    height={100}
                    className="mb-4 rounded h-28 w-28 "
                  />
                  <h3 className="text-xl font-semibold mb-2 text-[#9AFF27]">{achievement.title}</h3>
                  <p className="mb-2 text-sm text-cyan-400">{achievement.date}</p>
                  <p className="text-sm">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
       <section className="px-8 py-32 md:px-16">
        <div className="container mx-auto">
          <h2 className="mb-16 text-5xl font-bold text-center">Our Team</h2>
          <div className="flex justify-center mb-8">
            <button
              onClick={() => setShowAlumni(false)}
              className={`px-6 py-2 rounded-l-2xl ${
                !showAlumni ? 'bg-[#9AFF27] text-[#0F0A0A]' : 'bg-[#FCFCFC]/10'
              }`}
            >
              Current Team
            </button>
            <button
              onClick={() => setShowAlumni(true)}
              className={`px-6 py-2 rounded-r-2xl ${
                showAlumni ? 'bg-[#9AFF27] text-[#0F0A0A]' : 'bg-[#FCFCFC]/10'
              }`}
            >
              Alumni
            </button>
          </div>
          <div className="space-y-8">
            {/* Presidents */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {(showAlumni ? alumniMembers : teamMembers)
                .filter(member => member.position.includes('President'))
                .slice(0, 2)
                .map((member, index) => (
                  <TeamMemberCard key={index} member={member} />
                ))}
            </div>
            {/* Vice President */}
            <div className="flex justify-center">
              {(showAlumni ? alumniMembers : teamMembers)
                .filter(member => member.position.includes('Vice President'))
                .slice(0, 1)
                .map((member, index) => (
                  <div key={index} className="w-full md:w-1/2">
                    <TeamMemberCard member={member} />
                  </div>
                ))}
            </div>
            {/* Heads */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {(showAlumni ? alumniMembers : teamMembers)
                .filter(member => member.position.includes('Head'))
                .slice(0, 9)
                .map((member, index) => (
                  <TeamMemberCard key={index} member={member} />
                ))}
            </div>
            {/* Other Members */}
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
              {(showAlumni ? alumniMembers : teamMembers)
                .filter(member => !member.position.includes('President') && !member.position.includes('Head'))
                .slice(0, showAllMembers ? undefined : 0)
                .map((member, index) => (
                  <TeamMemberCard key={index} member={member} />
                ))}
              {!showAllMembers && (showAlumni ? alumniMembers : teamMembers).filter(member => !member.position.includes('President') && !member.position.includes('Head')).length > 3 && (
                <div className="relative col-span-1 sm:col-span-2 md:col-span-4">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F0A0A] to-transparent"></div>
                  <button
                    onClick={() => setShowAllMembers(true)}
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 px-6 py-3 bg-[#9AFF27] text-[#0F0A0A] font-semibold rounded-md hover:bg-[#8AEF17] transition-colors flex items-center"
                  >
                    See All Members
                    <ChevronDown className="w-5 h-5 ml-2" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

interface Member {
  name: string;
  position: string;
  bio: string;
  image: string;
  github?: string;
  linkedin?: string;
  website?: string;
  behance?: string;
insta?: string;
}

function TeamMemberCard({ member }: { member: Member }) {
  return (
    <div className="bg-[#FCFCFC]/10 rounded-lg overflow-hidden flex flex-col md:flex-row">
      <div className="md:w-[35%]">
        <img
          src={member.image}
          alt={member.name}
          width={400}
          height={400}
          className="object-cover w-full h-64 md:h-full"
        />
      </div>
      <div className="w-full md:w-[65%] p-6">
        <h3 className="mb-2 text-2xl font-semibold">{member.name}</h3>
        <p className="text-[#9AFF27] mb-4">{member.position}</p>
        <p className="mb-4 text-sm">{member.bio}</p>
        <div className="flex space-x-4">
            {member.website && (
            <a href={member.website} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-[#9AFF27]">
              <Globe className="w-6 h-6" />
            </a>
          )}
          {member.github && (
            <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-[#9AFF27]">
              <Github className="w-6 h-6" />
            </a>
          )}
          {member.linkedin && (
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-[#9AFF27]">
              <Linkedin className="w-6 h-6" />
            </a>
          )}
            {member.behance && (
            <a href={member.behance} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-[#9AFF27]">
              <Figma className="w-6 h-6" />
            </a>
          )}
              {member.insta && (
            <a href={member.insta} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-[#9AFF27]">
              <Instagram className="w-6 h-6" />
            </a>
          )}
         
        </div>
      </div>
    </div>
  )
}

