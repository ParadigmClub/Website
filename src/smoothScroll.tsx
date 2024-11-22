import { ReactLenis } from "@studio-freight/react-lenis";
import type { ReactNode } from "react";

function SmoothScrolling({ children }: { children: ReactNode }) {
	const lenisOptions = {
		duration: 1.4, // Longer duration for smoother scroll
		easing: (t: number) => 1 - (1 - t) ** 3, // Ease-out cubic easing
		smooth: true,
		direction: "vertical", // Ensure vertical scrolling is enabled
		gestureDirection: "vertical", // Ensure gesture direction is vertical
		smoothTouch: true, // Enable smooth scrolling for touch devices
		touchMultiplier: 2, // Adjust touch sensitivity
	};

	return (
		<ReactLenis root options={lenisOptions}>
			{children}
		</ReactLenis>
	);
}

export default SmoothScrolling;
