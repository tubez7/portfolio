const sideNav = document.getElementById("mySidenav");
const main = document.getElementById("main");
const hamburger = document.getElementById("hamburger");
const filter = document.getElementById("opaque-filter");
const projectList = document.getElementById("project-list");
const expandProject = document.getElementById("projectExpandButton");

function openNav() {
  sideNav.style.width = "250px";
  sideNav.style.borderRight = "solid";
  main.style.marginLeft = "250px";
  main.style.transition = "margin-left 0.5s";
  // main.forEach((elem) => {
  //   elem.style.marginLeft = "250px";
  //   elem.style.transition = "margin-left 0.5s";
  // });
  hamburger.style.visibility = "hidden";
  filter.style.visibility = "visible";
}

function closeNav() {
  sideNav.style.width = "0";
  sideNav.style.borderRight = "none";
  main.style.marginLeft = "0px";
  main.style.transition = "margin-left 0.5s";
  // main.forEach((elem) => {
  //   elem.style.marginLeft = "0px";
  //   elem.style.transition = "margin-left 0.5s";
  // });
  hamburger.style.visibility = "visible";
  filter.style.visibility = "hidden";
}

function displayProjects() {
  if (expandProject.innerHTML === "Click to minimise...") {
    projectList.style.display = "none";
    expandProject.innerHTML = "Click to expand course project details...";
  } else {
    projectList.style.display = "block";
    expandProject.innerHTML = "Click to minimise...";
  }
}
