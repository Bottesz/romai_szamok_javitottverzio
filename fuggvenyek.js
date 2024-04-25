//A feladat, hogy tesztvezérelt fejlesztéssel írj olyan föggvényt,
//amely bemeneti paramétere  1 és 39 közötti egész szám, kimenete
//pedig ennek a számnak a római szám alakja.

export function romaiszamok(szam) {
    if (szam < 1 || szam > 39) {
      console.log("Hibás bemeneti érték");
    }
    const romaiSzamok = { X: 10, IX: 9, V: 5, IV: 4, I: 1 };
    let ertekek = "";
    for (var i of Object.keys(romaiSzamok)) {
      var q = Math.floor(szam / romaiSzamok[i]);
      szam -= q * romaiSzamok[i];
      ertekek += i.repeat(q);
    }
    return ertekek;
   }
   // Tesztvezérelt fejlesztés
   //for (let i = 1; i <= 39; ++i) {
   //console.log(i + " -> " + toRoman(i));
   //}
   // Hibás bemenet
   console.log(romaiszamok(0)); // Hibás bemeneti érték
   console.log(romaiszamok(40)); // Hibás bemeneti érték
   export function romaiSzamokTesztelese() {
    console.log("");
    console.assert(
      romaiszamok(1) === "I",
      "Hibás: 1-et vártunk, és" + romaiszamok(1) + " kaptunk."
    );
    console.assert(
      romaiszamok(2) === "II",
      "Hibás: 2-őt vártunk, és " + romaiszamok(2) + " kaptunk."
    );
    console.assert(
      romaiszamok(3) === "III",
      "Hibás: 3-at vártunk, és " + romaiszamok(3) + " kaptunk."
    );
    console.assert(
      romaiszamok(4) === "IV",
      "Hibás: 4-et vártunk, és " + romaiszamok(4) + " kaptunk."
    );
    console.assert(
      romaiszamok(5) === "V",
      "Hibás: 5-öt vártunk, és " + romaiszamok(5) + " kaptunk."
    );
    console.assert(
      romaiszamok(6) === "VI",
      "Hibás: 6-ot vártunk, és " + romaiszamok(6) + " kaptunk."
    );
    console.assert(
      romaiszamok(7) === "VII",
      "Hibás: 7-et vártunk, és " + romaiszamok(7) + " kaptunk."
    );
    console.assert(
      romaiszamok(8) === "VIII",
      "Hibás: 8-at vártunk, és " + romaiszamok(8) + " kaptunk."
    );
    console.assert(
      romaiszamok(9) === "IX",
      "Hibás: 9-et vártunk, és " + romaiszamok(9) + " kaptunk."
    );
    console.assert(
      romaiszamok(10) === "X",
      "Hibás: 10-et vártunk, és " + romaiszamok(10) + " kaptunk."
    );
    console.log("Szuper a teszt");
   }