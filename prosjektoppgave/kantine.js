document.addEventListener("DOMContentLoaded", function() {
    const days = ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"];
    const today = new Date().getDay();
    const dagensMeny = document.querySelector(`.meny-dag:nth-child(${today})`);
  
    if (dagensMeny) {
      dagensMeny.style.backgroundColor = "#FF8585";
    }
  });
  