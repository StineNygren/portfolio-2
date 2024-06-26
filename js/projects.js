const projectContainer = document.querySelector(".project-container");

const projectApi = [
  {
    title: "Holidaze",
    img: "../img/holidaze.png",
    date: "2024",
    url: "https://holidazze.netlify.app",
    description:
      "Holidaze is a fictional hotel booking site where users can search for hotels, view details, and make bookings. The site was built using React, Redux, and Material-UI. It is fully responsive and has been tested using Cypress.",
    git: "https://github.com/StineNygren/stine_nygren_exam_2",
  },
  {
    title: "Shopop",
    img: "../img/shopop.png",
    date: "2024",
    url: "https://nimble-rabanadas-69ddec.netlify.app",
    description:
      "Shopop is a fictional e-commerce site where users can view products, add them to their cart, and make purchases. The site was built using React and Material-UI. It is fully responsive.",
    git: "https://github.com/StineNygren/stine_react_ca",
  },
  {
    title: "Auction Avenue",
    img: "../img/AuctionAvenue1.png",
    date: "2023",
    url: "https://stinenygren.github.io/nygren_semester_project_2/",
    description:
      "Auction Avenue is a pretend auction site where people can make their own auction or bid on someone else's. The site was made using an API provided by Noroff and is fully responsive. It has been tested using Jest and Cypress and had passed all Github Actions.  ",
    git: "https://github.com/StineNygren/nygren_semester_project_2",
  },
  {
    title: "GoldBrews",
    img: "../img/goldbrew.png",
    date: "2023",
    url: "https://vermillion-marshmallow-256c0b.netlify.app/",
    description:
      "Using HTML, CSS, and JavaScript, I built the website from scratch. To retrieve and display blog posts, I created a custom API within WordPress. This allowed me to integrate the blog posts through my page. The website is fully responsive, adapting to different screen sizes and devices.",
    git: "https://github.com/StineNygren/nygren_stine_exam1",
  },
  {
    title: "Community Science Museum",
    img: "../img/museum.png",
    date: "2022",
    url: "https://stupendous-stroopwafel-8bf13b.netlify.app/",
    description:
      "The entire website was built using HTML and CSS, ensuring all the necessary functionality while keeping it lightweight. The website is fully responsive, adapting to different screen sizes and devices.",
    git: "https://github.com/StineNygren/stinenygren-semesterproject-1",
  },
  {
    title: "Rainy Days",
    img: "../img/rainydays.png",
    date: "2022",
    url: "https://glittering-jelly-7e2d94.netlify.app/",
    description:
      "First built using HTML and CSS, I later added a WordPress API and JavaScript to update the site's capabilities. The website is fully responsive, adapting to different screen sizes and devices.",
    git: "https://github.com/StineNygren/html-css-ca",
  },

  // {
  //   title: "",
  //   img: "",
  //   date: "",
  //   url: "",
  //   description: "",
  //   git: "",
  // },
];

console.log(projectApi);

projectApi.forEach((project) => {
  projectContainer.innerHTML += `
<div class="col-12 col-lg-6"> 
<a href="${project.url}" class=" text-decoration-none  ">
<h2 class="text-white" >${project.title}</h2>
<div class="project-img">
<img class="mb-3"  src="${project.img}">
</div>
</a>
<div class="d-flex flex-row justify-content-between">
<p class="text-primary">${project.date}</p>
<a class="git-icon" href="${project.git}"><i class="fa-brands fa-github"></i></a>
</div>
<P class="text-white">${project.description}</P>

</div>`;
});
