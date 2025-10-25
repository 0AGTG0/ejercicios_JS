const swith = document.querySelector("#btn");

swith.addEventListener("click", e => {
    swith.classList.toggle("active");
    document.body.classList.toggle("active");
})