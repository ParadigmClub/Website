import { Link } from "react-router-dom";
import { siteMeta } from "../data";

const HC_LOGO = "https://assets.hackclub.com/icon-rounded.svg";

export function Footer() {
	return (
		<footer className="bot-footer">
			<div className="bot-footer-inner">
				<div>
					<div className="bot-footer-brand">
						<img src={HC_LOGO} alt="Hack Club" />
						<span className="bot-footer-brand-sep">&times;</span>
						<img src="./assets/logo.svg" alt="Paradigm" />
					</div>
					<p className="bot-footer-aff">
						Paradigm is a Hack Club affiliated club<br />
						at Mayoor School, Noida.
					</p>
				</div>

				<div>
					<ul className="bot-footer-nav">
						<li><Link to="/bot2k26">Home</Link></li>
						<li><Link to="/bot2k26/register">Register</Link></li>
						<li><Link to="/bot2k26/resources">Resources</Link></li>
						<li><Link to="/bot2k26/team">Team</Link></li>
					</ul>
				</div>

				<div className="bot-footer-contact">
					<p>{siteMeta.teacherInChargeName}</p>
					<p>{siteMeta.teacherInChargePhone}</p>
					<p>{siteMeta.contactEmail}</p>
				</div>
			</div>

			<div className="bot-footer-bottom">
				<span className="bot-footer-copy">
					&copy; {new Date().getFullYear()} BOT 2K26 — Paradigm, Mayoor School Noida
				</span>
				<span className="bot-footer-credit">
					Made with love by{" "}
					<a href="https://github.com/frostbyte8909" target="_blank" rel="noopener noreferrer">Palash</a>
				</span>
			</div>
		</footer>
	);
}
