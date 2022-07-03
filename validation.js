let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let fristname = id("fristname"),
  lastname = id("lastname"),
  email = id("email"),
  password = id("pwd"),
  form = id("form"),
  errorMsg = classes("error"),
  errorIcon = classes("error-icon");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  engine(fristname, 0, "Frist Name cannot be empty");
  engine(lastname, 1, "Last Name cannot be empty");
  engine(email, 2, "Looks like this is not an email");
  engine(password, 3, "Password cannot be empty");
});

let engine = (id, serial, message) => {
  if (id.value.trim() === "") {
    errorMsg[serial].innerHTML = message;
    id.style.border = "2px solid red";

    errorIcon[serial].style.background =
      "url(images/icon-error.svg) no-repeat right";
  }
};
