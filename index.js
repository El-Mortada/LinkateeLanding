/** @format */

const toggleRight = document.querySelector(".toggleRight");
const toggleRightAr = document.querySelector(".toggleRight-ar");
const toggleMenu = document.querySelector(".toggleMenu");
const toggleMenuAr = document.querySelector(".toggleMenu-ar");
const changeLang = document.querySelectorAll(".lang");
const arabicContainer = document.querySelector(".arabicContainer");
const englishContainer = document.querySelector(".englishContainer");
const toggleModeSections = document.querySelectorAll(".toggleMode");
const subToggleModeSections = document.querySelectorAll(".subToggleMode");
const darkModeBtn = document.querySelector('input[type="checkbox"]');
const darkModeAr = document.querySelector('input[value="ar"]');

const showHideMenu = (toggleMenu) => {
  if (toggleMenu.classList.contains("hide")) {
    toggleMenu.classList.replace("hide", "show");
  } else if (toggleMenu.classList.contains("show")) {
    toggleMenu.classList.replace("show", "hide");
  }
};
toggleRight.addEventListener("click", () => {
  showHideMenu(toggleMenu);
});
toggleRightAr.addEventListener("click", () => {
  showHideMenu(toggleMenuAr);
});

const checkLang = () => {
  document.body.innerHTML = "";
  if (changeLang[0].classList.contains("ar")) {
    document.body.appendChild(arabicContainer);
  } else {
    document.body.appendChild(englishContainer);
  }
};
checkLang();

const changLangHandler = () => {
  changeLang.forEach((btn) => {
    btn.classList.toggle("ar");
  });
  checkLang();
};

changeLang.forEach((btn) => {
  btn.addEventListener("click", changLangHandler);
});
console.log(changeLang);

const toggleDarkMode = (darkBtn, arDark) => {
  if (darkBtn.checked) {
    arDark.checked = true;
    toggleModeSections.forEach((section) => {
      section.classList.add("darkMode");
    });
    subToggleModeSections.forEach((section) => {
      section.classList.add("subDarkMode");
    });
    console.log("hello");
  } else {
    arDark.checked = false;
    toggleModeSections.forEach((section) => {
      section.classList.remove("darkMode");
    });
    subToggleModeSections.forEach((section) => {
      section.classList.remove("subDarkMode");
    });
    console.log("no");
  }
};

darkModeBtn.addEventListener("change", function () {
  toggleDarkMode(darkModeBtn, darkModeAr);
});
darkModeAr.addEventListener("change", function () {
  toggleDarkMode(darkModeAr, darkModeBtn);
});
