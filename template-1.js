/** @format */

const nav = document.querySelector(".navBar");
const profileContainer = document.querySelector(".profileContainer");
const openBtn = document.querySelector(".open");
const sideBox = document.querySelector(".sideBox");
const links = document.querySelectorAll(".sideBox a");
const logOut = document.querySelector(".logout");

const checkToken = () => {
  if (localStorage.getItem("userToken") == null) {
    window.location.href = "logIn.html";
  }
};
checkToken();

openBtn.addEventListener("click", function () {
  openBtn.classList.toggle("openHandler");
  sideBox.classList.toggle("widthHandler");
  links.forEach((link) => {
    link.classList.toggle("show-hide-link");
  });
  logOut.classList.toggle("get-logout-up");
});

profileContainer.addEventListener("scroll", () => {
  if (profileContainer.scrollTop <= 25) {
    nav.classList.replace("show", "hide");
  } else if (profileContainer.scrollTop >= 75) {
    nav.classList.add("show");
    nav.classList.remove("hide");
  }
});
