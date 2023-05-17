// Enter all your detials in this file
// Logo images
import logo from "./public/logo.png";

// Profile Image
import profile from "./public/Profile.jpg";

// Tech stack images
import html from "./public/techstacks/html.png";
import css from "./public/techstacks/css.png";
import sass from "./public/techstacks/sass.png";
import js from "./public/techstacks/js.png";
import react from "./public/techstacks/react.png";
import redux from "./public/techstacks/redux.png";
import next from "./public/techstacks/next.png";
import tailwind from "./public/techstacks/tailwind.png";
import bootstrap from "./public/techstacks/bootstrap.png";
import vscode from "./public/techstacks/vscode.png";
import github from "./public/techstacks/github.png";
import npm from "./public/techstacks/npm.png";
import figma from "./public/techstacks/figma.png";

// Social Platforms images
import linkedin from "./public/linkedin.svg";
import GitHub from "./public/github.svg";

// Work Office and Location images
import location from "./public/workIcons/location.svg";
import office from "./public/workIcons/office.svg";
import link from "./public/workIcons/link.svg";
import gitHub from "./public/workIcons/github.svg";

// Porject Images
import beat_x from "./public/projects/beat-x-store.png";
import crypto_trade from "./public/projects/crypto-trade.png";
import task_manager from "./public/projects/task_manager.png";
import bubbles_shoot from "./public/projects/bubbles-shoot.png";
import canva_drawing from "./public/projects/canva-drawing.png";
import product_filter_search from "./public/projects/product-filter-search.png";
import calculator from "./public/projects/calculator.png";
import social_book from "./public/projects/social-book.png";
import redStore from "./public/projects/redstore.png";
import barber_studio from "./public/projects/barber-studio.png";


// Logos
export const logos = {
  logo: logo,
};

// WorkIcons
export const workIcons = {
  location: location,
  office: office,
  link: link,
  github: gitHub,
};

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  next: next,
  sass: sass,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  npm: npm,
  github: github,
  figma: figma,
};

// Social Platform
export const socialMedia = {
  linkdein: linkedin,
  github: GitHub,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Abhishek Kolapkar",
  tagline: "Frontend Developer",
  img: profile,
  about: [
    `Frontend developer having expertise in frontend development and highly motivated individual dedicated to writing clear, concise, robust code that works.`,
    `I like creating products that either have fun and nifty features or solve a genuine problem for people.`,
    `My greatest strengths are logical thinking, working well in a team, and positive thinking.`,
  ],
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/abhishek-kolapkar/",
  github: "https://github.com/Abhishek-Kolpkar",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Frontend Developer",
    Company: `Navgurukul`,
    Location: "Remote",
    Type: "Full Time",
    Duration: "Aug 2022 - Apr 2023",
  },
  {
    Position: "UI/UX Designer",
    Company: `Skygoal.Inc`,
    Location: "Remote",
    Type: "Internship",
    Duration: "Mar 2022 - Jun 2022",
  },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Frontend Development",
    Company: "Udemy, YouTube",
    Location: "Online",
    Type: "Full Time",
    Duration: "Jan 2022 - Present",
  },
  {
    Position: "Frontend Development",
    Company: "Bootcamp",
    Location: "Online",
    Type: "Full Time",
    Duration: "May 2022 - Nov 2022",
  },
  {
    Position: "UI/UX Design",
    Company: "Skygoal Learning",
    Location: "Online",
    Type: "Part Time",
    Duration: "Jan 2022 - Feb 2022",
  },
];

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Beat-X",
    image: beat_x,
    description: `This is a responsive E-commerce platform like Boat, which have features like product carousel, add to cart, login/logout, etc.`,
    techstack:
      "ReactJS, SCSS, React Axios, Swiper JS, React Context, Mobile-first workflow.",
    previewLink: "https://beat-x-store.netlify.app/",
    githubLink: "https://github.com/Abhishek-Kolpkar/Beat-X",
  },
  {
    title: "CryptoTrade",
    image: crypto_trade,
    description: `The dashboard combines the grid and list view to generate real-time crypto coins data like crypto price, crypto market cap, etc.`,
    techstack:
      "React.js, CSS, MUI Design, React Axios, React Hooks, Mobile-first workflow.",
    previewLink: "https://crypto-trade-dash.netlify.app/",
    githubLink: "https://github.com/Abhishek-Kolpkar/Crypto-Dashboard",
  },
  {
    title: "Task Manager",
    image: task_manager,
    description: `This is a task management application that is capable of adding, editing, and deleting tasks as well as adding subtasks.`,
    techstack:
      "React.js, Tailwind CSS, React Context, Browser Storage, React Hooks",
    previewLink: "https://task-maneger-app.netlify.app/",
    githubLink: "https://github.com/Abhishek-Kolpkar/Task-Manager",
  },
  {
    title: "Bubbles Shoot",
    image: bubbles_shoot,
    description: `This is a simple bubbles shoot game made for fun.`,
    techstack: "HTML Canvas, CSS, JavaScript",
    previewLink: "https://task-maneger-app.netlify.app/",
    githubLink: "https://github.com/Abhishek-Kolpkar/Task-Manager",
  },
  {
    title: "Canva Drawing App",
    image: canva_drawing,
    description: `This canvas drawing app is capable of drawing shapes, erasing canvas, filling color into shapes, and saving canvas drawings as an image`,
    techstack: "HTML, CSS, JavaScript, HTML Canvas",
    previewLink: "https://canva-drawing-js.netlify.app/",
    githubLink: "https://github.com/Abhishek-Kolpkar/Drawing-App",
  },
  {
    title: "Product Search-Filter",
    image: product_filter_search,
    description: `This is a product search-filter project. User can search & filter products according to product categories.`,
    techstack: "HTML, CSS, JavaScript",
    previewLink: "https://search-filter-product.netlify.app/",
    githubLink: "https://github.com/Abhishek-Kolpkar/Product-Filter-Search",
  },
  {
    title: "Calculator",
    image: calculator,
    description: `This is a simple calculator which is capable to doing calculation like addition, subtraction, multiplication, division.`,
    techstack: "HTML, CSS, JavaScript",
    previewLink: "https://js-calsi.netlify.app/",
    githubLink: "https://github.com/Abhishek-Kolpkar/Calculator",
  },
  {
    title: "SocialBook",
    image: social_book,
    description: `This is a responsive social network website UI design like facebook.`,
    techstack: "HTML, CSS, JavaScript",
    previewLink: "https://social-book-ui.netlify.app/",
    githubLink: "https://github.com/Abhishek-Kolpkar/SocialBook",
  },
  {
    title: "RedStore",
    image: redStore,
    description: `This is a multipage responsive e-commerce website UI Design.`,
    techstack: "HTML, CSS",
    previewLink: "https://redstore-store.netlify.app/",
    githubLink: "https://github.com/Abhishek-Kolpkar/RedStore",
  },
  {
    title: "Hair Studio",
    image: barber_studio,
    description: `This is a single page responsive website UI Design.`,
    techstack: "HTML, CSS",
    previewLink: "https://barber-hair.netlify.app/",
    githubLink: "https://github.com/Abhishek-Kolpkar/Barber-Hair-Studio",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "abhisheknkolapkar@gmail.com",
  phone: "+91 9146629723",
};