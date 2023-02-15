const sideNav = document.getElementById("mySidenav");
const main = document.getElementById("main");
const hamburger = document.getElementById("hamburger");
const filter = document.getElementById("opaque-filter");

function openNav() {
  sideNav.style.width = "250px";
  //   main.style["padding-left"] = "250px";
  main.style.marginLeft = "250px";
//   main.style.transition = "padding-left 0.5s";
  main.style.transition = "margin-left 0.5s";
  hamburger.style.visibility = "hidden";
  filter.style.visibility = "visible";

}

function closeNav() {
  sideNav.style.width = "0";
//   main.style["padding-left"] = "0px";
  main.style.marginLeft = "0px";
//   main.style.transition = "padding-left 0.5s";
  main.style.transition = "margin-left 0.5s";
  hamburger.style.visibility = "visible";
  filter.style.visibility = "hidden";
}
