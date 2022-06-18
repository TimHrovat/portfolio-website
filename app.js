window.addEventListener("scroll", (event) => {
  let nav = document.getElementById("nav");
  if (window.scrollY >= 200) {
    nav.style.backgroundColor = "RGBA(0,0,0,0.3)";
  } else {
    nav.style.backgroundColor = null;
  }
});

let menuIsShown = false;

let showMenu = () => {
  let element = document.getElementById("menu");
  let burger = document.getElementById("nav-btn");
  if (menuIsShown) {
    element.classList.remove("active");
    burger.classList.add("fa-bars");
    burger.classList.remove("fa-times");
    burger.style.padding = "7px 9px 7px 9px";
  } else {
    element.classList.add("active");
    burger.classList.add("fa-times");
    burger.classList.remove("fa-bars");
    burger.style.padding = "7px 10px 7px 10px";
  }
  menuIsShown = !menuIsShown;
};

function waitForMS(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function write(
  sentence,
  elementReference,
  eachLetterDelayMS,
  underscoreReference,
  displayUnderscoreAfterAnimationForMS
) {
  const underscore = document.getElementById(underscoreReference);
  underscore.style.display = "inline-block";

  const letters = sentence.split("");

  for (let i = 0; i < letters.length; i++) {
    await waitForMS(eachLetterDelayMS);
    document.getElementById(elementReference).append(letters[i]);
  }

  await waitForMS(displayUnderscoreAfterAnimationForMS);
  underscore.style.display = "none";

  return;
}

async function typewriter() {
  await write("Hey, I'm", "hey", 130, "underscore1", 0);
  await write("Tim Hrovat", "name", 130, "underscore2", 5000);
  return;
}

typewriter();
