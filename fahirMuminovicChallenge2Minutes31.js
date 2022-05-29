/*
Napisati program koji ce generisat niz duzine 10, i popuniti ga unikatnim nasumicnim brojevima od 0 do 10.
Dakle ne smijemo imati 2 ista broja u nizu.
*/

function unikatniNiz() {
    let array = [];
    array.push(Math.floor((Math.random() * 10) + 1));

    for (let i = 0;array.length < 10; i++) {
        let randomNum = Math.floor((Math.random() * 10) + 1);

        let found = array.find(element => element === randomNum); //f-ja vraca undefined ukoliko ne pronadje element koji odgovara uslovu (element === randomNum)

        if (found === undefined) {
            array.push(randomNum);
        }
    }
    return array;
}


console.log(unikatniNiz());