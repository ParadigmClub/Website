import { useState } from "react";
import { events, categories } from "../data";

function Accordion({ event }: { event: typeof events[0] }) {
	const [open, setOpen] = useState(false);
	const hasLinks = event.resourceUrl !== "#" || event.rulesUrl !== "#" || event.faqUrl !== "#";

	return (
		<div className={`bot-accordion ${open ? "open" : ""}`}>
			<button className="bot-accordion-header" onClick={() => setOpen(!open)}>
				<span>{event.name}</span>
				<span className="bot-accordion-chevron">&#9662;</span>
			</button>
			<div className="bot-accordion-body">
				<div className="bot-accordion-content">
					{hasLinks ? (
						<>
							{event.resourceUrl !== "#" && (
								<a href={event.resourceUrl} target="_blank" rel="noopener noreferrer" className="bot-resource-link">Resources</a>
							)}
							{event.rulesUrl !== "#" && (
								<a href={event.rulesUrl} target="_blank" rel="noopener noreferrer" className="bot-resource-link">Rulebook</a>
							)}
							{event.faqUrl !== "#" && (
								<a href={event.faqUrl} target="_blank" rel="noopener noreferrer" className="bot-resource-link">FAQ</a>
							)}
							{!hasLinks && <span style={{ color: "var(--fg-muted)", fontSize: "0.85rem" }}>Resources will be available soon.</span>}
						</>
					) : (
						<span style={{ color: "var(--fg-muted)", fontSize: "0.85rem" }}>Resources will be available soon.</span>
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
				if (catEvents.length === 0) return null;
				return (
					<div key={cat} className="bot-resource-category">
						<p className="bot-resource-category-label">{cat}</p>
						{catEvents.map((e) => (
							<Accordion key={e.id} event={e} />
						))}
					</div>
				);
			})}
		</div>
	);
}
