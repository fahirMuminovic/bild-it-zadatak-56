/*
Napisati program koji razdvaja parne i neparne elemente u nizu. Program prvo generise niz od 10 elemenata popunjen nasumicnim brojevima od 1 do 20. Zatim, program treba da prebaci sve parne brojeve na lijevu stranu, a sve neparne brojeve na desnu stranu tako da postoji jasna granica izmedju parnih i neparnih brojeva.
Npr:
Imamo niz: [1, 7, 4, 8, 3, 6, 12], kada se razdvoje parni i neparni brojevi niz izgleda ovako: [4, 8, 6, 12, 1, 7, 3]
*/

function evenAndOddArray(array) {
    let evenPart = [];
    let oddPart = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            evenPart.push(array[i]);
        }else if (array[i] % 2 !== 0) {
            oddPart.push(array[i]);
        }
    }
    array = evenPart.concat(oddPart);

    return array;
}

let array = [];
while (array.length < 10) {
    array.push(Math.floor((Math.random() * 20) + 1));
}

console.log(`Generisani niz: ${array}`);
console.log('Niz nakon funkcije: ' + evenAndOddArray(array));