import { team } from "../data";

const AvatarPlaceholder = () => (
	<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
		<circle cx="12" cy="8" r="4" />
		<path d="M20 21a8 8 0 0 0-16 0" />
	</svg>
);

export function Team() {
	const president = team.filter((m) => m.tier === "president");
	const vps = team.filter((m) => m.tier === "vp");
	const leads = team.filter((m) => m.tier === "lead");

	const renderCard = (m: typeof team[0]) => (
		<div key={m.name} className="bot-team-card">
			<div className="bot-team-photo">
				{m.image ? <img src={m.image} alt={m.name} /> : <AvatarPlaceholder />}
			</div>
			<p className="bot-team-name">{m.name}</p>
			<p className="bot-team-role">{m.role}</p>
		</div>
	);

	return (
		<div className="bot-page">
			<h1 className="bot-page-title">Team</h1>
			<p className="bot-page-subtitle">The organizing leads behind BOT 2K26.</p>

			<div className="bot-team-tier">
				<p className="bot-team-tier-label">President</p>
				<div className="bot-team-grid t-president">
					{president.map(renderCard)}
				</div>
			</div>

			<div className="bot-team-tier">
				<p className="bot-team-tier-label">Vice Presidents</p>
				<div className="bot-team-grid t-vp">
					{vps.map(renderCard)}
				</div>
			</div>

			<div className="bot-team-tier">
				<p className="bot-team-tier-label">Leads</p>
				<div className="bot-team-grid t-lead">
					{leads.map(renderCard)}
				</div>
			</div>
		</div>
	);
}
