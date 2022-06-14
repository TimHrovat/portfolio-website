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
  if (menuIsShown) {
    element.classList.remove("active");
  } else {
    element.classList.add("active");
  }
  menuIsShown = !menuIsShown;
};
