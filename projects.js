const card = document.querySelector("#cards");
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then(
    (json) =>
      (card.innerHTML += `
    <div>
    <img src="./assets/projects-section/1.jpg" alt="project img">
    <p class="bodyMedium">${json.title.slice(0, 20)}</p>
    <article class="headlineRegular">${json.body.slice(0, 50)}</article>
    <a href="#">Learn more</a>
  </div>
 `)
  );
fetch("https://jsonplaceholder.typicode.com/posts/2")
  .then((response) => response.json())
  .then(
    (json) =>
      (card.innerHTML += `
    <div>
    <img src="./assets/projects-section/2.jpg" alt="project img">
    <p class="bodyMedium">${json.title.slice(0, 20)}</p>
    <article class="headlineRegular">${json.body.slice(0, 50)}</article>
    <a href="#">Learn more</a>
  </div>
 `)
  );
fetch("https://jsonplaceholder.typicode.com/posts/3")
  .then((response) => response.json())
  .then(
    (json) =>
      (card.innerHTML += `
    <div>
    <img src="./assets/projects-section/3.jpg" alt="project img">
    <p class="bodyMedium">${json.title.slice(0, 20)}</p>
    <article class="headlineRegular">${json.body.slice(0, 50)}</article>
    <a href="#">Learn more</a>
  </div>
 `)
  );

