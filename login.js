const username = document.querySelector(".username");
const password = document.querySelector(".password");
const signInBtn = document.querySelector(".submitBtn");
const loginHeader = document.querySelector(".loginHeader");

const signinVerification = () => {
  signInBtn.addEventListener("click", () => {
    event.preventDefault();
    if (
      username.value === localStorage.getItem("username") &&
      password.value === localStorage.getItem("password")
    ) {
      window.alert("Success");
      window.location.href = "/";
    } else {
      window.alert("Username/Password Incorrect");
    }
  });
};

const signOut = () => {
  if (localStorage.getItem("username") && localStorage.getItem("password")) {
    signInBtn.value = "Sign Out";
    loginHeader.textContent = "Log Out";
    username.value = localStorage.getItem("username");
    password.value = localStorage.getItem("password");
  }

  signInBtn.addEventListener("click", () => {
    localStorage.clear();
  });
};

signinVerification();
signOut();
