const projectContainer = document.querySelector(".project-container");

const projectApi = [
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
    date: "2023",
    url: "https://stupendous-stroopwafel-8bf13b.netlify.app/",
    description:
      "The entire website was built using HTML and CSS, ensuring all the necessary functionality while keeping it lightweight. The website is fully responsive, adapting to different screen sizes and devices.",
    git: "https://github.com/StineNygren/stinenygren-semesterproject-1",
  },
  {
    title: "Rainy Days",
    img: "../img/rainydays.png",
    date: "2023",
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
<div class="d-flex flex-row justify-content-between">
<p>${project.date}</p>
<a class="git-icon" href="${project.git}"><i class="fa-brands fa-github"></i></a>
</div>
<P class="text-white">${project.description}</P>
</a>
</div>`;
});
