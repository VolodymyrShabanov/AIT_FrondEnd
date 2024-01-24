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
  let randomNum = Math.random();
  if (randomNum > 0.1) {
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
