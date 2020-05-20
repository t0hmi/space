/*-menu-*/
/*$(".menu-collapsed").click(function() {
  $(this).toggleClass("menu-expanded");
});*/
/*-svg spaceship-*/
const reactor = document.querySelector("#reacteur");
const buttonClose = document.querySelectorAll(".button-close");
const divSpaceship = document.querySelectorAll(".div-spaceship-content");
const trigger = document.querySelectorAll(".trigger-spaceship");



function divSpaceshipReaveal(i){
  trigger[i].addEventListener("click",function(e){
  divSpaceship[i].classList.add("hidden");
  })
}
function buttonCloseSection(i){
  let section = buttonClose[i].parentNode;
  buttonClose[i].addEventListener("click",function(e){
  section.classList.remove("hidden");
  });}
  
  divSpaceshipReaveal(0);
  buttonCloseSection(0);