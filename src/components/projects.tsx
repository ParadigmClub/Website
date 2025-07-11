import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Framer, Globe, Code, Search, Video } from "lucide-react";
import { projects } from "./projectslist";

export function Projects() {
	const [filter, setFilter] = useState("");

	const filteredProjects = projects.filter(
		(project) =>
			project.name.toLowerCase().includes(filter.toLowerCase()) ||
			project.description.toLowerCase().includes(filter.toLowerCase()) ||
			project.tags.some((tag) =>
				tag.toLowerCase().includes(filter.toLowerCase()),
			),
	);

	const getIcon = (type: string) => {
		switch (type) {
			case "github":
				return <Github className="w-6 h-6" />;
			case "behance":
				return <Framer className="w-6 h-6" />;
			case "video":
				return <Video className="w-6 h-6" />;
			default:
				return <Globe className="w-6 h-6" />;
		}
	};

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				delayChildren: 0.3,
				staggerChildren: 0.1,
			},
		},
	};

	const itemVariants = {
		hidden: { y: 50, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.8,
				ease: "easeOut",
			},
		},
	};

	return (
		<div className="min-h-screen bg-[#0F0A0A] text-[#FCFCFC] py-24 px-6 md:px-12 lg:px-24">
			<div className="mx-auto max-w-7xl">
				<motion.h1
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="text-5xl md:text-6xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#9AFF27] to-cyan-400"
				>
					Our Projects
				</motion.h1>
				<motion.p
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					viewport={{ once: true }}
					className="text-xl text-center mb-16 text-[#FCFCFC]/80 max-w-3xl mx-auto"
				>
					Explore the projects we've worked on, ranging from mobile apps to
					short film and websites.
				</motion.p>

				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.4 }}
					viewport={{ once: true }}
					className="relative mb-12"
				>
					<motion.input
						whileFocus={{ scale: 1.02 }}
						type="text"
						placeholder="Search projects..."
						value={filter}
						onChange={(e) => setFilter(e.target.value)}
						className="w-full py-3 px-4 pl-12 bg-[#1A1A1A] rounded-lg text-[#FCFCFC] focus:outline-none focus:ring-2 focus:ring-[#9AFF27] transition-all duration-300"
					/>
					<Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#FCFCFC]/60" />
				</motion.div>

				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
				>
					<AnimatePresence>
						{filteredProjects.map((project, index) => (
							<motion.div
								key={project.name}
								variants={itemVariants}
								initial="hidden"
								animate="visible"
								exit={{ opacity: 0, scale: 0.8 }}
								layout
								whileHover={{
									scale: 1.05,
									y: -10,
									transition: { duration: 0.3 },
								}}
								className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] p-1"
							>
								<div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-[#9AFF27] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
								<div className="relative bg-[#0F0A0A] rounded-xl overflow-hidden">
									<motion.img
										whileHover={{ scale: 1.1 }}
										transition={{ duration: 0.3 }}
										loading="lazy"
										src={project.image}
										alt={project.name}
										width={600}
										height={400}
										className="object-cover w-full h-48"
									/>
									<div className="p-6">
										<div className="flex items-center justify-between mb-4">
											<h2 className="text-2xl font-bold">{project.name}</h2>
											<motion.div
												whileHover={{ rotate: 360 }}
												transition={{ duration: 0.6 }}
											>
												{getIcon(project.type)}
											</motion.div>
										</div>
										<p className="text-[#FCFCFC]/80 mb-4">
											{project.description}
										</p>
										<div className="flex flex-wrap gap-2 mb-4">
											{project.tags.map((tag, i) => (
												<motion.span
													key={i}
													initial={{ opacity: 0, scale: 0.8 }}
													animate={{ opacity: 1, scale: 1 }}
													transition={{ delay: i * 0.1 }}
													className="px-2 py-1 bg-[#9AFF27]/20 text-[#9AFF27] text-sm rounded-full"
												>
													{tag}
												</motion.span>
											))}
										</div>
										<motion.a
											whileHover={{ scale: 1.05 }}
											whileTap={{ scale: 0.95 }}
											href={project.link}
											target="_blank"
											rel="noopener noreferrer"
											className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-400 to-[#9AFF27] text-[#0F0A0A] font-semibold rounded-md transform transition-transform duration-300"
										>
											View Project <Code className="w-4 h-4 ml-2" />
										</motion.a>
									</div>
								</div>
							</motion.div>
						))}
					</AnimatePresence>
				</motion.div>
			</div>
		</div>
	);
}
