const containerTwo = document.querySelector(".container-2");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
    containerTwo.classList.toggle("toggle");
});