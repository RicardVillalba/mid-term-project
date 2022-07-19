const services = [
  {
    img: "./assets/services-section/icons/1.svg",
    name: "User Interface Design",
    description: "Circle provides you with a stunning user interface design that is accessible to everyone.",
    link: "#",
  },
  {
    img: "./assets/services-section/icons/2.svg",
    name: "User Experience Design",
    description: "Web DevelopCircle always focuses on delivering the best user experience to your customers.ment",
    link: "#",
  },
  {
    img: "./assets/services-section/icons/3.svg",
    name: "Application Development",
    description: "We develop high-quality mobile and web applications using the latest technology stack.",
    link: "#",
  },
];
const serviceCard = document.querySelector('#servicesCards');
services.forEach((service)=>{
  serviceCard.innerHTML+=`
  <div>
  <div>
  <img src="${service.img}" alt="service img">
</div>
  
  <p class="bodyMedium">${service.name}</p>
  <article class="headlineRegular">${service.description}</article>
  <a href="${service.link}">Learn more</a>
</div>
  `
  console.log(service);
})


