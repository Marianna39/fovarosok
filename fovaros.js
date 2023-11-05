let jo = 0;
let osszes = 0;
let valasz = document.querySelector("#valasz");

const orszag = ["Magyaroszág", "Németország", "Ausztria", "Csehország", 
            "Spanyolország", "Olaszország", "Svédország", "Finnország", 
            "Franciaország", "Egyesült Királyság"];

const varos = ["Budapest", "Berlin", "Bécs", "Prága", "Madrid", 
            "Róma", "Stockholm", "Helsinki", "Párizs", "London"];

function kerdez() {
       let kerdes = orszag[Math.floor(Math.random()*10)];
        document.querySelector(".orszag").innerHTML = kerdes;
            };
            
kerdez();

function ellenorzes() {
    valasz = "";
    if (valasz.value == "Budapest") { 
        document.querySelector("#uzenet").innerHTML = "Helyes!";
        jo += 1;
    } else {
        document.querySelector("#uzenet").innerHTML = "Helytelen!";
        kiir();
    };



    osszes += 1;
    document.querySelector("#talalat").innerHTML = osszes + " / " + jo;
   
    setTimeout(torles, 1000);
  
};

function torles() {
    kerdez();
    valasz.value = "";
}

function kiir() {
    let orszag = "Magyarország"; //ide kell meghívni a random országot
    let fovaros = "Budapest"; //ide kell meghívni a hozzá tartotzó várost
    uzenet.innerHTML += " " + orszag + "<p> fővárosa </p>" + fovaros + ".";
};

document.querySelector("#ellenoriz").onclick = ellenorzes;




























