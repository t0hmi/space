/*-menu-*/
/*$(".menu-collapsed").click(function() {
  $(this).toggleClass("menu-expanded");
});*/
/*-svg spaceship-*/
const reactor = document.querySelector("#coucou");
const textReactor = document.querySelector(".reactor");
reactor.addEventListener("click", function(e){
  textReactor.classList.toggle("hidden");
  console.log("coucou");
});