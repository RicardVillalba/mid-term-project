const project = document.querySelector("#project");
fetch("https://jsonplaceholder.typicode.com/posts/3")
  .then((response) => response.json())
  .then(
    (json) =>
      (project.innerHTML += `
      <div class="title">
      <h1>${json.title.slice(0, 20)}</h1>
  </div>
  <div class="subTitle">
      <p>${json.body.slice(0, 50)}</p>
      <p><span>Completed on</span> June 22, 2021</p>
  </div>
  <div class="projectContent">
      <img src="../../assets/projects-section/3.jpg" alt="img1">
      <div>
          <p>${json.body}</p>
          <p>${json.body}</p>
      </div>
  </div>
 `)
  );


  const card = document.querySelector("#cards");
  fetch("https://jsonplaceholder.typicode.com/posts/4")
    .then((response) => response.json())
    .then(
      (json) =>
        (card.innerHTML += `
      <div>
      <img src="../../assets/projects-section/4.jpg" alt="project img">
      <p class="bodyMedium">${json.title.slice(0, 20)}</p>
      <article class="headlineRegular">${json.body.slice(0, 50)}</article>
      <a href="./pages/projectsPages/project1.html">Learn more</a>
    </div>
   `)
    );
  fetch("https://jsonplaceholder.typicode.com/posts/5")
    .then((response) => response.json())
    .then(
      (json) =>
        (card.innerHTML += `
      <div>
      <img src="../../assets/projects-section/5.jpg" alt="project img">
      <p class="bodyMedium">${json.title.slice(0, 20)}</p>
      <article class="headlineRegular">${json.body.slice(0, 50)}</article>
      <a href="./pages/projectsPages/project2.html">Learn more</a>
    </div>
   `)
    );
  fetch("https://jsonplaceholder.typicode.com/posts/6")
    .then((response) => response.json())
    .then(
      (json) =>
        (card.innerHTML += `
      <div>
      <img src="../../assets/projects-section/6.jpg" alt="project img">
      <p class="bodyMedium">${json.title.slice(0, 20)}</p>
      <article class="headlineRegular">${json.body.slice(0, 50)}</article>
      <a href="./pages/projectsPages/project3.html">Learn more</a>
    </div>
   `)
    );
  
    