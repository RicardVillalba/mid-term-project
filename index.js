const projects = [
  {
    img: "./assets/projects-section/1.jpg",
    name: "Simplify",
    description: "UI Design & App Development",
    link: "#",
  },
  {
    img: "./assets/projects-section/2.jpg",
    name: "Dashcoin",
    description: "Web Development",
    link: "#",
  },
  {
    img: "./assets/projects-section/3.jpg",
    name: "Vectorify",
    description: "User Experience Design",
    link: "#",
  },
];
const card = document.querySelector('#cards');
projects.forEach((project)=>{
  card.innerHTML=`
  <div>
  <img src="${project.img}" alt="">
  <h3>${project.name}</h3>
  <p>${project.description}</p>
  <a href="${project.link}"></a>
</div>
  `
  console.log(project);
})


  


  // let projectName = document.createElement("p");
  // projectName.innerHTML = projects[i].name ;
  // let listname = document.getElementById("name");
  

  // let projectDescription = document.createElement("p");
  // projectDescription.innerHTML = projects[i].description;
  // let listDescription = document.getElementById("description");
  

  // let projectLink = document.createElement("p");
  // projectLink.innerHTML = projects[i].link;
  // let listLink = document.getElementById("link");

  // listname.appendChild(projectName);
  // listDescription.appendChild(projectDescription);
  // listLink.appendChild(projectLink);



  // for (let i = 0; i < projects.length; i++) {
  //   const card = document.querySelector('#cards');
  //   card.innerHTML=`
  //   <img src="${projects.img}" alt="">
  //   <h3>${projects.name}</h3>
  //   <p>${projects.description}</p>
  //   <a href="${projects.link}"></a>
  //   `
  //   console.log(projects);
  //   }
    