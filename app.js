/*-menu-*/
/*$(".menu-collapsed").click(function() {
  $(this).toggleClass("menu-expanded");
});*/
/*-svg spaceship-*/
const reactor = document.querySelector("#reacteur");
const buttonClose = document.querySelectorAll(".button-close");
const divSpaceship = document.querySelectorAll(".div-spaceship-content");
const trigger = document.querySelectorAll(".trigger-spaceship");

console.log(trigger);

const textReactor = document.querySelector(".reactor");
reactor.addEventListener("click", function(e){
  textReactor.classList.add("hidden");
  console.log("coucou");
});

function divSpaceshipReaveal(i){

}
function buttonCloseSection(i){
  let section = buttonClose[i].parentNode;
  buttonClose[i].addEventListener("click",function(e){
  section.classList.remove("hidden");
  });}

  buttonCloseSection(0);