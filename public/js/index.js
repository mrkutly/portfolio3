import lottie from 'lottie-web';
import faceData from '../res/animations/face.json';
import skillsData from '../res/animations/skills.json';
import workData from '../res/animations/work.json';

window.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  const face = document.getElementById("face");
  const skillsAnimation = document.getElementById("skills-animation");
  const skillsGrid = document.querySelector(".skills-grid");
  const workAnimation = document.getElementById("work-animation");
  const workGrid = document.querySelector(".work-grid");
  const revealElements = document.querySelectorAll(".reveal");
  const observableElements = [...revealElements, header, skillsGrid, workGrid];

  const options = { threshold: 0 };
  const observer = new IntersectionObserver(
    entries => entries.map(observerSwitch),
    options
  );

  observableElements.forEach(el => observer.observe(el));

  if (lottie) {
    const animationOptions = {
      container: face,
      animationData: faceData,
      loop: true,
      renderer: "svg",
      autoplay: true
    };
    lottie.loadAnimation(animationOptions);
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
            animationData: skillsData,
            loop: false,
            renderer: "svg",
            autoplay: true
          };
          lottie.loadAnimation(animationOptions);
          observer.unobserve(entry.target);
        }
        break;

      case workGrid:
        if (entry.isIntersecting && lottie) {
          const animationOptions = {
            container: workAnimation,
            animationData: workData,
            loop: false,
            renderer: "svg",
            autoplay: true
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
