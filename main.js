document.querySelector("nav ul").addEventListener("click", (e) => {
  e.preventDefault();

  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    const y =
      document.querySelector(id).getBoundingClientRect().top +
      window.pageYOffset -
      170;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
});

const strengths = document.querySelectorAll(".strength");
const descriptions = document.querySelectorAll(".strength__description");

strengths.forEach((strength, i) => {
  strength.addEventListener("click", (e) => {
    strengths.forEach((strength) => {
      strength.classList.remove("strength--active");
    });
    strength.classList.add("strength--active");

    descriptions.forEach((description) => {
      description.classList.remove("strength__description--active");
    });
    document
      .querySelector(`.strength__description--${i}`)
      .classList.add("strength__description--active");
  });
});

const allSections = document.querySelectorAll("section");

const revealSection = function (entries) {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section--hidden");
  sectionObserver.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.2,
});

allSections.forEach((section) => {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});

const percentageBar = document.querySelectorAll(".skill__bar--percentage");
percentageBar.forEach((bar) => {
  const value = bar
    .closest(".skill__right")
    .querySelector(".percentage").textContent;
  bar.style.width = `${value}%`;
});
