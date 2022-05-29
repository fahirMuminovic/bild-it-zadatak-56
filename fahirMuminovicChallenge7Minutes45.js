/*
Za dati string, kreirajte funkciju koja kreira niz, dekonstruise i konstruise string slovo po slovo. Pogledajte primjer u nastavku za neke korisne smjernice:
constructDeconstruct("Hello") ➞ [
  "H",
  "He",
  "Hel",
  "Hell",
  "Hello",
  "Hell",
  "Hel",
  "He",
  "H"
]
*/

function constructDeconstruct(string) {
  let ispis = '';
  let elementiRastuci = [];
  let elementiOpadajuci = [];

  for (let i = 0; i < string.length; i++) {
    ispis += string.charAt(i);
    elementiRastuci.push(ispis);
  }

  ispis = '';

  for (let j = (string.length - 1); j > 0; j--) {
    for (let k = 0; k < j; k++) {
      ispis += string.charAt(k);
    }
    elementiOpadajuci.push(ispis);
    ispis = '';
  }
  return elementiRastuci.concat(elementiOpadajuci);
}


let result = constructDeconstruct('string');

console.log(result);
console.log('_______________________');
//ljepsi ispis
result.forEach(element => {
  console.log(element);
});
