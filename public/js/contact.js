import lottie from 'lottie-web'
import faceData from '../res/animations/face.json'

window.addEventListener("DOMContentLoaded", () => {
  const clipboard = ClipboardJS && new ClipboardJS("#email");
  const face = document.querySelector("#face");
  const contactMessage = document.querySelector(".contact-message");
  const darkModeButton = document.querySelector(".mode-toggle");

  let darkModeStyles = document.querySelector("style#dark");
  let darkMode = document.cookie === "dark=true";

  applyEventListener(darkModeButton, toggleDarkMode);

  clipboard.on("success", () => showSuccessMessage(contactMessage));
  clipboard.on("error", () => showFailureMessage(contactMessage));

  if (lottie) {
    const animationOptions = {
      container: face,
      animationData: faceData,
      loop: true,
      renderer: "svg",
      autoplay: true
    };
    window.anim = lottie.loadAnimation(animationOptions);
  }

  function applyEventListener(element, cb) {
    element.addEventListener("click", cb);
    element.addEventListener("keypress", e => e.which === 13 && cb(e));
  }

  function showSuccessMessage(messageElement) {
    messageElement.innerHTML = `
			<p>
				Great! It's copied to your clipboard. Feel free to send me that email :)
			</p>
		`;
  }

  function showFailureMessage(messageElement) {
    messageElement.innerHTML = `
			<p>
				Hmm there seems to be a problem. You might have to copy and paste the old-fashioned way.
			</p>
		`;
  }

  function toggleDarkMode() {
    if (darkMode) {
      darkMode = false;
      document.cookie = "dark=false";
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
