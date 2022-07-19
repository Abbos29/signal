const navToggle = document.querySelector(".burger__menu");
const mainMenu = document.querySelector(".nav");
const tBody = document.querySelector("body");

navToggle.addEventListener("click", () => {
  mainMenu.classList.toggle("burger__active");
  tBody.classList.toggle("lock");
});

mainMenu.addEventListener("click", (event) => {
  if(event.target){
    mainMenu.classList.remove("burger__active");
    tBody.classList.remove("lock");
  }
});
