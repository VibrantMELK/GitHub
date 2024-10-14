function temperatur() {
    let temperatur = document.getElementById("temperatur").value;
    let melding = "";

    if (temperatur < 0) {
        melding = "det er veldig kaldt, bruk vinterjakke!";
    } else if (temperatur >= 0 && temperatur <= 15) {
        melding = "det er kjølig, bruk en varm jakke.";
    } else if (temperatur >= 16 && temperatur <= 25) {
        melding = "det er behagrlig, bruk en genser.";
    } else if (temperatur >= 25) {
        melding = "det er varmt, bruk lette klær";
    }

    document.getElementById("resultat").innerHTML = melding
} 

const svar = document.getElementById("svar")
svar.addEventListener("click", temperatur)


if (alder < 13) {
    console.log("du er et barn");
} else if (alder >= 13 && alder < 18) {
    console.log("du er en tenåring");
} else {
    console.log("du er en voksen");
}

