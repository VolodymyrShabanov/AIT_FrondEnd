// // Task 1
// let arrayName = ["Семен", "Иван", "Петр", "Татьяна"];
// let arrayAge = [18, 27, 74, 34];

// let arrayResult = new Array(4);

// for(let i = 0; i < arrayName.length; i++){
   
//    let year = (arrayAge[i] % 10 == 4) ? "года": "лет";
   
//    arrayResult[i] = arrayName[i] + " " + arrayAge[i] + " " + year;
// //    arrayResult.push(arrayName[i] + " " + arrayAge[i] + " " + year);
// }

// console.log(arrayResult);

// // Task 2
// // arrayResult.reverse();
// // console.log(arrayResult);

// const arrayRevers = [];

// for(let i = 0; i < arrayResult.length; i++){
//     arrayRevers.unshift(arrayResult[i]);
// }

// console.log(arrayRevers);


var arguments = 42;
var arr = () => arguments;

arr(); // 42

console.log(arguments[0]);

function foo() {
  var f = (i) => arguments[0] + i; // Неявное связывание ссылки arguments
  // стрелочной функции f
  // c объектом arguments функции foo
  return f(10);
}

console.log(foo(1)); // 3


