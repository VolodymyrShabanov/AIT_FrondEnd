// * Task 1
const cars = [
  { brand: "BMW", price: 20_000, isDiesel: true },
  { brand: "Mercedes", price: 22_000, isDiesel: false },
  { brand: "Porshe", price: 50_000, isDiesel: true },
  { brand: "Nissan", price: 25_000, isDiesel: false },
];

// Option 1
const halfCars1 = [];
cars.map((el) => {
  halfCars1.push({ name: el.brand, isDiesel: el.isDiesel });
});
console.log("halfCars1: ", halfCars1);

// Option 2 - используем деструктуризацию
const halfCars2 = cars.map(({ brand, isDiesel }) => ({ brand, isDiesel }));
console.log("halfCars2: ", halfCars2);

// Task 2
const onlyDiesel = cars.filter((car) => car.isDiesel === true);
console.log("onlyDiesel: ", onlyDiesel);

// Task 3
const notDiesel = cars.filter((car) => car.isDiesel !== true);
console.log("notDiesel: ", notDiesel);

// Task 4
const priceOnlyDiesel = cars
  .filter((car) => car.isDiesel === true)
  .map((car) => car.price)
  .reduce((sum, price) => sum + price, 0);

console.log("priceOnlyDiesel: ", priceOnlyDiesel);

// Task 5
cars.forEach((car) => (car.price *= 1.2));
console.log("cars (price + 20%: ", cars);

// Task 6
const newCarsWithoutDiesel = cars.map((car) =>
  car.isDiesel === true
    ? { brand: "Tesla", price: 25_000, isDiesel: false }
    : car
);

console.log("newCarsWithoutDiesel: ", newCarsWithoutDiesel);

// Task 7

const toDoList = [
  { data: "18.01.2024", time: "09:00", task: "German - lessons" },
  { data: "18.01.2024", time: "17:30", task: "AIT" },
  { data: "19.01.2024", time: "09:00", task: "German - lessons" },
  { data: "19.01.2024", time: "17:30", task: "AIT" },
  { data: "22.02.2024", time: "09:00", task: "German - lessons" },
  { data: "22.02.2024", time: "17:30", task: "AIT" },
  { data: "23.02.2024", time: "09:00", task: "German - lessons" },
  { data: "23.02.2024", time: "17:30", task: "AIT" },
];
console.log("toDoList start: ", toDoList);

toDoList.splice(5, 0, {
  data: "22.02.2024",
  time: "15:30",
  task: "consultation AIT",
});
console.log("toDoList splice() add new task:", toDoList);

const mondayDoList = toDoList.slice(4, 7);
console.log("mondayDoList:", mondayDoList);

toDoList.splice(4, 1);
console.log("toDoList splice() delete one task: ", toDoList);
