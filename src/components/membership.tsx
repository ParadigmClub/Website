import { useState } from "react";
import {
	Users,
	Lightbulb,
	UserCheck,
	Book,
	Shield,
	Gift,
	Mail,
	Phone,
	MapPin,
	Github,
	Linkedin,
	Twitter,
} from "lucide-react";

export function Membership() {
	type SectionId =
		| "what-we-do"
		| "expectations"
		| "membership"
		| "focus-fields"
		| "code-of-conduct"
		| "benefits";

	const [activeSection, setActiveSection] = useState<SectionId>("what-we-do");

	const sections: { id: SectionId; label: string; icon: React.ElementType }[] =
		[
			{ id: "what-we-do", label: "What We Do", icon: Users },
			{ id: "expectations", label: "Expectations", icon: Lightbulb },
			{ id: "membership", label: "Membership", icon: UserCheck },
			{ id: "focus-fields", label: "Focus Fields", icon: Book },
			{ id: "code-of-conduct", label: "Code of Conduct", icon: Shield },
			{ id: "benefits", label: "Benefits", icon: Gift },
		];

	const content: Record<SectionId, string> = {
		"what-we-do": `At Paradigm Tech Club, we foster a community of tech enthusiasts, innovators, and problem-solvers. We organize workshops, hackathons, and collaborative projects to enhance your skills and keep you updated with the latest in technology.`,
		expectations: `We expect our members to be passionate about technology, eager to learn, and willing to contribute to our community. Active participation in club activities, respect for fellow members, and a commitment to personal growth are key expectations.`,
		membership: `Membership is open to all students and professionals interested in technology. We have a rolling application process, with interviews conducted quarterly. Prospective members should demonstrate enthusiasm, relevant skills or willingness to learn, and alignment with our club's values.`,
		"focus-fields": `Our club focuses on a wide range of technology fields including but not limited to: Web Development, Mobile App Development, Artificial Intelligence, Data Science, Cybersecurity, IoT, Blockchain, and UI/UX Design.`,
		"code-of-conduct": `We maintain a respectful, inclusive, and collaborative environment. Discrimination, harassment, or disruptive behavior is not tolerated. We expect professional conduct, ethical practices, and adherence to intellectual property rights in all club activities.`,
		benefits: `As a member, you'll gain access to exclusive workshops, networking opportunities with industry professionals, collaborative projects, mentorship programs, and the chance to showcase your skills at our annual tech showcase. You'll also receive discounts on tech conferences and events.`,
	};

	return (
		<div className="min-h-screen bg-[#0F0A0A] text-[#FCFCFC] py-24 px-6 md:px-12 lg:px-24">
			<div className="mx-auto max-w-7xl">
				<h1 className="text-5xl md:text-6xl  font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#9AFF27] to-cyan-400">
					Join PARADIGM
				</h1>
				<p className="max-w-3xl mx-auto mb-16 text-xl text-center text-cyan-400">
					Embark on a journey of innovation, learning, and collaboration with
					like-minded tech enthusiasts.
				</p>

				<div className="grid grid-cols-1 gap-8 mb-16 md:grid-cols-2">
					{sections.map((section) => (
						<div
							key={section.id}
							className={`bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-3xl p-8 transition-all duration-300 ${
								activeSection === section.id
									? "ring-2 ring-cyan-400 shadow-lg shadow-cyan-400/20"
									: ""
							}`}
							onMouseEnter={() => setActiveSection(section.id)}
						>
							<div className="flex items-center mb-4">
								<section.icon
									className={`w-8 h-8 mr-4 ${activeSection === section.id ? "text-cyan-400" : "text-[#9AFF27]"}`}
								/>
								<h2 className="text-2xl font-bold">{section.label}</h2>
							</div>
							<p className="text-lg leading-relaxed">{content[section.id]}</p>
						</div>
					))}
				</div>

				<div className="bg-gradient-to-r from-cyan-400 to-[#9AFF27] p-1 rounded-3xl transform hover:scale-105 transition-transform duration-300">
					<div className="bg-[#0F0A0A] rounded-3xl p-8 relative overflow-hidden">
						<div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=800')] opacity-10"></div>
						<h2 className="relative z-10 mb-6 text-3xl font-bold text-center text-cyan-400">
							Get in Touch
						</h2>
						<div className="relative z-10 grid grid-cols-1 gap-8 md:grid-cols-3">
							<div className="flex items-center bg-[#1A1A1A] p-4 rounded-xl">
								<Mail className="w-6 h-6 mr-4 text-[#9AFF27]" />
								<a
									href="mailto:contact@paradigmtech.club"
									className="transition-colors hover:text-cyan-400"
								>
									contact@paradigmtech.club
								</a>
							</div>
							<div className="flex items-center bg-[#1A1A1A] p-4 rounded-xl">
								<Phone className="w-6 h-6 mr-4 text-[#9AFF27]" />
								<a
									href="tel:+1234567890"
									className="transition-colors hover:text-cyan-400"
								>
									+1 (234) 567-890
								</a>
							</div>
							<div className="flex items-center bg-[#1A1A1A] p-4 rounded-xl">
								<MapPin className="w-6 h-6 mr-4 text-[#9AFF27]" />
								<span>Mayoor School Noida</span>
							</div>
						</div>
						<div className="relative z-10 flex justify-center mt-8 space-x-6">
							<a
								href="https://github.com/paradigm-tech"
								target="_blank"
								rel="noopener noreferrer"
								className="text-[#FCFCFC] hover:text-cyan-400 transition-colors"
							>
								<Github className="w-8 h-8" />
							</a>
							<a
								href="https://linkedin.com/company/paradigm-tech"
								target="_blank"
								rel="noopener noreferrer"
								className="text-[#FCFCFC] hover:text-cyan-400 transition-colors"
							>
								<Linkedin className="w-8 h-8" />
							</a>
							<a
								href="https://twitter.com/paradigm_tech"
								target="_blank"
								rel="noopener noreferrer"
								className="text-[#FCFCFC] hover:text-cyan-400 transition-colors"
							>
								<Twitter className="w-8 h-8" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
