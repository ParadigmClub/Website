import { motion } from "framer-motion";
import { RegistrationForm } from "./RegistrationForm";

export function Bot2k25Page() {
	return (
		<div className="min-h-screen bg-background text-foreground flex flex-col relative overflow-hidden selection:bg-primary selection:text-primary-foreground">
			{/* Ambient background effects */}
			<div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
			<div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
			
			{/* Header / Nav area */}
			<header className="p-6 md:p-8 flex items-center justify-between z-10 relative">
				<motion.div 
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					className="font-bold text-2xl tracking-tighter"
				>
					BOT<span className="text-primary">2k25</span>
				</motion.div>
				<motion.a 
					href="/"
					initial={{ opacity: 0, x: 20 }}
					animate={{ opacity: 1, x: 0 }}
					className="text-sm font-medium hover:text-primary transition-colors"
				>
					&larr; Back to Paradigm
				</motion.a>
			</header>

			{/* Main Content Area */}
			<main className="flex-1 flex flex-col items-center justify-center p-6 md:p-12 z-10 relative">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl w-full items-center">
					
					{/* Hero Text */}
					<motion.div 
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, ease: "easeOut" }}
						className="space-y-6 text-center lg:text-left"
					>
						<div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
							<span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
							Registrations Open
						</div>
						<h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]">
							Battle of <br className="hidden md:block" />
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">
								Titans
							</span> 2025
						</h1>
						<p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
							The ultimate test of logic, creativity, and endurance. Join the most anticipated tech symposium of the year hosted by Paradigm Tech Club.
						</p>
					</motion.div>

					{/* Registration Portal */}
					<motion.div
						initial={{ opacity: 0, scale: 0.95 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
					>
						<RegistrationForm />
					</motion.div>

				</div>
			</main>
		</div>
	);
}
