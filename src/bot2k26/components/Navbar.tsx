import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export function Navbar() {
	const [visible, setVisible] = useState(false);
	const loc = useLocation();

	useEffect(() => {
		const isHome = loc.pathname === "/bot2k26" || loc.pathname === "/bot2k26/";
		if (!isHome) {
			setVisible(true);
			return;
		}

		const observer = new IntersectionObserver(
			([entry]) => setVisible(!entry.isIntersecting),
			{ root: document.querySelector('.bot-root'), threshold: 0.05 }
		);
		const el = document.getElementById("bot-hero-sentinel");
		if (el) observer.observe(el);
		return () => observer.disconnect();
	}, [loc.pathname]);

	const active = (p: string) => {
		if (p === "/bot2k26") return loc.pathname === "/bot2k26" || loc.pathname === "/bot2k26/";
		return loc.pathname === p;
	};

	return (
		<nav className={`bot-nav ${visible ? "visible" : ""}`}>
			<Link to="/bot2k26">
				<img src="./assets/logo.svg" alt="Paradigm" className="bot-nav-logo" />
			</Link>
			<ul className="bot-nav-links">
				<li><Link to="/bot2k26" className={active("/bot2k26") ? "active" : ""}>Home</Link></li>
				<li><Link to="/bot2k26/register" className={active("/bot2k26/register") ? "active" : ""}>Register</Link></li>
				<li><Link to="/bot2k26/resources" className={active("/bot2k26/resources") ? "active" : ""}>Resources</Link></li>
				<li><Link to="/bot2k26/team" className={active("/bot2k26/team") ? "active" : ""}>Team</Link></li>
			</ul>
		</nav>
	);
}
