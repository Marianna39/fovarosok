let jo = 0;
let osszes = 0;
let valasz = document.querySelector("#valasz");
let a = Math.floor(Math.random()*10);

let orszagok = [
    { orszag: "Magyarország",
        fovaros: "Budapest"},
    { orszag: "Németország",
        fovaros: "Berlin"},
    { orszag: "Ausztira",
        fovaros: "Bécs"},
    { orszag: "Csehország",
        fovaros: "Prága"},
    { orszag: "Spanyolország",
        fovaros: "Madrid"},
    { orszag: "Olaszország",
        fovaros: "Róma"},
    { orszag: "Svédország",
        fovaros: "Stockholm"},
    { orszag: "Finnország",
        fovaros: "Helsinki"},
    { orszag: "Franciaország",
        fovaros: "Párizs"},
    { orszag: "Egyesült Krisályság",
        fovaros: "London"}
];

function kerdez() {
       let kerdes = orszagok[a].orszag;
        document.querySelector(".orszag").innerHTML = kerdes;
            };

kerdez();

function ellenorzes() {
   if (!valasz.value) {return;}
    if (valasz.value.toUpperCase() == orszagok[a].fovaros.toUpperCase()) { 
        document.querySelector("#uzenet").innerHTML = "Helyes!";
        jo += 1;
    } else {
        document.querySelector("#uzenet").innerHTML = "Nem jó!";
        kiir();
    };
    osszes += 1;
    document.querySelector("#talalat").innerHTML = jo + " / " + osszes;
    setTimeout(torles, 1000);
};

function torles() {
    a = Math.floor(Math.random()*10);
    kerdez();
    valasz.value = "";
}

function kiir() {
    let orszag = orszagok[a].orszag;
    let fovaros = orszagok[a].fovaros;
    uzenet.innerHTML += " " + orszag + "<p> fővárosa </p>" + fovaros + ".";
};

document.querySelector("#ellenoriz").onclick = ellenorzes;





























