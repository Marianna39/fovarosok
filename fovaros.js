let orszagnev;
let varosnev;

let orszag = ["Magyaroszág", "Németország", "Ausztria", "Csehország", 
            "Spanyolország", "Olaszország", "Svédország", "Finnország", "Franciaország", "Egyesült Királyság"];

let varos = ["Budapest", "Berlin", "Bécs", "Prága", "Madrid", 
            "Róma", "Stockholm", "Helsinki", "Párizs", "London"];

function kerdez() {
    let mit = orszag[Math.floor(Math.random()*10)];
    document.querySelector(".orszag").innerHTML = mit;
}

/*function ellenoriz() {
    if (i= orszag.length && i= víros.length) {
        document.querySelector(".orszag").innerHTML = mit
    } 
}*/
kerdez();
