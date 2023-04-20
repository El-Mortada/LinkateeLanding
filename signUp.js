/** @format */
const submitBtn = document.querySelector(".submitBtn");

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
  const arr = [];
  const response = await fetch(`https://linkatee.com/api/userRegister`, {
    method: "post",
    body: form,
  });
  let responseData = await response.json();
  console.log(responseData);
  arr.push(responseData);
};

// submitBtn.addEventListener("click", function () {
//   registerUser();
// });
