const sections = document.querySelectorAll("section");
const navlinks = document.querySelectorAll("header nav a");
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");
const form = document.querySelector("form");
const firstName = document.querySelector(".firstName");
const lastName = document.querySelector(".lastName");
const email = document.querySelector(".email");
const phoneNumber = document.querySelector(".phoneNumber");
const message = document.querySelector(".message");
const msg = document.querySelector(".msg");
const msgText = document.querySelector(".msg__text");
const msgx = document.querySelector(".msg__x");
const servicesOrder = document.querySelector(".services__order");
const helpEl = document.querySelector(".help-ai");

// menu part
menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// Navbar links settings
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

// Scroll Reveal
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

// Typed.js
const typed = new Typed(".multiple-text", {
  strings: ["Frontend Developer!", "Software engineer!", "Web Developer!"],
  typeSpeed: 35,
  backSpeed: 35,
  backDelay: 1500,
  loop: true,
});

// watch user
async function trackVisitor() {
  try {
    // IP manzilni olish
    // const ipResponse = await fetch("https://api64.ipify.org?format=json");
    // const ipData = await ipResponse.json();
    // const ip = ipData.ip;

    // Qurilma haqida ma'lumot olish
    // const userAgent = navigator.userAgent;

    // Backendga ma'lumotni yuborish
    const res = await fetch("http://localhost:4500/user-info", {
      method: "GET",
    });
    const data = await res.json();

    console.log(data);
  } catch (error) {
    console.error("Xatolik:", error);
  }
}

// Sahifa yuklanganda foydalanuvchini kuzatish
window.onload = trackVisitor;
