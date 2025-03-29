const servicesOrder = document.querySelector(".services__order");
const sections = document.querySelectorAll("section");
const navlinks = document.querySelectorAll("header nav a");
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navlinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

ScrollReveal({
  distance: "100px",
  duration: 1000,
  delay: 100,
});

ScrollReveal().reveal(
  ".home__content, .heading, .portf__list, .about__content, .services__list, form",
  {
    origin: "top",
  }
);
ScrollReveal().reveal(".home__img, .about__img", {
  origin: "bottom",
});
ScrollReveal().reveal(".about__img", {
  origin: "left",
});

ScrollReveal({ reset: true });

// types.js
const typed = new Typed(".multiple-text", {
  strings: ["Frontend developer!", "Software engineer!", "Web developer!"],
  typeSpeed: 35,
  backSpeed: 35,
  backDelay: 1500,
  loop: true,
});

// handle entered user
async function trackVisitor() {
  try {
    // git.heroku.com/mahmudiy-uz.git
    const res = await fetch("https://localhost:4500/user-info", {
      method: "GET",
    });
    const data = await res.json();

    console.log(data);
  } catch (error) {
    console.error("Xatolik:", error);
  }
}
window.onload = trackVisitor;
