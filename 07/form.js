const formContainer = document.getElementById("form-container");
const container = document.getElementById("alert-container");

const Template = [
  `
    <input placeholder="email" type="text" id="email">
    <input placeholder="password" type="password" id="password">
    <button type="submit" id="submit" value="Login">Login</button>
`,
  `
    <input placeholder="login" type="text" id="login">    
    <input placeholder="name" type="text" id="name">
    <input placeholder="age" type="text" id="age">
    <input placeholder="email" type="text" id="email">
    <input placeholder="city" type="text" id="city">
    <input placeholder="password" type="password" id="password">
    <input placeholder="repeat password" type="password" id="repeat password">
    <button type="submit" id="submit" value="Register">Register</button>
`,
];

const INVALID_CLASS = "invalid";
const ACTIVE_CLASS = "active";
const errorMessage = {
  wLogin: "email or password is wrong",
  login: "Please check login",
  name: "Name is empty",
  age: "Age is not a number",
  email: "Email is not email",
  city: "City is empty",
  password: "Password is empty",
  rPassword: "Password don't match",
};

let inputs;
let buttonSubmit;

class User {
  constructor(login, name, age, email, city, password, rPassword) {
    this.login = login;
    this.name = name;
    this.age = age;
    this.email = email;
    this.city = city;
    this.password = password;
    this["repeat password"] = rPassword;
  }
}

const regObject = {
  login: /^[^,.]+$/,
  age: /^\d+$/,
  email: /\S+@\S+\.\S+/,
};

const initForm = (template) => {
  let form = document.createElement("form");
  form.className = "form";
  form.id = "form";
  form.innerHTML = template;
  formContainer.append(form);
  inputs = form.getElementsByTagName("input");
  buttonSubmit = document.getElementById("submit");
  buttonSubmit.disabled = disabledButtonState();
  [...inputs].forEach((elem) => {
    elem.addEventListener("input", inputEventHandler);
  });
  buttonSubmit.addEventListener("click", onClick);
};

const removeForm = () => {
  formContainer.innerHTML = "";
};

const switcher = document.getElementById("switcher");

const sections = switcher.getElementsByTagName("div");

for (let section of sections) {
  section.addEventListener("click", setActive);
}

const firstInit = {
  target: sections[0],
};

setActive(firstInit);

function setActive({ target }) {
  sections[Math.abs([...sections].indexOf(target))].classList.add(ACTIVE_CLASS);
  sections[Math.abs([...sections].indexOf(target) - 1)].classList.remove(
    ACTIVE_CLASS
  );
  removeForm();
  initForm(Template[Math.abs([...sections].indexOf(target))]);
}

function inputEventHandler(event) {
  if (event.target.value !== undefined) {
    checkUserData(event.target);
    buttonSubmit.disabled = disabledButtonState();
    // setTargetInvalidOnBlur(event.target);
    if (event.target.value.length > 0) {
      event.target.classList.remove(INVALID_CLASS);
    } else {
      event.target.classList.add(INVALID_CLASS);
    }
  }
}

// function setTargetInvalidOnBlur(target) {
//   [...inputs].forEach((elem) => {
//     elem.classList.remove(INVALID_CLASS);
//   });
//   target.classList.add(INVALID_CLASS);
//   target.onblur = () => {
//     if (target.value.length > 0) {
//       target.classList.remove(INVALID_CLASS);
//     }
//   };
// }

function disabledButtonState() {
  for (let input of inputs) {
    if (!(input.value.length > 0)) {
      return true;
    }
  }
  return false;
}
disabledButtonState();

const fault = (errorMessage) => {
  if (!document.getElementById("alert")) {
    let alert = document.createElement("p");

    alert.innerText = errorMessage;
    alert.className = "alert";
    alert.id = "alert";
    container.append(alert);

    console.log(alert);

    setTimeout(() => {
      alert.remove();
    }, 2000);
    return null;
  }
};

// const removeFault = () => {
//   if (document.getElementById("alert")) {
//     document.getElementById("alert").remove();
//   }
// };

const getData = (userInfo) => {
  [...inputs].forEach((input) => {
    if (input.type !== "submit") userInfo[input.id] = input.value;
  });
  return userInfo;
};

// inputs[0].focus();

const checkUserData = (target) => {
  console.log(target.value);
  let regExp;
  switch (target.id) {
    case "login": {
      regExp = new RegExp(regObject.login);
      if (regExp.test(target.value)) {
        console.log("Nice login");
      } else fault(errorMessage.login);
      break;
    }
    case "name": {
      if (target.value.length > 0) {
        console.log("Nice name");
      } else fault(errorMessage.name);
      break;
    }
    case "age": {
      regExp = new RegExp(regObject.age);

      if (regExp.test(target.value)) {
        console.log("Nice age");
      } else fault(errorMessage.age);
      break;
    }
    case "email": {
      regExp = new RegExp(regObject.email);

      if (regExp.test(target.value)) {
        console.log("Nice email");
      } else fault(errorMessage.email);
      break;
    }
    case "city": {
      if (target.value.length > 0) {
        console.log("Nice city");
      } else fault(errorMessage.city);
      break;
    }
    case "repeat password":
    case "password": {
      if (target.value.length > 0) {
        if (inputs["repeat password"]) {
          if (inputs["repeat password"].value === inputs.password.value) {
            console.log("Nice password");
          } else if (
            inputs["repeat password"].value.length > 0 &&
            inputs.password.value.length > 0
          ) {
            fault(errorMessage.rPassword);
          }
        }
      }
      break;
    }
    default:
      break;
  }
};

const sayHi = () => {
  container.innerText = `Hello, ${User.name}`;
};

function onClick() {
  event.preventDefault();
  let user = new User();
  getData(user);
  console.log(user);
  switch (event.target.value) {
    case "Login": {
      if (inputs.email === User.email && inputs.password === User.password) {
        sayHi();
      } else fault(errorMessage.wLogin);
      break;
    }
    case "Register":
      break;
    default:
      break;
  }
}
