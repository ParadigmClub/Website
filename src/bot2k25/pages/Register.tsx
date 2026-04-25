import { useState } from "react";
import { events, categories } from "../data";

export function Register() {
	const [activeEventId, setActiveEventId] = useState(events[0]?.id ?? "");
	const activeEvent = events.find((e) => e.id === activeEventId);

	return (
		<div className="bot-page">
			<h1 className="bot-page-title">Register</h1>
			<p className="bot-page-subtitle">Select an event to register for.</p>

			<div className="bot-tabs">
				{categories.map((cat) => {
					const catEvents = events.filter((e) => e.category === cat);
					if (catEvents.length === 0) return null;
					return (
						<>
							<span key={`label-${cat}`} className="bot-tab-category-label">{cat.split(" / ")[0]}</span>
							{catEvents.map((e) => (
								<button
									key={e.id}
									className={`bot-tab ${e.id === activeEventId ? "active" : ""}`}
									onClick={() => setActiveEventId(e.id)}
								>
									{e.name}
								</button>
							))}
						</>
					);
				})}
			</div>

			{activeEvent ? (
				activeEvent.formUrl && activeEvent.formUrl !== "#" ? (
					<iframe
						className="bot-form-embed"
						src={activeEvent.formUrl}
						title={`Register for ${activeEvent.name}`}
						frameBorder="0"
						loading="lazy"
					/>
				) : (
					<div className="bot-form-placeholder">
						Registration form for <strong style={{ margin: "0 0.35rem" }}>{activeEvent.name}</strong> will be available soon.
					</div>
				)
			) : (
				<div className="bot-form-placeholder">Select an event above.</div>
			)}
		</div>
	);
}
