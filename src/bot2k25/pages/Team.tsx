import { team } from "../data";

export function Team() {
	const president = team.filter((m) => m.tier === "president");
	const vps = team.filter((m) => m.tier === "vp");
	const leads = team.filter((m) => m.tier === "lead");

	return (
		<div className="bot-page">
			<h1 className="bot-page-title">Team</h1>
			<p className="bot-page-subtitle">The organizing leads behind BOT 2K26.</p>

			<div className="bot-team-tier">
				<p className="bot-team-tier-label">President</p>
				<div className="bot-team-grid president">
					{president.map((m) => (
						<div key={m.name} className="bot-team-card">
							<div className="bot-team-photo">
								{m.image && <img src={m.image} alt={m.name} />}
							</div>
							<p className="bot-team-name">{m.name}</p>
							<p className="bot-team-role">{m.role}</p>
						</div>
					))}
				</div>
			</div>

			<div className="bot-team-tier">
				<p className="bot-team-tier-label">Vice Presidents</p>
				<div className="bot-team-grid vp">
					{vps.map((m) => (
						<div key={m.name} className="bot-team-card">
							<div className="bot-team-photo">
								{m.image && <img src={m.image} alt={m.name} />}
							</div>
							<p className="bot-team-name">{m.name}</p>
							<p className="bot-team-role">{m.role}</p>
						</div>
					))}
				</div>
			</div>

			<div className="bot-team-tier">
				<p className="bot-team-tier-label">Leads</p>
				<div className="bot-team-grid lead">
					{leads.map((m) => (
						<div key={m.name} className="bot-team-card">
							<div className="bot-team-photo">
								{m.image && <img src={m.image} alt={m.name} />}
							</div>
							<p className="bot-team-name">{m.name}</p>
							<p className="bot-team-role">{m.role}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
