const navigationSection = document.querySelector(".navigation-list");
const toggleButton = document.querySelector(".toggle-butten");

toggleButton.addEventListener("click", () => {
  console.log("test");
  navigationSection.classList.toggle("active");
});

function myFunction(x) {
  x.classList.toggle("fa-x");
}
