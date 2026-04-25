import { useEffect, useRef, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { events, siteMeta, type Event } from "../data";

function EventCard({ event, index, onSelect }: { event: Event; index: number; onSelect: (e: Event) => void }) {
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setTimeout(() => el.classList.add("revealed"), index * 80);
					observer.unobserve(el);
				}
			},
			{ threshold: 0.15 }
		);
		observer.observe(el);
		return () => observer.disconnect();
	}, [index]);

	return (
		<div
			ref={ref}
			className="bot-event-card"
			style={{
				gridColumn: `span ${event.gridSpan.col}`,
				gridRow: `span ${event.gridSpan.row}`,
			}}
			onClick={() => onSelect(event)}
			tabIndex={0}
			role="button"
			aria-label={`View details for ${event.name}`}
			onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") onSelect(event); }}
		>
			<span className="bot-event-card-category">{event.category}</span>
			<h3 className="bot-event-card-name">{event.name}</h3>
			<p className="bot-event-card-desc">{event.description}</p>
		</div>
	);
}

function ExpandedCard({ event, onClose }: { event: Event; onClose: () => void }) {
	const navigate = useNavigate();
	const overlayRef = useRef<HTMLDivElement>(null);

	const handleKeyDown = useCallback((e: KeyboardEvent) => {
		if (e.key === "Escape") onClose();
	}, [onClose]);

	useEffect(() => {
		document.addEventListener("keydown", handleKeyDown);
		return () => document.removeEventListener("keydown", handleKeyDown);
	}, [handleKeyDown]);

	const handleOverlayClick = (e: React.MouseEvent) => {
		if (e.target === overlayRef.current) onClose();
	};

	return (
		<div className="bot-overlay" ref={overlayRef} onClick={handleOverlayClick}>
			<div className="bot-expanded-card" role="dialog" aria-label={event.name}>
				<button className="bot-expanded-close" onClick={onClose} aria-label="Close">&times;</button>
				<span className="bot-expanded-category">{event.category}</span>
				<h2 className="bot-expanded-name">{event.name}</h2>
				<p className="bot-expanded-desc">{event.description}</p>
				<div className="bot-expanded-actions">
					<a href={event.resourceUrl} target="_blank" rel="noopener noreferrer" className="bot-action-btn">Resources</a>
					<a href={event.rulesUrl} target="_blank" rel="noopener noreferrer" className="bot-action-btn">Rules</a>
					<a href={event.faqUrl} target="_blank" rel="noopener noreferrer" className="bot-action-btn">FAQs</a>
					<button className="bot-action-btn primary" onClick={() => navigate("/bot2k25/register")}>Register</button>
				</div>
			</div>
		</div>
	);
}

export function Home() {
	const [selected, setSelected] = useState<Event | null>(null);

	return (
		<>
			<section className="bot-hero bot-noise">
				<div id="bot-hero-sentinel" style={{ position: "absolute", top: 0, height: "1px", width: "1px" }} />
				<img src="./assets/logo.svg" alt="Paradigm" className="bot-hero-logo" />
				<h1 className="bot-hero-title">
					<span className="bot-heading-display">BOT</span>
					<br />
					<span className="bot-heading-accent">2026</span>
				</h1>
				<p className="bot-hero-subtitle">{siteMeta.subtitle}</p>
				<p className="bot-hero-date">{siteMeta.dates}</p>
			</section>

			<section className="bot-grid-section">
				<hr className="bot-divider" />
				<p className="bot-grid-section-title">Events</p>
				<div className="bot-event-grid">
					{events.map((event, i) => (
						<EventCard key={event.id} event={event} index={i} onSelect={setSelected} />
					))}
				</div>
			</section>

			{selected && <ExpandedCard event={selected} onClose={() => setSelected(null)} />}
		</>
	);
}
