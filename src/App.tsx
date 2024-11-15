import { Learn } from "./components/learn";
import { MainPageComponent } from "./components/main-page";
import { Projects } from "./components/projects";
import { Membership } from "./components/membership";
import Footer from "./components/footer";

function App() {
	return (
		<>
			<div>
				<MainPageComponent />
				<Learn />
				<Projects />
				<Membership />
				<Footer />
			</div>
		</>
	);
}

export default App;
