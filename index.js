//Завдання 1
function compareNumbers(a, b) {
 return a - b;
}

function compact(array) {
 let arrayCopySort = [...array].sort(compareNumbers);
 let j = 1;
 let includeArrayValue = [];
 for (let i = 0; i < arrayCopySort.length; i++) {
   if (arrayCopySort[i] === arrayCopySort[i + 1]) {
     j++;
   } else {
     includeArrayValue.push(arrayCopySort[i]);
   }
 }
 console.log(includeArrayValue);
}

//Завдання 2
const resultArray = [];
function createArray(start, end) { 
   for (let i = start; i <= end; i++) { 
      resultArray.push(i);
   }
   return resultArray;
}

//Завдання 3
const resultArray = [];
function createArray(a, b) {
  for (let i = a; i <= b; i++) {
    for (j = 0; j < i - a + 1; j++) {
      resultArray.push(i);
    }
  }
  return resultArray;
}

//Завдання 4
function randArray(k) { 
  const randomArray = [];
  for (let i = 0; i < k; i++) { 
    randomArray.push(Math.floor(Math.random() * 500));
  } return randomArray;
}

//Завдання 5
function sortArray(array) { 
  let oneDementionArray = array.flat();
  let onlyNumbers = [];
  let onlyString = [];

  for (let i = 0; i < oneDementionArray.length; i++) {
    if (typeof oneDementionArray[i] === 'string') {
      onlyString.push(oneDementionArray[i]);
    } else { 
      onlyNumbers.push(oneDementionArray[i]);
    }
  }
  return {
    stringArray: onlyString,
    numbersArray: onlyNumbers
  };
}

//Завдання 6
const mathOperations = function (a, b, op) { 
  if (isNaN(Number(a)) || isNaN(Number(b)) || isNaN(Number(op))) {
    return "Incorrect input"
  } else {
    switch (op) {
      case 1: console.log(a - b);
        break;
 
      case 2: console.log(a * b);
        break;
      case 3: console.log(a / b);
        break;
      default: console.log(a + b);
    }
  }
 }
 
 //Завдання 7
 function compareNumbers(a, b) {
  return a - b;
 }
 function findUnique(array) {
  let arrayCopySort = [...array].sort(compareNumbers);
  for (let i = 0; i < arrayCopySort.length; i++) {
    if (arrayCopySort[i] === arrayCopySort[i + 1]) {
      return "Not unique";
    }
  }
  return "Unique";
 }
 
 //Завдання 8
 function create(pass) { 
  return function (stringValue) { 
    return pass === stringValue;
  }
 }
 const tom = create("pass_for_Tom");
 tom("pass_for_Tom");
 
 //Завдання 8 від VladKhrychov version 1:
 let time = new Date();
 let currentTime = time.getHours();
 if (currentTime > 5 && currentTime <= 11) {
   console.log("Доброго ранку");
 } else if (currentTime > 11 && currentTime <= 17) {
   console.log("Доброго дня");
 } else if (currentTime > 17 && currentTime <= 23) {
   console.log("Доброго вечора");
} else console.log("Доброї ночі");
 
 //Завдання 8 від VladKhrychov version 2:
 let time = new Date();
 let currentTime = time.getHours();
 (currentTime > 5 && currentTime <= 11) ? console.log("Доброго ранку") : (currentTime > 11 && currentTime <= 17) ? console.log("Доброго дня") :(currentTime > 17 && currentTime <= 23)? console.log("Доброго вечора") : console.log("Доброї ночі");

//Завдання 8 від VladKhrychov version 3:
const time = new Date();
const currentTime = time.getHours();

switch (true) {
  case currentTime > 5 && currentTime <= 11:
    console.log("Доброго ранку");
    break;
  case currentTime > 11 && currentTime <= 17:
    console.log("Доброго дня");
    break;
  case currentTime > 17 && currentTime <= 23:
    console.log("Доброго вечора");
    break;
  default:
    console.log("Доброї ночі");
}
