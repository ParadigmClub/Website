import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Register } from "./pages/Register";
import { Resources } from "./pages/Resources";
import { Team } from "./pages/Team";
import "./bot.css";

export function Bot2k26Page() {
	return (
		<div className="bot-root">
			<Navbar />
			<main>
				<Routes>
					<Route index element={<Home />} />
					<Route path="register" element={<Register />} />
					<Route path="resources" element={<Resources />} />
					<Route path="team" element={<Team />} />
				</Routes>
			</main>
			<Footer />
		</div>
	);
}
