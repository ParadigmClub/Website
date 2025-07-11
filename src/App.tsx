import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Learn } from "./components/learn";
import { MainPageComponent } from "./components/main-page";
import { Projects } from "./components/projects";
import { Membership } from "./components/membership";
import { NotFoundPage } from "./components/404";
import Footer from "./components/footer";

function HomePage() {
	return (
		<div className="h-screen overflow-y-scroll custom-scrollbar">
			<MainPageComponent />
			<Learn />
			<Projects />
			<Membership />
			<Footer />
		</div>
	);
}

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</Router>
	);
}

export default App;
