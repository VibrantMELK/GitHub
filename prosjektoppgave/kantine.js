document.addEventListener("DOMContentLoaded", () => {
    const dagensUkedag = (new Date().getDay() - 1) % 7;
    const dagensMeny = document.querySelectorAll(".meny-dag")[dagensUkedag];
  
    if (dagensMeny) {
        dagensMeny.classList.add("meny-dag--markert");

    }
});
  