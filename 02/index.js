const sayHello = (name) => {
  let text = "";

  if (name == "Mark") {
    text += "Hi, ";
  } else text += "Hello, ";
  return text + name;
};

const min = (a, b) => {
  return a > b ? b : a;
};

const pow = (x, n) => {
  return x ** n;
};

const isEven = (n) => {
  return n % 2 === 0 ? true : false;
};

const deleteChars = (str) => {
  return str.substring(0, str.length - 1).substring(1);
};

const convertFloor = (floor) => {
  return floor < 0 ? floor : floor > 13 ? floor : floor + 1;
};

function convertType(value, toType) {
  if (toType === "boolean") {
    return Boolean(value);
  } else if (toType === "string") {
    return String(value);
  } else if (toType === "number") {
    return Number(value);
  }
}

function convertType1(value, toType) {
  switch (toType) {
    case "boolean":
      return Boolean(value);
    case "string":
      return String(value);
    case "number":
      return Number(value);
  }
}
const convertType2 = function (value, toType) {
  switch (toType) {
    case "boolean":
      return Boolean(value);
    case "string":
      return String(value);
    case "number":
      return Number(value);
  }
};

const convertType3 = (value, toType) => {
  switch (toType) {
    case "boolean":
      return Boolean(value);
    case "string":
      return String(value);
    case "number":
      return Number(value);
  }
};

const transformArray = (arr, index1, index2, adding) => {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]];

  let newArr = arr.map((item) => {
    return (item += adding);
  });
  return newArr;
};

// let smth = transformArray(["fngp", "kgei", "fpos", "clfw"], 2, 3, "green")
// console.log(smth)

const digitalRootInner = (n) => {
  n = n.toString().split("");
  let text = n.join(" + ");
  console.log(text);
  let sum = n.reduce((a, b) => {
    return Number(a) + Number(b);
  });
  console.log(sum > 10 ? sum + " ..." : sum);
  return sum;
};

const digitalRoot = (n) => {
  while (n > 10) {
    n = digitalRootInner(n);
  }
};
