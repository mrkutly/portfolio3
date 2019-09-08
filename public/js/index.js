window.addEventListener("DOMContentLoaded", () => {
	const header = document.querySelector("header");
	const face = document.getElementById("face");
	const skillsAnimation = document.getElementById("skills-animation");
	const skillsGrid = document.querySelector(".skills-grid");
	const workAnimation = document.getElementById("work-animation");
	const workGrid = document.querySelector(".work-grid");
	const darkModeButton = document.querySelector(".mode-toggle");
	const revealElements = document.querySelectorAll(".reveal");
	const observableElements = [...revealElements, header, skillsGrid, workGrid];

	let darkModeStyles = document.querySelector("style#dark");
	let darkMode = document.cookie === "dark=true";

	applyEventListener(darkModeButton, toggleDarkMode);

	const options = { threshold: 0 };
	const observer = new IntersectionObserver(
		entries => entries.map(observerSwitch),
		options
	);

	observableElements.forEach(el => observer.observe(el));

	if (lottie) {
		const animationOptions = {
			container: face,
			path: "/res/animations/face.json",
			loop: true,
			renderer: "svg",
			autoplay: true,
		};
		lottie.loadAnimation(animationOptions);
	}

	function toggleDarkMode() {
		if (darkMode) {
			darkMode = false;
			document.cookie = "dark= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
			darkModeStyles.innerHTML = "";
			darkModeButton.textContent = "🌞";
		} else {
			darkMode = true;
			document.cookie = "dark=true";
			darkModeStyles.innerHTML = `
            body {
               background-color: #292929;
               color: white;
            }
            header a, footer a, section#work div.project {
               color: white;
            }
            path {
               fill: rgb(255, 255, 255);
               stroke: rgb(255, 255, 255);
				}
				div.project-details {
					color: #231f1f;
				}
			`;
			darkModeButton.textContent = "🌚";
		}
	}

	function applyEventListener(element, cb) {
		element.addEventListener("click", cb);
		element.addEventListener("keypress", e => e.which === 13 && cb(e));
	}

	function observerSwitch(entry) {
		switch (entry.target) {
			case header:
				if (entry.isIntersecting) {
					face.classList.remove("stuck");
				} else {
					face.classList.add("stuck");
				}
				break;

			case skillsGrid:
				if (entry.isIntersecting && lottie) {
					const animationOptions = {
						container: skillsAnimation,
						path: "/res/animations/skills.json",
						loop: false,
						renderer: "svg",
						autoplay: true,
					};
					lottie.loadAnimation(animationOptions);
					observer.unobserve(entry.target);
				}
				break;

			case workGrid:
				if (entry.isIntersecting && lottie) {
					const animationOptions = {
						container: workAnimation,
						path: "/res/animations/skills.json",
						loop: false,
						renderer: "svg",
						autoplay: true,
					};
					lottie.loadAnimation(animationOptions);
					observer.unobserve(entry.target);
				}
				break;

			default:
				if (entry.isIntersecting) {
					entry.target.classList.add("revealed");
					observer.unobserve(entry.target);
				}
		}
	}
});
