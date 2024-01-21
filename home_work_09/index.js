// Task 1
/**
 * @param {array} arr
 * @param {integer} index
 * @returns
 */
const byIndex = (arr, index) => arr[index];

console.log(byIndex(["apple", "orange", "banana"], 2));

// Task 2
// * Option 1

/**
 * @param {string} code
 * @param {Function} decode
 * @returns string
 */
function weather(code, decode) {
  return decode(code);
}

/**
 * @param {string} code
 * @returns string
 */
function decode(code) {
  let result;
  switch (code) {
    case "SQ":
      result = "шквал";
      break;
    case "PO":
      result = "пыльный вихрь";
      break;
    case "FC":
      result = "торнадо";
      break;
    case "BR":
      result = "дымка (видимость от 1 до 9 км)";
      break;
    case "HZ":
      result = "мгла (видимость менее 10 км)";
      break;
    case "FU":
      result = "дым (видимость менее 10 км)";
      break;
    case "DS":
      result = "пыльная буря (видимость менее 10 км)";
      break;
    case "SS":
      result = "песчаная буря (видимость менее 10 км)";
      break;
    default:
      result = "код в таблице соответствий - не найдем!";
  }

  return result;
}

let weatherToday = weather("BR", decode);
console.log("weatherToday: ", weatherToday);

// Option 2

/**
 * @param {string} code
 * @param {Function} decodeFind
 * @returns string
 */
function weatherFind(code, decodeFind) {
  return decodeFind(code);
}

/**
 * @param {string} code
 * @param {array} tableCodeDescription
 * @returns
 */
function decodeFind(code) {
  const tableCodeDescription = [
    { code: "SQ", description: "шквал" },
    { code: "PO", description: "пыльный вихрь" },
    { code: "FC", description: "торнадо" },
    { code: "BR", description: "дымка (видимость от 1 до 9 км)" },
    { code: "HZ", description: "мгла (видимость менее 10 км)" },
    { code: "FU", description: "дым (видимость менее 10 км)" },
    { code: "DS", description: "пыльная буря (видимость менее 10 км)" },
    { code: "SS", description: "песчаная буря (видимость менее 10 км)" },
  ];

  return tableCodeDescription.find((el) => el.code === code)?.description;
}

let weatherTodayFind = weatherFind("SQ", decodeFind);
console.log("weatherTodayFind: ", weatherTodayFind);
