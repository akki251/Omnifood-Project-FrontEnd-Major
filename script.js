const navBtn = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");

const links = document.querySelectorAll(".main-nav-link");
console.log(links);

navBtn.addEventListener("click", function () {
  // TODO: toggle check if the class is present, it removes and viceversa
  header.classList.toggle("nav-open");
});

// STICKY NAVIGATION
// INTERSECTION OBSERVER

const hero = document.querySelector(".section-hero");
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (ent.isIntersecting == false) {
      document.body.classList.add("sticky");
    } else if (ent.isIntersecting == true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0, // when hero is outside the viewport
    rootMargin: "-110px",
  }
);
obs.observe(hero);

for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", () => {
    header.classList.remove("nav-open");
  });
}
