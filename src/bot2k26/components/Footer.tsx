import { Link } from "react-router-dom";
import { Mail, Phone, ExternalLink } from "lucide-react";
import { siteMeta } from "../data";

export function Footer() {
	return (
		<footer className="bg-gradient-to-br from-[#0F0A0A] to-[#1A1A1A] text-[#FCFCFC] relative overflow-hidden mt-8">
			<div className="absolute inset-0 bg-[url('/footerbg.png')] bg-cover bg-center opacity-30" />
			<div className="container relative z-10 px-8 py-20 mx-auto max-w-[1100px]">
				<div className="grid grid-cols-1 gap-12 md:grid-cols-3 lg:gap-24">
					<div className="space-y-8">
						<div className="flex items-center space-x-4">
							<img
								src="https://assets.hackclub.com/flag-standalone-wtransparent.svg"
								alt="Hack Club Logo"
								width={80}
								height={80}
								className="rounded-lg"
							/>
							<span className="mx-auto md:inline-block">X</span>
							<img
								src="/logowhite.png"
								alt="Paradigm Tech Club Logo"
								width={80}
								height={80}
								className="rounded-lg"
							/>
							<div className="block md:inline-block max-sm:hidden">
								<h2 className="text-3xl font-bold max-sm:text-xl">PARADIGM</h2>
								<p className="text-sm text-[#FCFCFC]/80">Mayoor School, Noida</p>
							</div>
						</div>
						<p className="text-base leading-relaxed text-[#FCFCFC]/80">
							Paradigm is a Hack Club affiliated club at Mayoor School, Noida.
						</p>
					</div>

					<div className="space-y-8">
						<h3 className="text-2xl font-semibold">Navigation</h3>
						<ul className="space-y-4">
							<li>
								<Link to="/bot2k26" className="text-base transition-colors hover:text-[#009E41]">
									Home
								</Link>
							</li>
							<li>
								<Link to="/bot2k26/register" className="text-base transition-colors hover:text-[#009E41]">
									Register
								</Link>
							</li>
							<li>
								<Link to="/bot2k26/resources" className="text-base transition-colors hover:text-[#009E41]">
									Resources
								</Link>
							</li>
							<li>
								<Link to="/bot2k26/team" className="text-base transition-colors hover:text-[#009E41]">
									Team
								</Link>
							</li>
						</ul>
					</div>

					<div className="space-y-8">
						<h3 className="text-2xl font-semibold">Contact Us</h3>
						<div className="space-y-6">
							<div className="space-y-3">
								<div className="flex items-center space-x-4 text-[#FCFCFC]/80 hover:text-white transition-colors">
									<Phone className="flex-shrink-0 w-6 h-6" />
									<div>
										<p className="text-base">{siteMeta.teacherInChargePhone}</p>
										<p className="text-sm">({siteMeta.teacherInChargeName})</p>
									</div>
								</div>
							</div>
							<div className="flex items-center space-x-4 text-[#FCFCFC]/80 hover:text-[#009E41] transition-colors">
								<Mail className="flex-shrink-0 w-6 h-6" />
								<a href={`mailto:${siteMeta.contactEmail}`} className="text-base">
									{siteMeta.contactEmail}
								</a>
							</div>
						</div>
					</div>
				</div>

				<div className="mt-20 pt-8 border-t border-[#FCFCFC]/10">
					<div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
						<p className="text-sm text-[#FCFCFC]/60">
							© {new Date().getFullYear()} BOT 2K26 — Paradigm, Mayoor School Noida
						</p>
						<div className="flex items-center space-x-2 text-sm text-[#FCFCFC]/60">
							<span>Made with love by </span>
							<a
								href="https://github.com/frostbyte8909"
								target="_blank"
								className="flex items-center text-[#009E41] hover:text-[#00b34a] transition-colors"
								rel="noreferrer"
							>
								Palash
								<ExternalLink className="w-4 h-4 ml-1" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
