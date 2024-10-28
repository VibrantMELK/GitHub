document.addEventListener("DOMContentLoaded", () => {
    const dagensUkedag = new Date().getDay();
    const dagensMeny = document.querySelector(".meny-dag")[dagensUkedag];
  
    if (dagensMeny) {
      dagensMeny.style.backgroundColor = "#FF8585";
    }
  });
  