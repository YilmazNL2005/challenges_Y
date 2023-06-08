document.write ("Hallo");
let plaatjes = [
    "afbeeldingen/pikachu.png",
    "afbeeldingen/piplup.png",
    "afbeeldingen/mew.png",
    "afbeeldingen/pokedex.png",
    "afbeeldingen/pokeball.png",
    "afbeeldingen/greninja.png",
    "afbeeldingen/caterpie.png",
    "afbeeldingen/bulbasaur.png",
    "afbeeldingen/eevee.png",
    "afbeeldingen/meowth.png"
];

// document.getElementById(images) = plaatjes;
for (let i = 0; i < 10; i++) {
    div1 = document.getElementById("images");
    const img = document.createElement("img");
    img.src = plaatjes[i];
    document.body.appendChild(img);
    }
    








// Met de afbeeldingen die ik moet gebruiken als memory kaarten,
// wil ik in een array / list plaatsen
// Vervolgens wil ik steeds als de gebruiker 2 kaarten heeft geselecteerd kunnen controleren of het 2 dezelfde afbeeldingen zijn.