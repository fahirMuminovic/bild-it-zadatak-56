/*
Napisati program koji generise specijalan niz duzine 10 i popunjava nasumicnim brojevima. Kod ovog niza brojevi na parnim indexima moraju biti parni, a na neparnim indexima brojevi moraju biti neparni.
*/

function specijalniNiz() {
    let array = [];
    let randomParniBrojevi = [];
    let randomNeparniBrojevi = [];
    let randomNum = Math.floor((Math.random() * 100) + 1);

    //niz od deset parnih brojeva
    while (randomParniBrojevi.length < 10) {
        if (randomNum % 2 === 0) {
            randomParniBrojevi.push(randomNum);
        }
        randomNum = Math.floor((Math.random() * 100) + 1);
    }

    //niz od deset neparnih brojeva
    while (randomNeparniBrojevi.length < 10) {
        if (randomNum % 2 !== 0) {
            randomNeparniBrojevi.push(randomNum);
        }
        randomNum = Math.floor((Math.random() * 100) + 1);
    }

    //na parni index upisujemno parne brojeve na neparni index neparne brojeve
    for (let i = 0; array.length < 10; i++) {
        if (i % 2 === 0) {
            array.push(randomParniBrojevi[i]);
        }
        if (i % 2 !== 0) {
            array.push(randomNeparniBrojevi[i]);
        }
    }
    return array;
}


console.log(specijalniNiz());