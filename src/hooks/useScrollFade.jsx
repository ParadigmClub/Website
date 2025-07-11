import { useEffect } from "react";

export default function useScrollFadeIn(className = "fade") {
	useEffect(() => {
		const elements = document.querySelectorAll(`.${className}`);
		const observer = new IntersectionObserver(
			(entries) => {
				// biome-ignore lint/complexity/noForEach: <explanation>
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add("show");
					}
				});
			},
			{ threshold: 0.1 },
		);

		// biome-ignore lint/complexity/noForEach: <explanation>
		elements.forEach((el) => observer.observe(el));
		// biome-ignore lint/complexity/noForEach: <explanation>
		return () => elements.forEach((el) => observer.unobserve(el));
	}, [className]);
}
