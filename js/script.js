// toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika varian menu di kilk
document.querySelector("#varian-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik di luar side bar untuk menghilangkan navbar
const varian = document.querySelector("#varian-menu");

document.addEventListener("click", function (e) {
  if (!varian.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
