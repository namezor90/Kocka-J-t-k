/*
Játék szabályok:

- A játék 2 szereplős és körökre osztott
- Minden egyes körben az adott játékos dob a kockával, ahányszor csak szeretne. A dobások eredménye hozzáadódik a játékos adott körben
  elért pontszámához, ami értelem szerűen minden körben nulláról indul.
- Ha az aktuális játékos 1-et dob, akkor az összes addigi pontja elveszik, és átadja a dobás jogát a következő játékosnak.
- A játékos választhatja a 'Megtartom' gombot is. Ebben az esetben az adott körben elért pontok száma, hozzáadódik a játékos összes
  pontszámához. Majd a dobás joga a másik játékosra száll.
- Az a játékos nyer, aki előbb eléri a 100 pontot.  

*/

var pontSzamok, korPontszam, aktivJatekos, jatekFolyamatban;

init();

// Modal kezelés
var modal = document.getElementById('rules-modal');
var btnRules = document.querySelector('.btn-rules');
var btnAccept = document.getElementById('accept-rules');

// Oldal betöltésekor mutassuk a szabály ablakot
window.addEventListener('load', function() {
    modal.classList.add('show-modal');
});

// Szabályok gomb esemény kezelése
btnRules.addEventListener('click', function() {
    modal.classList.add('show-modal');
});

// Elfogadom gomb esemény kezelése
btnAccept.addEventListener('click', function() {
    modal.classList.remove('show-modal');
});

// Ha a felhasználó a modal-on kívülre kattint, az is bezárja
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.classList.remove('show-modal');
    }
});


// ------------------------------------------------------------------------------------------------------------------
// Dobás GOMB esemény kezelője.
// ------------------------------------------------------------------------------------------------------------------

document.querySelector(".btn-roll").addEventListener("click", function() {

  if (jatekFolyamatban) {

    // Kell egy véletlen szám.
    var kocka = Math.floor(Math.random() * 6) +1 ;

    // Eredmény megjelenítése.
    var kockaDOM = document.querySelector(".dice")
    kockaDOM.style.display = "block";
    kockaDOM.src = "img/dice-" + kocka + ".png"

    
    // Körben elért pontszám frissitése ha nem 1-et dobunk.
    if (kocka !== 1) {
      // Itt adjuk hozzá a számot az aktuális ponthoz.
      korPontszam += kocka;
      document.querySelector("#current-" + aktivJatekos).textContent = korPontszam
    } else {
      // Következő játékos.
      kovetkezoJatekos()
    }

  }

});

// ------------------------------------------------------------------------------------------------------------------
// Megtartom GOMB esemény kezelője.
// ------------------------------------------------------------------------------------------------------------------

document.querySelector(".btn-hold").addEventListener("click", function() {

  if (jatekFolyamatban) {

    // Összes pontszám frissitése a kódban.
    pontSzamok[aktivJatekos] += korPontszam;

    // Összes pontszám frissitése a UI-n.
    document.querySelector("#score-" + aktivJatekos).textContent = pontSzamok[aktivJatekos];


    // Nyert a játékos?
    if (pontSzamok[aktivJatekos] >= 100 ) {
      document.querySelector("#name-" + aktivJatekos).textContent = "Győztes!";
      document.querySelector(".player-" + aktivJatekos + "-panel").classList.add("winner");
      document.querySelector(".player-" + aktivJatekos + "-panel").classList.remove("active");
      jatekFolyamatban = false;
    } else {
      kovetkezoJatekos();
    }
  }

});

// ------------------------------------------------------------------------------------------------------------------
// Új játék GOMB esemény kezelője.
// ------------------------------------------------------------------------------------------------------------------

document.querySelector(".btn-new").addEventListener("click", init);

// ------------------------------------------------------------------------------------------------------------------
// Következő játékos.
// ------------------------------------------------------------------------------------------------------------------

function kovetkezoJatekos() {

aktivJatekos === 0 ? aktivJatekos = 1 : aktivJatekos = 0;
korPontszam = 0;

document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

document.querySelector(".player-0-panel").classList.toggle("active");
document.querySelector(".player-1-panel").classList.toggle("active");

document.querySelector(".dice").style.display = "none";

}

// init

function init() {

  pontSzamok = [0, 0];
  korPontszam = 0;
  aktivJatekos = 0;
  jatekFolyamatban = true;

  document.querySelector(".dice").style.display = "none";
  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  document.getElementById("name-0").textContent = "Frodó";
  document.getElementById("name-1").textContent = "Samu";

  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.add("active");
}