import { motion } from "framer-motion";
import { Home } from "lucide-react";

export function NotFoundPage() {
	return (
		<div className="min-h-screen bg-[#0F0A0A] text-[#FCFCFC] flex items-center justify-center">
			{/* Background Grid */}
			<div className="absolute inset-0 z-0">
				<div className="h-full w-full bg-gradient-to-br from-[#0F0A0A] to-[#1A1A1A]">
					<div className="grid w-full h-full grid-cols-12 grid-rows-6">
						{[...Array(72)].map((_, i) => (
							<div
								// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
								key={i}
								className="border-[0.2px] border-[#9AFF27]/5"
							/>
						))}
					</div>
				</div>
			</div>

			{/* Main Content */}
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
				className="relative z-10 max-w-2xl px-8 mx-auto text-center"
			>
				{/* 404 Number */}
				<motion.div
					initial={{ scale: 0.8, opacity: 0 }}
					animate={{ scale: 1, opacity: 1 }}
					transition={{ delay: 0.2, duration: 0.6 }}
					className="mb-8"
				>
					<h1 className="text-9xl max-sm:text-6xl font-bold text-[#9AFF27] leading-none mb-4">
						404
					</h1>
					<div className="w-24 h-1 bg-gradient-to-r from-[#9AFF27] to-[#8AEF17] mx-auto rounded-full" />
				</motion.div>

				{/* Error Message */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.4, duration: 0.6 }}
					className="mb-8"
				>
					<h2 className="text-3xl max-sm:text-2xl font-bold mb-4 text-[#FCFCFC]">
						Page Not Found
					</h2>
					<p className="text-lg max-sm:text-base text-[#FCFCFC]/80 mb-6">
						The page you're looking for doesn't exist or has been moved.
						<br className="hidden sm:block" />
						But don't worry, even in tech, we sometimes take wrong turns!
					</p>
				</motion.div>

				{/* Action Buttons */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.6, duration: 0.6 }}
					className="flex flex-col items-center justify-center gap-4 sm:flex-row"
				>
					<a
						href="/"
						className="flex items-center gap-2 px-8 py-3 bg-[#9AFF27] text-[#0F0A0A] font-semibold rounded-md hover:bg-[#8AEF17] transition-colors"
					>
						<Home className="w-5 h-5" />
						Go Home
					</a>
				</motion.div>

				{/* Additional Links */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.8, duration: 0.6 }}
					className="mt-12 pt-8 border-t border-[#9AFF27]/20"
				>
					<p className="text-[#FCFCFC]/60 mb-4">
						Looking for something specific?
					</p>
					<div className="flex flex-wrap justify-center gap-6 text-sm">
						<a
							href="/#about"
							className="text-[#FCFCFC]/80 hover:text-[#9AFF27] transition-colors underline-offset-4 hover:underline"
						>
							About Us
						</a>
						<a
							href="/#team"
							className="text-[#FCFCFC]/80 hover:text-[#9AFF27] transition-colors underline-offset-4 hover:underline"
						>
							Our Team
						</a>
						<a
							href="https://bot.paradigmclub.co"
							target="_blank"
							rel="noopener noreferrer"
							className="text-[#FCFCFC]/80 hover:text-[#9AFF27] transition-colors underline-offset-4 hover:underline"
						>
							BOT2K25
						</a>
						<a
							href="/#membership"
							className="text-[#FCFCFC]/80 hover:text-[#9AFF27] transition-colors underline-offset-4 hover:underline"
						>
							Join Us
						</a>
					</div>
				</motion.div>

				{/* Paradigm Branding */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 1, duration: 0.6 }}
					className="mt-16"
				>
					<p className="text-[#FCFCFC]/40 text-xs italic">
						PARADIGM Club - Audere Est Facere
					</p>
				</motion.div>
			</motion.div>
		</div>
	);
}
