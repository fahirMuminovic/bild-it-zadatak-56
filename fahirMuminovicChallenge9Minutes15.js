/*
Napisati program koji pronalazi elemente koji su zajednicki za 2 niza. Generisati 2 niza duzine 10 i popuniti nasumicnim brojevima od 10 do 100. Funkcija treba da prima ova dva niza, te da vrati novi niz popunjen brojevima koji su zajednicki za oba niza. Npr: Imamo nizove: [1, 2, 3, 4] i [0, 2, 4, 6], funkcija nam vraca ovaj niz: [ 2, 4 ].
*/

function presjek(array1, array2) {
    let presjek = [];

    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
           if (array1[i] === array2[j]) {
               presjek.push(array1[i]);
           }
        }
    }
    return presjek;
}

let array1 = [];
let array2 = [];
let randomBroj = 0;

for (let i = 0; i < 10; i++) {
    randomBroj = Math.floor((Math.random() * 90) + 10);
    array1.push(randomBroj);
    randomBroj = Math.floor((Math.random() * 90) + 10);
    array2.push(randomBroj);
}

console.log(array1);
console.log(array2);

console.log(presjek(array1,array2));