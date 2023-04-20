/** @format */
const submitBtn = document.querySelector(".submitBtn");

let arr = [];

const forms = document.querySelectorAll(".requires-validation");
Array.from(forms).forEach(function (form) {
  submitBtn.addEventListener(
    "click",
    function (event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }

      form.classList.add("was-validated");
      registerUser(event);
    },

    false
  );
});

const registerUser = async (e) => {
  e.preventDefault();
  const form = new FormData(document.querySelector(".formData"));
  const response = await fetch(`https://linkatee.com/api/userLogin`, {
    method: "post",
    body: form,
  });
  const responseData = await response.json();
  if (responseData.access_token) {
    const userToken = responseData.access_token;
    localStorage.setItem("userToken", userToken);
    window.location.href = "template-1.html";
  }

  return;
};
