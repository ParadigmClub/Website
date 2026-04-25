import { useState } from "react";
import { events, categories } from "../data";

export function Register() {
	const [activeId, setActiveId] = useState(events[0]?.id ?? "");
	const active = events.find((e) => e.id === activeId);

	return (
		<div className="bot-page">
			<h1 className="bot-page-title">Register</h1>
			<p className="bot-page-subtitle">Select an event to register for.</p>

			<div className="bot-tabs">
				{categories.map((cat) => {
					const catEvents = events.filter((e) => e.category === cat);
					if (!catEvents.length) return null;
					return [
						<span key={`sep-${cat}`} className="bot-tab-sep">{cat.split(" / ")[0]}</span>,
						...catEvents.map((e) => (
							<button
								key={e.id}
								className={`bot-tab ${e.id === activeId ? "active" : ""}`}
								onClick={() => setActiveId(e.id)}
							>
								{e.name}
							</button>
						)),
					];
				})}
			</div>

			{active ? (
				active.formUrl && active.formUrl !== "#" ? (
					<iframe
						className="bot-iframe"
						src={active.formUrl}
						title={`Register for ${active.name}`}
						frameBorder="0"
						loading="lazy"
					/>
				) : (
					<div className="bot-placeholder">
						Registration form for <strong style={{ margin: "0 0.3rem" }}>{active.name}</strong> will be available soon.
					</div>
				)
			) : (
				<div className="bot-placeholder">Select an event above.</div>
			)}
		</div>
	);
}
