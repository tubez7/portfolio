// UNIVERSAL FUNCTIONS FOR THE ENTIRE SITE

const sideNav = document.getElementById("sidenav");
const main = document.getElementById("main");
const hamburger = document.getElementById("hamburger");
const filter = document.getElementById("opaque-filter");

// SET HAMBURGER TEXT DYNAMICALLY VIA MEDIA QUERY
const navBarDisplay = window.matchMedia(
  "screen and (orientation: landscape) and (max-width: 1270px), screen and (orientation: portrait) and (max-width: 415px)"
);

function setNavText(x) {
  if (x.matches) {
    hamburger.innerHTML = "&#9776;";
  } else {
    hamburger.innerHTML = "&#9776; navigation";
  }
}

navBarDisplay.addEventListener("change", setNavText);

setNavText(navBarDisplay);

//  FUNCTIONS FOR OPENING AND CLOSING THE NAV BAR LINKS
function openNav() {
  const x = window.matchMedia("(orientation: landscape)");
  sideNav.style.width = "250px";
  sideNav.style.borderRight = "solid";
  hamburger.style.visibility = "hidden";
  filter.style.visibility = "visible";

  if (x.matches) {
    main.style.marginLeft = "250px";
    main.style.transition = "margin-left 0.4s";
  }
}

function closeNav() {
  sideNav.style.width = "0";
  sideNav.style.borderRight = "none";
  hamburger.style.visibility = "visible";
  filter.style.visibility = "hidden";
  main.style.marginLeft = "0px";
  main.style.transition = "margin-left 0.4s";
}

// FUNCTIONS SPECIFIC TO THE HOMEPAGE

function displayProjectsToggle() {
  const projectList = document.getElementById("project-list");
  const expandProject = document.getElementById("projectExpandButton");
  if (expandProject.innerText === "Click to minimise...") {
    projectList.style.display = "none";
    expandProject.innerText = "Click to expand course project details...";
  } else {
    projectList.style.display = "block";
    expandProject.innerText = "Click to minimise...";
  }
}

// FUNCTIONS SPECIFIC TO THE PORTFOLIO PAGE

const project = document.getElementById("project-expand-card");
const projectCards = [...document.getElementsByClassName("project-cards")];

projectCards.forEach((card) => {
  // ADD CLICK EVENT TO THE PROJECT CARDS
  card.addEventListener("click", (e) => {
    const parentDiv = e.currentTarget;
    showProjectCard(parentDiv);
  });
});

function showProjectCard(parentDiv) {
  console.log(parentDiv, "parent div in show project");
  const title = document.getElementById("project-title");
  const url = document.getElementById("project-url");
  const github = document.getElementById("github-url");
  const image = document.getElementById("project-image");
  const description = document.getElementById("project-description");
  const childElems = [
    ...document.querySelectorAll("div#project-expand-card *"),
  ];
  const imageLink = document.getElementById("image-link");

  title.innerText = parentDiv.querySelector("h3").innerText.toUpperCase();
  image.src = parentDiv.querySelector("img").src;

  console.log(
    title.innerHTML,
    "inner HTML of title",
    title.innerText,
    "inner text of title"
  );

  if (title.innerHTML === "LINK-FOUR") {
    url.innerText = "link-four.netlify.app";
    url.href = "https://link-four.netlify.app";
    github.innerHTML = "https://github.com/<wbr/>tubez7/<wbr/>link-four-react";
    github.href = "https://github.com/tubez7/link-four-react";
    imageLink.href = url.href;
    description.innerText =
      "This Progressive Web App was built as a personal learning project to practise and consolidate my knowledge of building apps in React, experiment with some new technologies, as well as practising UI/UX design principles and generally building upon my existing knowledge of JavaScript. I hope to incorporate a player versus AI mode, an online PvP mode, in-game animations, and increased user customisation options among several other features in future updates.";
  } else if (title.innerHTML === "TREMOLO") {
    url.innerText = "tremolo-project.netlify.app";
    url.href = "https://tremolo-project.netlify.app";
    github.innerHTML = "https://github.com/<wbr/>Mrs-DJ/<wbr/>tremolo";
    github.href = "https://github.com/Mrs-DJ/tremolo";
    imageLink.href = url.href;
    description.innerText =
      "For the Northcoders bootcamp final project phase, as part of a 5-person team I created an app that enables musicians to network via geolocation and post classified ads for collaborating with each other.  The front-end architecture was built using Svelte, hosted as a Progressive Web Application, and integrated with Firebase for the database and user authentication implementation.";
  } else if (title.innerHTML === "NEWS APP") {
    url.innerText = "richard-nc-news.netlify.app";
    url.href = "https://richard-nc-news.netlify.app";
    github.innerHTML = "https://github.com/<wbr/>tubez7/<wbr/>nc-news";
    github.href = "https://github.com/tubez7/nc-news";
    imageLink.href = url.href;
    description.innerText =
      "For my Northcoders bootcamp frontend project, I built a mobile first designed front-end architecture in React that acts as a news app to serve news articles via integration with the back-end project News API. In addition to React the app was built utilising CSS, HTML5, and Material UI.";
  } else {
    url.innerHTML = "nc-news-api.cyclic.app/<wbr/>api";
    url.href = "https://nc-news-api.cyclic.app/api";
    github.innerHTML = "https://github.com/<wbr/>tubez7/<wbr/>backend-nc-news";
    github.href = "https://github.com/tubez7/backend-nc-news";
    imageLink.href = url.href;
    description.innerText =
      "For my Northcoders bootcamp backend project, I built a RESTful API to interact with a PostgreSQL database, incorporating MVC programming principles in order to provide data to the front-end news app project. Built with Express utilising TDD incorporating the Jest library.";
  }

  project.style.visibility = "visible";
  project.style.minWidth = "240px"; //will need to adapt for displays
  project.style.maxWidth = "550px";
  project.style.height = "auto";
  // project.style.transition = "maxWidth 0.4s minWidth 0.4s";
  project.style.borderStyle = "solid";
  project.style.borderColor = "blue";
  // project.style.borderRadius = "40px 10px";
  project.style.borderRadius = "40px";
  project.style.animation = "drop";
  project.style.animationDuration = "0.4s";
  filter.style.visibility = "visible";
  hamburger.style.visibility = "visible";
  childElems.forEach((elem) => {
    elem.style.visibility = "visible";
  });
}

function closeProjectCard(clickedElement) {
  // console.log("close project fired", clickedElement, " was clicked", "hamburger is clicked element = ", clickedElement === hamburger, "expand card is set to hidden = ", project.style.visibility === "hidden", "the shade filter is visible = ", filter.style.visibility === "visible", "hamburger is visible when clicked = ", hamburger.style.visibility === "visible");

  const childElems = [
    ...document.querySelectorAll("div#project-expand-card *"),
  ];
  project.style.visibility = "hidden";
  // project.style.maxWidth = "0";
  // project.style.minWidth = "0";
  // project.style.height = "0";
  project.style.transition = "0.4s";
  project.style.animation = "lift";
  project.style.animationDuration = "0.5s";
  childElems.forEach((elem) => {
    elem.style.visibility = "hidden";
  });

  if (clickedElement === hamburger && project.style.visibility === "hidden") {
    // console.log("clicked hamburger with no filter");
    openNav();
  } else if (filter.style.visibility === "visible") {
    // console.log("filter is visible");
    if (hamburger.style.visibility === "visible") {
      // console.log("clicked somewhere on page with filter visible hamburger covered");
      filter.style.visibility = "hidden";
    }
  } else {
    console.log("something weird and confusing happened");
  }
}

function closeDisplay(e) {
  const cardsChildren = [...document.querySelectorAll("div.project-cards *")];
  const cardsLinks = projectCards.concat(cardsChildren);
  const projectChildren = [
    ...document.querySelectorAll("#project-expand-card *"),
  ];
  const projectElements = [project, ...projectChildren];
  const safeElements = cardsLinks.concat(projectElements);
  const closeBtn = document.getElementById("project-close-button");
  const clickedElement = e.target;

  if (!safeElements.includes(clickedElement) || clickedElement === closeBtn) {
    closeProjectCard(clickedElement);
  }
}

// CONTACT PAGE FUNCTIONS

const regex = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;
let firstName = "";
let surname = "";
let email = "";
let message = "";
let validFirstName = false;
let validSurname = false;
let validEmail = true;
let validMsg = false;

function setFirstName(e) {
  const nameMsg = document.getElementById("name-message");
  const nameInput = document.getElementById("first-name");

  firstName = e.target.value;
  validFirstName = firstName.length > 0 ? true : false;

  if (!validFirstName) {
    nameInput.style.borderColor = "red";
    nameMsg.style.display = "block";
  } else {
    nameInput.style.borderColor = "blue";
    nameMsg.style.display = "none";
  }

  disabled();
}

function setSurname(e) {
  const surnameMsg = document.getElementById("surname-message");
  const surnameInput = document.getElementById("surname");

  surname = e.target.value;
  validSurname = surname.length > 0 ? true : false;

  if (!validSurname) {
    surnameInput.style.borderColor = "red";
    surnameMsg.style.display = "block";
  } else {
    surnameInput.style.borderColor = "blue";
    surnameMsg.style.display = "none";
  }

  disabled();
}

function setEmail(e) {
  const emailMsg = document.getElementById("email-message");
  const emailInput = document.getElementById("email");
  email = e.target.value;

  if (email.length < 1) {
    validEmail = true;
    emailInput.style.borderColor = "blue";
    emailMsg.style.display = "none";
  } else if (!regex.test(email)) {
    validEmail = false;
    emailMsg.style.display = "block";
    emailInput.style.borderColor = "red";
  } else {
    validEmail = true;
    emailInput.style.borderColor = "blue";
    emailMsg.style.display = "none";
  }

  disabled();
}

const messageInput = document.getElementById("message-box");

function setMsg(e) {
  const messageMsg = document.getElementById("msg-message");

  message = e.target.value;
  validMsg = message.length > 0 ? true : false;

  if (!validMsg) {
    messageInput.style.borderColor = "red";
    messageMsg.style.display = "block";
  } else {
    messageInput.style.borderColor = "blue";
    messageMsg.style.display = "none";
  }

  disabled();
}
const submit = document.getElementById("submit-button");

function disabled() {
  if (!validFirstName || !validSurname || !validMsg || !validEmail) {
    submit.disabled = true;
  } else {
    submit.disabled = false;
  }
}

const popup = document.getElementById("email-response-popup");

function handleSend(e) {
  e.preventDefault();
  const templateParams = {
    firstName,
    surname,
    email,
    message,
  };
  const responseHeader = document.getElementById("email-response-header");
  const emailResponse = document.getElementById("response-msg");
  const icon = document.getElementById("email-response-icon");

  emailjs
    .send(
      "service_qdkojyi",
      "template_rugvkog",
      templateParams,
      "s3ArIuTGr2qWNR5hi"
    )
    .then(() => {
      popup.style.display = "block";
      responseHeader.innerText = "Success!";
      emailResponse.innerText = "Your message has been sent.";
      icon.src = "./images/icons/icons8-checkmark-48.png";
      icon.alt = "green tick icon";
    })
    .catch(() => {
      popup.style.display = "block";
      responseHeader.innerText = "Error!";
      emailResponse.innerHTML =
        "Oh dear! There was a problem sending your message.<br/><br/>Please try again later or contact me directly via email.";
      icon.src = "./images/icons/icons8-cancel-48.png";
      icon.alt = "red cross icon";
    });

  messageInput.value = "";
  filter.style.visibility = "visible";
  submit.disabled = true;
}

function closePopup() {
  popup.style.display = "none";

  if (sideNav.style.borderRight !== "solid") {
    filter.style.visibility = "hidden";
  }
}
