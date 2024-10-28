document.addEventListener("DOMContentLoaded", () => {
    const dagensUkedag = new Date().getDay();
    const dagensMeny = document.querySelector(`.meny-dag:nth-child(${today})`);
  
    if (dagensMeny) {
      dagensMeny.style.backgroundColor = "#FF8585";
    }
  });
  