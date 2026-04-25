import { useState } from "react";
import { events, categories } from "../data";

function Accordion({ event }: { event: typeof events[0] }) {
	const [open, setOpen] = useState(false);
	const allPlaceholder = event.resourceUrl === "#" && event.rulesUrl === "#" && event.faqUrl === "#";

	return (
		<div className={`bot-acc ${open ? "open" : ""}`}>
			<button className="bot-acc-header" onClick={() => setOpen(!open)}>
				<span>{event.name}</span>
				<span className="bot-acc-chevron">&#9662;</span>
			</button>
			<div className="bot-acc-body">
				<div className="bot-acc-content">
					{allPlaceholder ? (
						<span style={{ color: "var(--fg-muted)", fontSize: "0.8rem" }}>Resources will be available soon.</span>
					) : (
						<>
							{event.resourceUrl !== "#" && <a href={event.resourceUrl} target="_blank" rel="noopener noreferrer" className="bot-res-link">Resources</a>}
							{event.rulesUrl !== "#" && <a href={event.rulesUrl} target="_blank" rel="noopener noreferrer" className="bot-res-link">Rulebook</a>}
							{event.faqUrl !== "#" && <a href={event.faqUrl} target="_blank" rel="noopener noreferrer" className="bot-res-link">FAQ</a>}
						</>
					)}
				</div>
			</div>
		</div>
	);
}

export function Resources() {
	return (
		<div className="bot-page">
			<h1 className="bot-page-title">Resources</h1>
			<p className="bot-page-subtitle">Event documents, rulebooks, and FAQs.</p>

			{categories.map((cat) => {
				const catEvents = events.filter((e) => e.category === cat);
				if (!catEvents.length) return null;
				return (
					<div key={cat} className="bot-res-group">
						<p className="bot-res-group-label">{cat}</p>
						{catEvents.map((e) => <Accordion key={e.id} event={e} />)}
					</div>
				);
			})}
		</div>
	);
}
