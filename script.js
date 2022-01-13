const navBtn = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");

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
    } else {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0, // when hero is outside the viewport
    rootMargin: "-80px",
  }
);
obs.observe(hero);
