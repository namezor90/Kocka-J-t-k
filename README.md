# 🎲 Kocka Játék

![Játék képernyő](https://raw.githubusercontent.com/namezor90/kocka-jatek/main/img/game-preview.png)

## 📖 A játékról

A Kocka Játék egy egyszerű, két játékos számára készült böngészős szerencsejáték. A projekt HTML, CSS és JavaScript segítségével készült, külső könyvtárak használata nélkül.

### 🎮 Játékszabályok

- A játék 2 szereplős és körökre osztott
- Minden körben az aktív játékos dobhat a kockával, ahányszor csak szeretne
- A dobások eredménye hozzáadódik a játékos adott körben elért pontszámához
- Ha a játékos 1-est dob, elveszíti az összes addigi körpontját, és a dobás joga átszáll a másik játékosra
- A játékos a "Megtartom" gombbal elmentheti az aktuális körben szerzett pontokat
- Az a játékos nyer, aki előbb eléri a 100 pontot

## 🚀 Technológiák

- HTML5
- CSS3
- JavaScript (ES6)
- Ionicons (ikonkészlet)
- Google Fonts (Lato)

## 🛠️ Telepítés

1. Klónozd le a repozitóriumot:
   ```bash
   git clone https://github.com/username/kocka-jatek.git
   ```

2. Nyisd meg az `index.html` fájlt a böngésződben:
   ```bash
   cd kocka-jatek
   open index.html   # Mac OS / Linux
   # VAGY
   start index.html  # Windows
   ```

## 🎯 Játékmenet

1. Az "Új játék" gombbal indíthatod a játékot
2. A "Dobás" gombbal dobhatsz a kockával
3. A "Megtartom" gombbal elmentheted a körben szerzett pontjaidat
4. Az első játékos, aki eléri a 100 pontot, megnyeri a játékot

## 🧩 Projekt struktúra

```
kocka-jatek/
├── css/
│   └── style.css
├── img/
│   ├── back.jpg
│   ├── dice-1.png
│   ├── dice-2.png
│   ├── dice-3.png
│   ├── dice-4.png
│   ├── dice-5.png
│   └── dice-6.png
├── js/
│   └── app.js
└── index.html
```

## 📝 Tanulságok és fejlesztési lehetőségek

A projekt célja a DOM manipuláció és az eseménykezelés gyakorlása volt pusztán JavaScript használatával. Jövőbeli fejlesztési ötletek:

- Játékosok nevének módosítása
- Nyerő pontszám beállítása
- Második kocka hozzáadása
- Játék állapot mentése localStorage-ban
- Reszponzív design mobileszközökre

## 📱 Képernyőképek

<div align="center">
  <img src="https://raw.githubusercontent.com/namezor90/kocka-jatek/main/screenshots/gameplay.png" alt="Játékmenet" width="45%">
  <img src="https://raw.githubusercontent.com/namezor90/kocka-jatek/main/screenshots/winner.png" alt="Győztes képernyő" width="45%">
</div>

## 📜 Licensz

Ez a projekt [MIT](https://choosealicense.com/licenses/mit/) licensz alatt van.

## 👨‍💻 Szerző

Készítette: [namezor90](https://github.com/namezor90)

---

Jó játékot! 🎮
