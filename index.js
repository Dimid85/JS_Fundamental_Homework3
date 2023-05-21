//Завдання 1
/*function compareNumbers(a, b) {
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
compact([5, 3, 4, 5, 6, 7, 3]);*/

//Завдання 2
/*const resultArray = [];
function createArray(start, end) { 
   for (let i = start; i <= end; i++) { 
      resultArray.push(i);
   }
   return resultArray;
}*/

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

