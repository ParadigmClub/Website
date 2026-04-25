import { useEffect, useRef, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { events, siteMeta, type Event } from "../data";

const PlaceholderIcon = () => (
	<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
		<rect x="3" y="3" width="18" height="18" rx="2" />
		<circle cx="8.5" cy="8.5" r="1.5" />
		<path d="m21 15-5-5L5 21" />
	</svg>
);

function EventCard({ event, index, onSelect }: { event: Event; index: number; onSelect: (e: Event) => void }) {
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;
		const obs = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setTimeout(() => el.classList.add("revealed"), index * 90);
					obs.unobserve(el);
				}
			},
			{ root: document.querySelector('.bot-root'), threshold: 0.1 }
		);
		obs.observe(el);
		return () => obs.disconnect();
	}, [index]);

	const isBig = event.gridSpan.col > 1 || event.gridSpan.row > 1;

	return (
		<div
			ref={ref}
			className={`bot-card ${isBig ? "has-media" : ""}`}
			style={{
				gridColumn: `span ${event.gridSpan.col}`,
				gridRow: `span ${event.gridSpan.row}`,
			}}
			onClick={() => onSelect(event)}
			onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") onSelect(event); }}
			tabIndex={0}
			role="button"
			aria-label={`View ${event.name}`}
		>
			{isBig && (
				<div className="bot-card-media">
					<span className="bot-card-media-label">
						<PlaceholderIcon />
					</span>
				</div>
			)}
			<span className="bot-card-category">{event.category}</span>
			<h3 className="bot-card-name">{event.name}</h3>
			<p className="bot-card-desc">{event.description}</p>
		</div>
	);
}

function ExpandedCard({ event, onClose }: { event: Event; onClose: () => void }) {
	const navigate = useNavigate();
	const overlayRef = useRef<HTMLDivElement>(null);

	const onKey = useCallback((e: KeyboardEvent) => {
		if (e.key === "Escape") onClose();
	}, [onClose]);

	useEffect(() => {
		document.addEventListener("keydown", onKey);
		return () => document.removeEventListener("keydown", onKey);
	}, [onKey]);

	return (
		<div
			className="bot-overlay"
			ref={overlayRef}
			onClick={(e) => { if (e.target === overlayRef.current) onClose(); }}
		>
			<div className="bot-expanded" role="dialog" aria-label={event.name}>
				<button className="bot-expanded-close" onClick={onClose} aria-label="Close">&times;</button>
				<span className="bot-expanded-cat">{event.category}</span>
				<h2 className="bot-expanded-name">{event.name}</h2>
				<p className="bot-expanded-desc">{event.description}</p>
				<div className="bot-expanded-actions">
					<a href={event.resourceUrl} target="_blank" rel="noopener noreferrer" className="bot-btn">Resources</a>
					<a href={event.rulesUrl} target="_blank" rel="noopener noreferrer" className="bot-btn">Rules</a>
					<a href={event.faqUrl} target="_blank" rel="noopener noreferrer" className="bot-btn">FAQs</a>
					<button className="bot-btn primary" onClick={() => navigate("/bot2k26/register")}>Register</button>
				</div>
			</div>
		</div>
	);
}

export function Home() {
	const [selected, setSelected] = useState<Event | null>(null);

	useEffect(() => {
		if (selected) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}
		return () => { document.body.style.overflow = ""; };
	}, [selected]);

	return (
		<>
			{/* Hero — full viewport */}
			<section className="bot-hero bot-noise">
				<div id="bot-hero-sentinel" style={{ position: "absolute", top: 0, width: 1, height: 1 }} />
				<img src="./assets/logo.svg" alt="Paradigm" className="bot-hero-logo" />
				<h1 className="bot-hero-title">
					<span className="bot-display line1">Battle</span>
					<span className="bot-display cursive line2">Of Titans</span>
				</h1>
				<p className="bot-hero-year">2026</p>
				<p className="bot-hero-subtitle">{siteMeta.subtitle}</p>
				<p className="bot-hero-date">{siteMeta.dates}</p>
				
				<div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center cursor-pointer text-cyan-400 opacity-80 hover:opacity-100 transition-opacity" onClick={() => document.querySelector('.bot-grid-section')?.scrollIntoView({ behavior: 'smooth' })}>
					<ChevronDown className="w-8 h-8" strokeWidth={2.5} />
				</div>
			</section>

			{/* Event grid — second section */}
			<section className="bot-grid-section">
				<hr className="bot-divider" />
				<p className="bot-section-label">Events</p>
				<div className="bot-event-grid">
					{events.map((ev, i) => (
						<EventCard key={ev.id} event={ev} index={i} onSelect={setSelected} />
					))}
				</div>
			</section>

			{selected && <ExpandedCard event={selected} onClose={() => setSelected(null)} />}
		</>
	);
}
