const authName = document.querySelector(".name");
const email = document.querySelector(".email");
const username = document.querySelector(".username");
const password = document.querySelector(".password");
const submitBtn = document.querySelector(".submitBtn");

const signUp = () => {
  if (localStorage.getItem("username")) {
    window.alert("User Already Logged In");
    window.location.href = "/";
  } else {
    submitBtn.addEventListener("click", () => {
      event.preventDefault();
      window.localStorage.setItem("username", username.value);
      window.localStorage.setItem("password", password.value);
      window.localStorage.setItem("email", email.value);
      window.localStorage.setItem("name", authName.value);
      window.location.href = "../Pages/login.html";
    });
  }
};

signUp();
