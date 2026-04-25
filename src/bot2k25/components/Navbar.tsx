import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export function Navbar() {
	const [visible, setVisible] = useState(false);
	const location = useLocation();

	useEffect(() => {
		const isHome = location.pathname === "/bot2k25" || location.pathname === "/bot2k25/";
		if (!isHome) {
			setVisible(true);
			return;
		}

		const observer = new IntersectionObserver(
			([entry]) => setVisible(!entry.isIntersecting),
			{ threshold: 0.1 }
		);

		const sentinel = document.getElementById("bot-hero-sentinel");
		if (sentinel) observer.observe(sentinel);

		return () => observer.disconnect();
	}, [location.pathname]);

	const isActive = (path: string) => location.pathname === path;

	return (
		<nav className={`bot-nav ${visible ? "visible" : ""}`}>
			<Link to="/bot2k25">
				<img src="./assets/logo.svg" alt="Paradigm" className="bot-nav-logo" />
			</Link>
			<ul className="bot-nav-links">
				<li><Link to="/bot2k25" className={isActive("/bot2k25") ? "active" : ""}>Home</Link></li>
				<li><Link to="/bot2k25/register" className={isActive("/bot2k25/register") ? "active" : ""}>Register</Link></li>
				<li><Link to="/bot2k25/resources" className={isActive("/bot2k25/resources") ? "active" : ""}>Resources</Link></li>
				<li><Link to="/bot2k25/team" className={isActive("/bot2k25/team") ? "active" : ""}>Team</Link></li>
			</ul>
		</nav>
	);
}
