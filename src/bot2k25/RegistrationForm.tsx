import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

export function RegistrationForm() {
	const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setStatus("submitting");
		// Mock submission
		setTimeout(() => setStatus("success"), 1500);
	};

	return (
		<div className="w-full max-w-md mx-auto p-8 rounded-2xl bg-card border border-border shadow-2xl relative overflow-hidden group">
			<div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
			
			<div className="relative z-10">
				<div className="mb-8">
					<h2 className="text-2xl font-bold tracking-tight mb-2 text-foreground">Secure your spot</h2>
					<p className="text-sm text-muted-foreground">Register for Battle of Titans 2025.</p>
				</div>

				{status === "success" ? (
					<motion.div 
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						className="flex flex-col items-center justify-center py-8 text-center"
					>
						<CheckCircle2 className="w-16 h-16 text-green-500 mb-4" />
						<h3 className="text-xl font-bold mb-2">Registration Complete</h3>
						<p className="text-muted-foreground text-sm">We'll see you in the arena.</p>
						<button 
							onClick={() => setStatus("idle")}
							className="mt-6 text-sm font-medium text-primary hover:underline"
						>
							Register another team
						</button>
					</motion.div>
				) : (
					<form onSubmit={handleSubmit} className="space-y-4">
						<div className="space-y-2">
							<label htmlFor="teamName" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Team Name</label>
							<input 
								id="teamName"
								required
								className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300 hover:border-primary/50 focus:border-primary" 
								placeholder="e.g. CyberKnights" 
							/>
						</div>
						
						<div className="space-y-2">
							<label htmlFor="school" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">School Name</label>
							<input 
								id="school"
								required
								className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300 hover:border-primary/50 focus:border-primary" 
								placeholder="School Name" 
							/>
						</div>

						<div className="space-y-2">
							<label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Contact Email</label>
							<input 
								id="email"
								type="email"
								required
								className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300 hover:border-primary/50 focus:border-primary" 
								placeholder="hello@school.edu" 
							/>
						</div>

						<motion.button
							whileHover={{ scale: 1.02 }}
							whileTap={{ scale: 0.98 }}
							type="submit"
							disabled={status === "submitting"}
							className="w-full inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 mt-4 relative overflow-hidden"
						>
							{status === "submitting" ? (
								<motion.div
									animate={{ rotate: 360 }}
									transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
									className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full"
								/>
							) : (
								<span className="flex items-center gap-2">
									Register <Send className="w-4 h-4" />
								</span>
							)}
						</motion.button>
					</form>
				)}
			</div>
		</div>
	);
}
