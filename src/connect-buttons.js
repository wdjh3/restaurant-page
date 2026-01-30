import { loadAboutPage } from "./about-page.js";
import { loadHomePage } from "./home-page.js";
import { loadMenuPage } from "./menu-page.js";

const homeButton = document.querySelector("button#home");
const menuButton = document.querySelector("button#menu");
const aboutButton = document.querySelector("button#about");

export const connectButtons = () => {
  homeButton.addEventListener("click", loadHomePage);
  menuButton.addEventListener("click", loadMenuPage);
  aboutButton.addEventListener("click", loadAboutPage);
};
