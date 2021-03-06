const formContainer = document.getElementById("form-container");

const Template = [
  `
    <input placeholder="email" type="text" id="email">
    <input placeholder="password" type="password" id="password">
    <input type="submit" id="submit" value="Login">
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
//empty - не может случится но пускай)
const errorMessage = {
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
  Array.from(inputs).forEach((elem) => {
    elem.addEventListener("input", eventHandler);
  });
  buttonSubmit.addEventListener("click", onClick);
};

initForm(Template[1]);

const switcher = document.getElementById("switcher");

const sections = switcher.getElementsByTagName("div");

function setActive() {
  initForm(Template[Math.abs([...sections].indexOf(event.target))]);
}

function eventHandler() {
  if (event.target.value !== undefined) {
    checkUserData(event.target);
    buttonSubmit.disabled = disabledButtonState();
    setTargetInvalidOnBlur(event.target);
    if (event.target.value.length > 0) {
      event.target.classList.remove(INVALID_CLASS);
    } else {
      event.target.classList.add(INVALID_CLASS);
    }
  }
}

function setTargetInvalidOnBlur(target) {
  [...inputs].forEach((elem) => {
    elem.classList.remove(INVALID_CLASS);
  });
  target.classList.add(INVALID_CLASS);
  target.onblur = () => {
    if (target.value.length > 0) {
      target.classList.remove(INVALID_CLASS);
    }
  };
}

function disabledButtonState() {
  let disabled = !![...inputs].filter((input) => {
    console.log(input.value.length);
    if (input.value.length === 0) {
      return true;
    }
  });
  console.log(disabled);
  return disabled ? true : false;
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

const removeFault = () => {
  if (document.getElementById("alert")) {
    document.getElementById("alert").remove();
  }
};

const getData = (userInfo) => {
  Array.from(inputs).forEach((input) => {
    if (input.type !== "submit") userInfo[input.id] = input.value;
  });
  return userInfo;
};

inputs.login.focus();

const checkUserData = (target) => {
  // console.log(target.value)
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
        if (inputs["repeat password"].value === inputs.password.value) {
          console.log("Nice password");
        } else if (
          inputs["repeat password"].value.length > 0 &&
          inputs.password.value.length > 0
        ) {
          fault(errorMessage.rPassword);
        }
      }
      break;
    }
    default:
      break;
  }
};

function onClick() {
  event.preventDefault();
  let user = new User();
  getData(user);
  // console.log(user)
}
