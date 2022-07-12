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

for (let i = 0; i < projects.length; i++) {
  let projectName = document.createElement("p");
  projectName.innerHTML = projects[i].name ;
  let listname = document.getElementById("name");
  

  let projectDescription = document.createElement("p");
  projectDescription.innerHTML = projects[i].description;
  let listDescription = document.getElementById("description");
  

  let projectLink = document.createElement("p");
  projectLink.innerHTML = projects[i].link;
  let listLink = document.getElementById("link");

  listname.appendChild(projectName);
  listDescription.appendChild(projectDescription);
  listLink.appendChild(projectLink);
}

