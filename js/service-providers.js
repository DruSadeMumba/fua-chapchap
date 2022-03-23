let container = document.querySelector(".container"),
  pwShowHide = document.querySelectorAll(".showHidePw"),
  pwFields = document.querySelectorAll(".password"),
  signUp = document.querySelector(".signup-link"),
  login = document.querySelector(".login-link");

//   T0 show/hide the password(eye flash)
pwShowHide.forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", () => {
    pwFields.forEach((pwField) => {
      if (pwField.type === "password") {
        pwField.type = "text";

        pwShowHide.forEach((icon) => {
          icon.classList.replace("uil-eye-slash", "uil-eye");
        });
      } else {
        pwField.type = "password";

        pwShowHide.forEach((icon) => {
          icon.classList.replace("uil-eye", "uil-eye-slash");
        });
      }
    });
  });
});

// To hide one form and make the other to disappear (signup and login form)
signUp.addEventListener("click", () => {
  container.classList.add("active");
});
login.addEventListener("click", () => {
  container.classList.remove("active");
});

// validate the signUp form
function validateForm() {
  var Name = document.getElementById("name");
  var Phone = document.getElementById("phone");
  var BusinessNo = document.getElementById("number");
  var Location = document.getElementById("location");
  var Password = document.getElementById("pass");
  if (
    Name.value == "" ||
    Phone.value == "" ||
    Location.value == "" ||
    BusinessNo.value == "" ||
    Password.value == ""
  ) {
    alert("Please enter the required details");
    return false;
  } else {
    true;
  }
}

// validate the login form
function validate() {
  var Username = document.getElementById("username");
  var Password2 = document.getElementById("password");
  if (Username.value == "" || Password2.value == "") {
    alert("Please enter the required details");
    return false;
  } else {
    true;
  }
}
