const getFilmBtn = document.getElementById("getFilm");
const filmContainer = document.getElementById("filmContainer");
const el = document.getElementById("el");
const ul = document.getElementById("ul");

getFilmBtn.addEventListener("click", () => {
getFilm();
});

async function getFilm() {
  try {
    const res = await fetch(
      "https://volodymyrshabanov.github.io/star-wars/star_wars.json"
    );

    if (!res.ok) {
      console.log("res.status: ", res.status);
      throw new Error("Ошибка! Статус: " + res.status);
    }

    const data = await res.json();

    const { cast, director, poster: banner, title, year } = data;
    const bannerImg = document.createElement("img");
    bannerImg.src = banner;
    bannerImg.style.width = "300px";
    // console.log(filmContainer);
    filmContainer.append(bannerImg);

    const titleText = document.createElement("h4");
    titleText.id = "titleText";

    titleText.innerText = title;
    filmContainer.append(titleText);

    const description = document.createElement("h6");
    description.innerText = `director: ${director}, year: ${year}`;

    cast.map((el) => {
      let actorLink = document.createElement("a");
      actorLink.innerText = el.name;
      actorLink.href = el.link;
      actorLink.href = el.link;
      filmContainer.append(actorLink);
    });

  } catch (error) {
    console.error(error.message);
    const textError = document.createElement("p");

    textError.innerText = "Ссылка отсутствует!";
    textError.style.color = "red";
    filmContainer.append(textError);
  }
}

// пример "всплытия"

// В контексте программирования и веб-разработки термин "всплытие" (bubbling) обычно относится к событийной модели DOM (Document Object Model). Всплытие описывает порядок, в котором браузер обрабатывает события, когда они возникают на вложенных элементах.

el.addEventListener("click", (e) => {
  e.stopPropagation(); // останавливает "всплытие"
  console.log("clack");
  el.style.color = "red";
});

ul.addEventListener("click", () => {
  ul.style.backgroundColor = "blue";
  console.log("click");
});

// bubbling
// Получаем ссылку на родительский элемент
const parentElement = document.getElementById('parent');

// Добавляем обработчик события на родительский элемент
parentElement.addEventListener('click', function(event) {
  // Проверяем, был ли кликнут элемент с классом "child"
  if (event.target.classList.contains('child')) {
    // Получаем текст кнопки, на которую был клик
    const buttonText = event.target.innerText;
    
    // Выводим текст в консоль
    console.log(`Кликнута кнопка с текстом: ${buttonText}`);
  }
});

// В этом примере:

// Обработчик событий прикреплен к родительскому элементу parentElement.
// При клике на любую из кнопок внутри родительского элемента событие всплывет, и обработчик проверяет, был ли кликнут элемент с классом "child".
// Если условие выполняется, обработчик выполняет необходимые действия, например, выводит текст кнопки в консоль.
// Таким образом, обработчик событий добавлен на родительский элемент, и он способен обрабатывать клики на всех вложенных кнопках без необходимости добавления обработчика к каждой из них отдельно. Это делает код более эффективным и удобным для обслуживания.

