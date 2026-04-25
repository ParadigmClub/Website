import { MapPin, Mail, Phone, Instagram, ExternalLink } from "lucide-react";

export function Footer() {
	return (
		<footer className="bg-gradient-to-br from-[#121612] to-[#0A0D0A] text-[#FCFCFC] relative overflow-hidden mt-12">
			<div className="absolute inset-0 bg-[url('/footerbg.png')] bg-cover bg-center opacity-40 mix-blend-overlay" />
			
			<div className="container relative z-10 px-8 py-20 mx-auto max-w-[1200px]">
				<div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:gap-32">
					
					{/* Left Column */}
					<div className="space-y-8">
						<div className="flex items-center space-x-6">
							<div className="flex items-center space-x-4">
								<img
									src="https://assets.hackclub.com/flag-standalone-wtransparent.svg"
									alt="Hack Club Logo"
									className="h-10 w-auto"
								/>
								<span className="text-[#FCFCFC] font-light text-lg">X</span>
								<img
									src="/logowhite.png"
									alt="Paradigm Logo"
									className="h-10 w-auto"
								/>
							</div>
							<div className="flex flex-col justify-center">
								<h2 className="text-2xl font-bold tracking-wide">PARADIGM</h2>
								<p className="text-sm text-[#FCFCFC]/90 mt-0.5">Audere Est Facere | To dare is to do</p>
							</div>
						</div>
						<p className="text-[15px] leading-relaxed text-[#FCFCFC]/90">
							Paradigm established in 2011 is a tech club that aims to provide a
							platform for students to explore and learn about the latest
							technologies. We also provide mentorship and guidance to students
							who are interested in pursuing a career in technology. Our goal is
							to create a community of tech enthusiasts who are passionate about
							learning and sharing their knowledge with others. We are also an
							official club of Hack Club.
						</p>
					</div>

					{/* Right Column */}
					<div className="space-y-8 pt-2">
						<h3 className="text-xl font-bold tracking-wide">Contact Us</h3>
						<div className="space-y-6">
							<div className="flex items-start space-x-4 text-[#FCFCFC]/90">
								<MapPin className="flex-shrink-0 w-5 h-5 mt-1" />
								<p className="text-[15px] leading-relaxed">
									Mayoor School Noida,<br />
									Sector 126 Noida, Uttar Pradesh, India
								</p>
							</div>
							
							<div className="space-y-5">
								<div className="flex items-center space-x-4 text-[#FCFCFC]/90">
									<Phone className="flex-shrink-0 w-5 h-5" />
									<div className="flex flex-col">
										<p className="text-[15px]">+91 98914 35310</p>
										<p className="text-xs text-[#FCFCFC]/60">(Mrs. Ranjana Bajaj - CS HOD)</p>
									</div>
								</div>
								<div className="flex items-center space-x-4 text-[#FCFCFC]/90">
									<Phone className="flex-shrink-0 w-5 h-5" />
									<div className="flex flex-col">
										<p className="text-[15px]">+91 97172 91341</p>
										<p className="text-xs text-[#FCFCFC]/60">(Medhansh Kapoor - President)</p>
									</div>
								</div>
							</div>

							<div className="flex items-center space-x-4 text-[#FCFCFC]/90">
								<Instagram className="flex-shrink-0 w-5 h-5" />
								<a
									href="https://instagram.com/paradigxm"
									target="_blank"
									rel="noopener noreferrer"
									className="text-[15px] hover:text-[#009E41] transition-colors"
								>
									@paradigxm
								</a>
							</div>

							<div className="flex items-center space-x-4 text-[#FCFCFC]/90">
								<Mail className="flex-shrink-0 w-5 h-5" />
								<a
									href="mailto:contact@paradigmclub.co"
									className="text-[15px] hover:text-[#009E41] transition-colors"
								>
									contact@paradigmclub.co
								</a>
							</div>
						</div>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="mt-20 pt-8 border-t border-[#FCFCFC]/20">
					<div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
						<p className="text-xs text-[#FCFCFC]/70">
							© 2025 Paradigm Club | All rights reserved
						</p>
						<div className="flex items-center space-x-1.5 text-xs text-[#FCFCFC]/70">
							<span>Website crafted with ❤️ by</span>
							<a
								href="https://medhanshk.com"
								target="_blank"
								className="flex items-center text-[#00E5FF] hover:text-[#00b3cc] transition-colors font-medium ml-1"
								rel="noreferrer"
							>
								Medhansh
								<ExternalLink className="w-3 h-3 ml-1" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
