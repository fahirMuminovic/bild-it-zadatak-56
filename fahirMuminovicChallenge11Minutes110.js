/*
Pravimo program koji racuna prosjecno vrijeme za koje trkace auto obidje krug na stazi. Prosjecno vrijeme racunamo na osnovu 10 krugova. Vrijeme je predstavljeno u formatu: mm:ss.ms Npr. 1:36.31 - 1 minuta, 36 sekundi i 31 milisekunda. Da bi izracunali prosjek moramo imati vremena 10 krugova. Prvo je potrebno generisati niz od 10 elemenata, popunjen vremenima u opsegu od 1 - 2 minute u odgovarajucem formatu. Primjeri validnih vremena: 1:31.447, 1:15.75, 1:43.009 itd. Zatim program racuna prosjecno vrijeme na osnovu ovog niza i ispisuje u konzolu.
*/
function lapTimeGenerator(numOfLaps) {
    let laps = [];

    for (let i = 0; i < numOfLaps; i++) {

        let minutes = 1;
        let seconds = String(Math.floor(Math.random() * 60));
        let miliseconds = String(Math.floor(Math.random() * 1000));
        if (seconds.length < 2) {
            seconds = '0' + seconds;
        }

        if (miliseconds.length === 2) {
            miliseconds = '0' + miliseconds;
        } else if (miliseconds.length === 1) {
            miliseconds = '00' + miliseconds;
        }

        laps[i] = minutes + ':' + seconds + '.' + miliseconds;
    }
    return laps;
}

function reverseString(string) {
    return string.split("").reverse().join("");
}

function averageLapTime(laps) {
    let timesToCalculate = [];
    let sum = 0;
    let average = 0;
    let miliseconds = '';
    let seconds = '';
    let minutes = '';

    for (let i = 0; i < laps.length; i++) {
        let split = laps[i].split(/[.:]/);
        timesToCalculate[i] = Number(split[0].concat(split[1], split[2]));
        sum += timesToCalculate[i];
    }

    average = String(Math.round(sum / laps.length));

    for (let i = (average.length - 1), counter = 0; i >= 0; i--, counter++) {
        if (counter < 3) {
            miliseconds += average.charAt(i);
        } else if (counter >= 3 && counter < 5) {
            seconds += average.charAt(i);
        } else if (counter >= 5) {
            minutes = average.charAt(i);
        }
    }
    minutes = reverseString(minutes);
    seconds = reverseString(seconds);
    miliseconds = reverseString(miliseconds);

    return minutes + ':' + seconds + '.' + miliseconds;
}



let laps = lapTimeGenerator(10);

console.log(laps);
console.log(averageLapTime(laps));