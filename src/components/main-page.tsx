import { useState, useEffect } from 'react'

import { motion } from 'framer-motion'
import { ChevronDown, Github, Linkedin, Twitter } from 'lucide-react'

export function MainPageComponent() {
  const [currentWord, setCurrentWord] = useState(0)
  const words = ['Innovate', 'Create', 'Collaborate']
  const [showAlumni, setShowAlumni] = useState(false)

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
  PARADIGM
</h1>
       
      <div className="flex items-center justify-center h-20 mb-8">
  <span className="text-4xl font-light">Where we &nbsp;</span> 
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
              PARADIGM is a student-led tech club at Mayoor School Noida, dedicated to fostering innovation, creativity and collaboration in the tech community. We provide a platform for students to learn, build and share their projects, and connect with like-minded individuals who share a passion for technology.
              </p>
              <h3 className="text-3xl font-semibold text-[#9AFF27] underline underline-offset-8 decoration-4">Our History</h3>
              <p className="text-xl leading-relaxed">
Founded in 2011 by a group of tech enthusiasts, PARADIGM has been revived in 2024 by a new generation of students who are passionate about technology. Over the years, we have successfully organized over 14 editions of our annual inter-school tech symposium Battle Of Titans (BOT) hosting over 1000+ children annually and won numerous awards in various competitions.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://placehold.co/800x600"
                alt="Paradigm Tech Club Team"
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
          <h2 className="mb-16 text-5xl font-bold text-center">Our Achievements</h2>
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
              className={`px-6 py-2 rounded-l-full ${
                !showAlumni ? 'bg-[#9AFF27] text-[#0F0A0A]' : 'bg-[#FCFCFC]/10'
              }`}
            >
              Current Team
            </button>
            <button
              onClick={() => setShowAlumni(true)}
              className={`px-6 py-2 rounded-r-full ${
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
            <div className="flex justify-center ">
              {(showAlumni ? alumniMembers : teamMembers)
                .filter(member => member.position.includes('Vice President'))
                .slice(0, 1)
                .map((member, index) => (
                  <div key={index} className="w-1/2">
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
                .map((member, index) => (
                  <TeamMemberCard key={index} member={member} />
                ))}
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
  twitter?: string;
}

function TeamMemberCard({ member }: { member: Member }) {
  return (
    <div className="bg-[#FCFCFC]/10 rounded-lg overflow-hidden flex">
      <div className="w-[35%]">
        <img
          src={member.image}
          alt={member.name}
          width={400}
          height={400}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="w-[65%] p-6">
        <h3 className="mb-2 text-2xl font-semibold">{member.name}</h3>
        <p className="text-[#9AFF27] mb-4">{member.position}</p>
        <p className="mb-4 text-sm">{member.bio}</p>
        <div className="flex space-x-4">
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
          {member.twitter && (
            <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-[#9AFF27]">
              <Twitter className="w-6 h-6" />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

const achievements = [
  {
    title: "Overall Champions at Wartex #10.0",
    date: "October 28",
    description: "Secured the rolling trophy for the first time at CODE2K24, the annual tech fest hosted by SR DAV School, Dayanand Vihar.",
    image: "https://media.discordapp.net/attachments/853630541571162132/1306332189947990137/code_trophies.jpeg?ex=67364828&is=6734f6a8&hm=ded14c79da4a953932c763eb362d6dd4752d1ccf6748032f7fcace079311e57a&=&format=webp&width=328&height=437"
  },
  {
    title: "Overall Champions at CODE 2K24",
    date: "October 24",
    description: "Secured the rolling trophy for the first time at CODE2K24, the annual tech fest hosted by APJ School, Noida.",
    image: "https://placehold.co/100x100"
  },
  {
    title: "Overall Champions CODE2K24",
    date: "October 24",
    description: "Secured the rolling trophy for the first time at CODE2K24, the annual tech fest hosted by APJ School, Noida.",
    image: "https://placehold.co/100x100"
  },
  {
    title: "Overall Champions CODE2K24",
    date: "October 24",
    description: "Secured the rolling trophy for the first time at CODE2K24, the annual tech fest hosted by APJ School, Noida.",
    image: "https://placehold.co/100x100"
  },
  {
    title: "Tech for Good Award",
    date: "March 2023",
    description: "Received the 'Tech for Good' award for developing an accessible learning platform for underprivileged communities.",
    image: "/placeholder.svg?height=100&width=100"
  },
  {
    title: "500 Member Milestone",
    date: "September 2023",
    description: "Celebrated reaching 500 active members, marking a significant growth in our tech community.",
    image: "/placeholder.svg?height=100&width=100"
  },
  {
    title: "Innovation Grant Recipients",
    date: "January 2024",
    description: "Secured a $50,000 innovation grant to fund our upcoming tech incubator program.",
    image: "/placeholder.svg?height=100&width=100"
  }
  
]

const teamMembers = [
  {
    name: "Medhansh Kapoor",
    position: "President",
    bio: "Ski with my buddies",
    image: "https://media.discordapp.net/attachments/853630541571162132/1306329545279803432/mesite.jpeg?ex=673645b2&is=6734f432&hm=696fb6049956cf97f2249a4f82339debec02e355955cbf08c5b67b26df760a9b&=&format=webp&width=437&height=437",
    github: "https://github.com/alexj",
    linkedin: "https://linkedin.com/in/alexj",
    twitter: "https://twitter.com/alexj"
  },
  {
    name: "Ayaan Hashmi",
    position: "President",
    bio: "Coder by day and hacker by night",
    image: "",
    github: "https://github.com/samlee",
    linkedin: "https://linkedin.com/in/samlee"
  },
  {
    name: "Vansh Bhardwaj",
    position: "Vice President",
    bio: "Dgining iz my Pasion",
    image: "https://placehold.co/400x400",
    github: "https://github.com/samlee",
    linkedin: "https://linkedin.com/in/samlee"
  },
  {
    name: "Michael Chen",
    position: "Member",
    bio: "",
    image: "https://placehold.co/400x400",
    github: "https://github.com/michaelc",
    twitter: "https://twitter.com/michaelc"
  },
  {
    name: "Ehaan Raza Khan",
    position: "Head Editing",
    bio: "UX/UI designer with a knack for creating intuitive and visually appealing interfaces.",
    image: "https://placehold.co/400x400",
    linkedin: "https://linkedin.com/in/emilyw",
    twitter: "https://twitter.com/emilyw"
  },
  {
    name: "Prathamesh Prabhakar",
    position: "Head Development",
    bio: "Marketing guru with experience in digital campaigns and community engagement.",
    image: "https://placehold.co/400x400",
    linkedin: "https://linkedin.com/in/davidp",
    twitter: "https://twitter.com/davidp"
  },
 
   {
    name: "Kunsh Khanna",
    position: "Head Photography",
    bio: "Event planning extraordinaire, passionate about creating memorable tech gatherings.",
    image: "https://placehold.co/400x400",
    linkedin: "https://linkedin.com/in/saraht",
    twitter: "https://twitter.com/saraht"
  },
    {
    name: "Aaradhya Chaturvedi",
    position: "Head Gaming",
    bio: "Event planning extraordinaire, passionate about creating memorable tech gatherings.",
    image: "https://placehold.co/400x400",
    linkedin: "https://linkedin.com/in/saraht",
    twitter: "https://twitter.com/saraht"
  },
     {
    name: "Inesh Agarwal",
    position: "Head AI",
    bio: "Event planning extraordinaire, passionate about creating memorable tech gatherings.",
    image: "https://cdn.discordapp.com/attachments/853630541571162132/1306331215116370011/ineshsite.jpeg?ex=67364740&is=6734f5c0&hm=3baa2553e23eb6073117d8127aed25fd43da660e40d1bb22300eddfed6bb7ae6&",
    linkedin: "https://linkedin.com/in/saraht",
    twitter: "https://twitter.com/saraht"
  },
     {
    name: "Samarth Goyal",
    position: "Head CyberSecurity",
       bio: "I am interested in jgbveih lorem ipsum sdjbfvbfjg ",
    image: "https://placehold.co/400x400",
    github: "https://github.com/michaelc",
    twitter: "https://twitter.com/michaelc"
  },
     {
    name: "Michael Chen",
    position: "Member",
    bio: "",
    image: "https://placehold.co/400x400",
    github: "https://github.com/michaelc",
    twitter: "https://twitter.com/michaelc"
  },
     {
    name: "Michael Chen",
    position: "Member",
    bio: "",
    image: "https://cdn.discordapp.com/attachments/853630541571162132/1306331215116370011/ineshsite.jpeg?ex=67364740&is=6734f5c0&hm=3baa2553e23eb6073117d8127aed25fd43da660e40d1bb22300eddfed6bb7ae6&",
    github: "https://github.com/michaelc",
    twitter: "https://twitter.com/michaelc"
  },
      {
    name: "Michael Chen",
    position: "Member",
    bio: "",
    image: "https://placehold.co/400x400",
    github: "https://github.com/michaelc",
    twitter: "https://twitter.com/michaelc"
  },
      {
    name: "Michael Chen",
    position: "Member",
    bio: "",
    image: "https://placehold.co/400x400",
    github: "https://github.com/michaelc",
    twitter: "https://twitter.com/michaelc"
  },
     {
    name: "Michael Chen",
    position: "Member",
    bio: "",
    image: "https://placehold.co/400x400",
    github: "https://github.com/michaelc",
    twitter: "https://twitter.com/michaelc"
  },
     {
    name: "Michael Chen",
    position: "Member",
    bio: "",
    image: "https://placehold.co/400x400",
    github: "https://github.com/michaelc",
    twitter: "https://twitter.com/michaelc"
  },
      {
    name: "Michael Chen",
    position: "Member",
    bio: "",
    image: "https://placehold.co/400x400",
    github: "https://github.com/michaelc",
    twitter: "https://twitter.com/michaelc"
  },
  // Add more team members as needed to fill out the grid
]

const alumniMembers = [
  {
    name: "Mohammad Arquam",
    position: "Former President",
    bio: "Now working as a Senior Software Engineer at Google.",
    image: "https://placehold.co/400x400",
    linkedin: "https://linkedin.com/in/emilyrodriguez"
  },
  {
    name: "Mohammed Rayyan",
    position: "Former President ",
    bio: "Co-founder of a successful AI startup in Silicon Valley.",
    image: "https://placehold.co/400x400",
    twitter: "https://twitter.com/davidkim"
  },
  {
    name: "Vitthal Aggarwal",
    position: "Former Vice President",
    bio: "Currently pursuing a Ph.D. in Computer Science at MIT.",
    image: "https://placehold.co/400x400",
    github: "https://github.com/saraht",
    linkedin: "https://linkedin.com/in/saraht"
  },
  // Add more alumni members as needed to fill out the grid
]