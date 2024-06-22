const btn = document.querySelector(".nav__btn");
const modal = document.querySelector(".modal-menu");

btn.addEventListener("click", () => {
    btn.firstElementChild.classList.toggle("hidden");
    btn.lastElementChild.classList.toggle("hidden");

    modal.classList.toggle("hidden");
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 822 && !modal.classList.contains("hidden")) {
        modal.classList.add("hidden")
        btn.firstElementChild.classList.remove("hidden");
        btn.lastElementChild.classList.add("hidden");
    }
});