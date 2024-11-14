import { Mail, Phone, MapPin, Instagram, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#0F0A0A] to-[#1A1A1A] text-[#FCFCFC] relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 bg-[url('/footerbg.png')] bg-cover bg-center opacity-50"></div>

      <div className="container relative z-10 px-8 py-20 mx-auto">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-24">
          {/* Left Column - About */}
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <img
                src="/logowhite.png"
                alt="Paradigm Tech Club Logo"
                width={80}
                height={80}
                className="rounded-lg"
              />
              <div>
                <h2 className="text-3xl font-bold ">
                  PARADIGM
                </h2>
                <p className="text-base ">Audere Est Facere | To dare is to do</p>
              </div>
            </div>
            <p className="text-lg leading-relaxed 0">
              Paradigm established in 2011 is a tech club that aims to provide a platform for students to explore and learn about the latest technologies.   We also provide mentorship and guidance to students who are interested in pursuing a career in technology. Our goal is to create a community of tech enthusiasts who are passionate about learning and sharing their knowledge with others.
            </p>
          </div>

          {/* Right Column - Contact */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold ">Contact Us</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="flex-shrink-0 w-6 h-6" />
                <p className="text-lg ">
                  Mayoor School Noida,<br />
                  Sector 126 Noida, Uttar Pradesh, India
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-4">
                  <Phone className="flex-shrink-0 w-6 h-6" />
                  <div>
                    <p className="text-lg ">+91 98914 35310</p>
                    <p className="text-sm ">(Mrs. Ranjana Bajaj - CS HOD)</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="flex-shrink-0 w-6 h-6" />
                  <div>
                    <p className="text-[#FCFCFC]/80 text-lg">+91 97172 91341</p>
                    <p className="text-sm ">(Medhansh Kapoor - President)</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Instagram className="flex-shrink-0 w-6 h-6" />
                <a href="https://instagram.com/paradigm_tech" target="_blank" rel="noopener noreferrer" 
                   className="text-lg transition-colors ">
                  @paradigxm
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="flex-shrink-0 w-6 h-6" />
                <a href="mailto:contact@paradigmtech.club" 
                   className="text-lg transition-colors ">
                  contact@paradigmtech.club
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-[#FCFCFC]/10">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="text-sm text-[#FCFCFC]/60">
              © 2024 Paradigm Club | All rights reserved
            </p>
            <div className="flex items-center space-x-2 text-sm text-[#FCFCFC]/60">
              <span>Website crafted with ❤️ by </span>
              <a href="https://whirlxd.xyz" target='_blank' className="flex items-center text-cyan-400">
               Medhansh 
                <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
