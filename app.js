const burger = document.querySelector(".burger");
const list = document.querySelector("nav ul");
burger.addEventListener("click", function () {
  list.classList.toggle("active");
  burger.classList.toggle("change");
});
