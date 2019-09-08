window.addEventListener("DOMContentLoaded", () => {
	const face = document.getElementById("face");
	const email = document.getElementById("email");
	const contactMessage = document.querySelector(".contact-message");
	const darkModeButton = document.querySelector(".mode-toggle");

	let darkModeStyles = document.querySelector("style#dark");
	let darkMode = document.cookie === "dark=true";

	applyEventListener(darkModeButton, toggleDarkMode);
	applyEventListener(email, copyToClipboard);

	if (lottie) {
		const animationOptions = {
			container: face,
			path: "/res/animations/face.json",
			loop: true,
			renderer: "svg",
			autoplay: true,
		};
		window.anim = lottie.loadAnimation(animationOptions);
	}

	function applyEventListener(element, cb) {
		element.addEventListener("click", cb);
		element.addEventListener("keypress", e => e.which === 13 && cb(e));
	}

	function copyToClipboard() {
		navigator.permissions
			.query({ name: "clipboard-write" })
			.then(({ state }) => {
				if (state === "granted") {
					navigator.clipboard
						.writeText("mark.sauer.utley@gmail.com")
						.then(() => {
							changeMessage(contactMessage);
						});
				} else {
					copyWithoutPermissions();
				}
			})
			.catch(e => {
				copyWithoutPermissions();
			});
	}

	function copyWithoutPermissions() {
		const emailNode = document.querySelector("#email");
		const selection = window.getSelection();
		const range = document.createRange();

		range.selectNodeContents(emailNode);
		selection.removeAllRanges();
		selection.addRange(range);
		document.execCommand("copy");

		changeMessage(contactMessage);
	}

	function changeMessage(messageElement) {
		messageElement.innerHTML = `
			<p>
				Great! It's copied to your clipboard. Feel free to send me that email :)
			</p>
		`;
	}

	function toggleDarkMode() {
		if (darkMode) {
			darkMode = false;
			document.cookie = "dark= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
			darkModeButton.textContent = "🌞";
			darkModeStyles.innerHTML = "";
		} else {
			darkMode = true;
			document.cookie = "dark=true";
			darkModeButton.textContent = "🌚";
			darkModeStyles.innerHTML = `
            body {
               background-color: #292929;
               color: white;
            }
            header a {
               color: white;
            }
            path {
               fill: rgb(255, 255, 255);
               stroke: rgb(255, 255, 255);
            } 
         `;
		}
	}
});
