const btnSubmit = document.querySelector(".submit");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const username = document.querySelector(".username");

btnSubmit.addEventListener("click", () => {
  if (email.value == "" || password.value == "") {
    console.log("salah");
  } else {
    password.value = "";
    window.location.replace("/index.html");
  }
});

const btnSignUp = document.querySelector(".signUpSubmit");
btnSignUp.addEventListener("click", function () {
  if (email.value == "" || password.value == "" || username.value == "") {
    console.log("salah");
  } else {
    password.value = "";
    window.location.replace("index.html");
  }
});
