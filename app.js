/*-menu-*/
/*$(".menu-collapsed").click(function() {
  $(this).toggleClass("menu-expanded");
});*/
/*-svg spaceship-*/
const reactor = document.querySelector("#reacteur");
const buttonClose = document.querySelectorAll(".button-close");
const divSpaceship = document.querySelectorAll(".div-spaceship-content");
const trigger = document.querySelectorAll(".trigger-spaceship");

function divSpaceshipReaveal(i) {
  trigger[i].addEventListener("click", function (e) {
    divSpaceship[i].classList.add("hidden");
  });
}
function buttonCloseSection(i) {
  let section = buttonClose[i].parentNode;
  buttonClose[i].addEventListener("click", function (e) {
    section.classList.remove("hidden");
  });
}

divSpaceshipReaveal(0);
buttonCloseSection(0);

divSpaceshipReaveal(1);
buttonCloseSection(1);

divSpaceshipReaveal(2);
buttonCloseSection(2);

divSpaceshipReaveal(3);
buttonCloseSection(3);
/*-- form --*/

const btnSend = document.querySelector(".btn-send");
const input = document.querySelectorAll(".form-div form input");

btnSend.addEventListener("click", function (e) {
  event.preventDefault();
  input.forEach(function (element) {
    console.log(element.value);
    if (element.value == "") {
      element.style.backgroundColor = "#FF3E3E";
      element.placeholder = "require";
      btnSend.disabled = true;
    } else if (element.value != "") {
      element.style.backgroundColor = "white";
      btnSend.disabled = false;
    }
    btnSend.disabled = false;
  });
});
