const sideNav = document.getElementById("mySidenav");
const main = document.getElementById("main");
const hamburger = document.getElementById("hamburger");
const filter = document.getElementById("opaque-filter");

function openNav() {
  sideNav.style.width = "250px";
  sideNav.style.borderRight = "solid";
  main.style.marginLeft = "250px";
  main.style.transition = "margin-left 0.5s";
  hamburger.style.visibility = "hidden";
  filter.style.visibility = "visible";
}

function closeNav() {
  sideNav.style.width = "0";
  sideNav.style.borderRight = "none";
  main.style.marginLeft = "0px";
  main.style.transition = "margin-left 0.5s";
  hamburger.style.visibility = "visible";
  filter.style.visibility = "hidden";
}

function displayProjectsToggle() {
  const projectList = document.getElementById("project-list");
  const expandProject = document.getElementById("projectExpandButton");
  if (expandProject.innerHTML === "Click to minimise...") {
    projectList.style.display = "none";
    expandProject.innerHTML = "Click to expand course project details...";
  } else {
    projectList.style.display = "block";
    expandProject.innerHTML = "Click to minimise...";
  }
}

// FUNCTIONS SPECIFIC TO THE PORTFOLIO PAGE

const project = document.getElementById("project-expand-card");
const projectCards = [...document.getElementsByClassName("project-cards")];

projectCards.forEach((card) => {
  card.addEventListener("click", (e) => {
    const parentDiv = e.target.parentNode;
    showProjectCard(parentDiv);
  });
});

function showProjectCard(parentDiv) {
  console.log(parentDiv);
  const childElems = [...document.querySelectorAll("div#project-expand-card *")];
  project.style.visibility = "visible";
  project.style.maxWidth = "560%";
  project.style.maxHeight = "560px";
  project.style.transition = "0.5s";
  project.style.borderStyle = "solid";
  project.style.borderColor = "aqua";
  filter.style.visibility = "visible";
  childElems.forEach((elem) => {
    elem.style.visibility = "visible";
  })

}

function closeProjectCard() {
  const childElems = [...document.querySelectorAll("div#project-expand-card *")];
  project.style.visibility = "hidden";
  project.style.maxWidth = "0";
  project.style.maxHeight = "0";
  project.style.transition = "0.5s";
  filter.style.visibility = "hidden";
  childElems.forEach((elem) => {
    elem.style.visibility = "hidden";
  })
}

function closeDisplay(e) {
  const cardsChildren = [...document.querySelectorAll("div.project-cards *")];
  const cardsLinks = projectCards.concat(cardsChildren);
  const projectElements = [project, ...project.children];
  const safeElements = cardsLinks.concat(projectElements);
  const closeBtn = document.getElementById("project-close-button");
  const clickedElement = e.target;

  if (!safeElements.includes(clickedElement) || clickedElement === closeBtn) {
    closeProjectCard();
  }
}
