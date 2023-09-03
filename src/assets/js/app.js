import { gsap } from "gsap";

const bar = document.querySelector(".loading__bar--inner");
const counter_num = document.querySelector(".loading__counter--number");

let counter = 0;

const barInterval = setInterval(() => {
  if (counter > 100) {
    counter = 100;
    clearInterval(barInterval);

    gsap.to(".loading__box", {
      duration: 0.5,
      width: 3,
      onComplete: () => {
        document.querySelector(".loading__box").style.display = "none";
      },
    });

    scaleDownInnerElements();
  }

  bar.style.width = `${counter}%`;
  counter_num.innerText = `${counter}%`;

  counter += 1;
}, 50);

function scaleDownInnerElements() {
  gsap.to(".loading__text", {
    duration: 0.5,
    scale: 0,
  });

  gsap.to(".loading__bar", {
    duration: 0.5,
    scale: 0,
  });

  gsap.to(".loading__counter", {
    duration: 0.5,
    scale: 0,
  });

  gsap.to(".loading", {
    delay: 1,
    duration: 2,
    background: "transparent",
    opacity: 0.5,
  });
}
