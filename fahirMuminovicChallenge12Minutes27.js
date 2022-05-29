/*
Napisati funkciju koja sortira niz. NE koristiti .sort(). Generisati niz duzine 10, popunjen nasumicnim brojevima od 10 do 100, zatim sortirati niz od najmanjeg do najveceg elementa i ispisati u konzolu.
*/

function sortArray(array) {
    let arrayCopy = array.slice(); //copy by value. funkcija ne modifikuje proslijedjeni niz.
    let temp = arrayCopy[0];
    let sortedArray = [];

    while (arrayCopy.length > 0) {
        for (let j = 0; j < arrayCopy.length; j++) {
            if (temp > arrayCopy[j]) {
                temp = (arrayCopy[j]);
            }
        }
        sortedArray.push(temp);
        arrayCopy.splice(arrayCopy.indexOf(temp), 1);
        temp = arrayCopy[0];
    }

    return sortedArray;
}

let array = [];

for (let i = 0; i < 10; i++) {
    array.push(Math.floor((Math.random() * 90) + 10));
}

console.log(array);
console.log(sortArray(array));
console.log(array);