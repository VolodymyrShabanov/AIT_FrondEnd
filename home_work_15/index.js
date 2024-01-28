const form = document.getElementById("form");
const errorContainer = document.getElementById("errorContainer");
const loader = document.getElementById("loader");
const container = document.getElementById("container");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  clearList(container);
  clearList(errorContainer);

  loader.style.display = "block";

  const data = e.target.limit.value;

  try {
    if (data < 1 || data > 20) {
      loader.style.display = "none";
      throw new Error("invalid data");
    }

    e.target.limit.value = "";

    showResult(data);
  } catch (error) {
    console.error(error.message);
    printError("Incorrect number. Input number from 1 to 20");
  }
});

showResult(1);
loader.style.display = "block";

function showResult(data) {
  fetch(`https://fakestoreapi.com/products?limit=${data}`)
    .then((res) => {
      if (!res.ok) {
        throw new Error("link is error!!");
      }

      return res.json();
    })
    .then((resObj) => {
      loader.style.display = "none";
      resObj.map((el) => {
        const newDiv = createNewDiv(el);
        container.append(newDiv);
      });
    })

    .catch((error) => {
      console.error(error.message);
      printError("something is wrong");
    });
}


function createNewDiv(el) {
  const newDiv = document.createElement("div");
  newDiv.className = "newDiv";

  const imageDiv = document.createElement("div");
  imageDiv.className = "imageDiv";

  newDiv.appendChild(imageDiv);

  const image = document.createElement("img");
  image.className = "image";
  image.src = el.image;
  imageDiv.appendChild(image);

  const price = document.createElement("div");
  price.className = "price";
  price.innerText = el.price;
  imageDiv.appendChild(price);

  const category = document.createElement("div");
  category.className = "category";
  category.innerText = el.category;
  imageDiv.appendChild(category);

  const textDiv = document.createElement("div");
  textDiv.className = "textDiv";

  newDiv.append(textDiv);

  const title = document.createElement("h6");
  title.className = "title";
  title.innerText = el.title;
  textDiv.appendChild(title);

  const description = document.createElement("p");
  description.className = "description";
  description.innerText = el.description;
  textDiv.appendChild(description);

  return newDiv;
}

function clearList(list) {
  while (list.hasChildNodes()) {
    list.lastChild.remove();
  }
}

function printError(message) {
  const p = document.createElement("p");
  p.innerText = message;
  p.style.color = "red";
  errorContainer.append(p);
}

// Futuristic Loader

// const $i = document.querySelector("i");
// let progress = 0;

// setInterval(() => {
//   progress++;
//   console.log(progress);
//   $i.innerText = `${progress}%`;
//   if (progress === 100) {
//     progress = 0;
//   }
// }, 100);
