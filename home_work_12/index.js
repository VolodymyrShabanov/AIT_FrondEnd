// Task 1
function getStudent() {
  return new Promise(function (resolve) {
    setTimeout(() => {
      resolve({ name: "Anri", age: 32 });
    }, 4000);
  });
}

let result = getStudent();

result.then((el) => console.log(el)).catch((error) => console.log(error));

// Task 2
function getDriverLicence(success, failure) {
  if (Math.random() > 0.1) {
    return success("успех!");
  } else {
    return failure("упс, неудача :(");
  }
}

function success(result) {
  console.log(`Успешно завершено с результатом ${result}`);
}

function failure(error) {
  console.log(`Завершено с ошибкой ${error}`);
}

getDriverLicence(success, failure);

console.log(Math.floor(Math.random()*10) + 1); // Math.floor() -> округляет до целого числа;