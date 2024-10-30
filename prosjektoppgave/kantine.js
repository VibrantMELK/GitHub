document.addEventListener("DOMContentLoaded", () => {
    const dagensUkedag = (new Date().getDay() - 1) % 7;
    const dagensMeny = document.querySelectorAll(".meny-dag")[dagensUkedag];
  
    if (dagensMeny) {
        dagensMeny.style.backgroundColor = "#99B2DD";
    }
});
  