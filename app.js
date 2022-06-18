window.addEventListener("scroll", (event) => {
  let nav = document.getElementById("nav");
  if (window.scrollY >= 200) {
    nav.classList.add("nav-scrolled");
  } else {
    nav.classList.remove("nav-scrolled");
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

let closeMenu = () => {
  if (window.innerWidth > 1100) return;
  let element = document.getElementById("menu");
  let burger = document.getElementById("nav-btn");
  element.classList.remove("active");
  burger.classList.add("fa-bars");
  burger.classList.remove("fa-times");
  burger.style.padding = "7px 9px 7px 9px";
  menuIsShown = !menuIsShown;
};

function toggleTheme() {
  let icon = document.getElementById("theme-btn-icon");

  if (icon.classList.contains("fa-moon")) {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
    setTheme("theme-dark");
  } else {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
    setTheme("theme-light");
  }
}

let setTheme = (themeName) => {
  localStorage.setItem("theme", themeName);
  document.documentElement.className = themeName;
};

let getCurrentTheme = () => {
  let icon = document.getElementById("theme-btn-icon");

  if (localStorage.getItem("theme") === "theme-light") {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
    setTheme("theme-light");
  } else {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
    setTheme("theme-dark");
  }
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
  if (document.getElementById("name")) {
    await write("Hey, I'm", "hey", 130, "underscore1", 0);
    await write("Tim Hrovat", "name", 130, "underscore2", 5000);
  }
  return;
}

typewriter();

window.onload = getCurrentTheme;
