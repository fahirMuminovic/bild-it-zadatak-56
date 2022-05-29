/*
Napisati funkciju koja provjerava da li je password dovoljno jak. Da bi password bio jak mora zadovoljiti sljedeca pravila:
- Password mora imati najmanje 8 a najvise 20 karaktera
- Password mora imati barem jednom malo slovo, barem jedno veliko slovo i barem jedan broj
- Password ne smije imati vise od 2 uzastopna karaktera koji se ponavlja. Npr: password ne smije sadrzavati aaa.
*/

function checkPassword(string) {
    string = string.trim();
    let brojacMaloSlovo = 0;
    let brojacVelikoSlovo = 0;
    let brojacBroja = 0;

    if (string.length >= 8 && string.length <= 20) {
        for (const char of string) {
            if (char.match(/[a-z]/)) {
                brojacMaloSlovo++;
            } else if (char.match(/[A-Z]/)) {
                brojacVelikoSlovo++;
            } else if (char.match(/[0-9]/)) {
                brojacBroja++;
            }
        }

        for (let i = 0; i < string.length; i++) {
            if (string.charAt(i) === string.charAt(i + 1) && string.charAt(i) === string.charAt(i + 2)) {
                return false;
            }
        }

        if (brojacMaloSlovo > 0 && brojacVelikoSlovo > 0 && brojacBroja > 0) {
            return true;
        }
        return false;
    }
    return false;
}


console.log(checkPassword('svemalaslova1'));
console.log(checkPassword('SVAVELIKASLOVA1'));
console.log(checkPassword('SifraBezBroja'));
console.log(checkPassword('kratka'));
console.log(checkPassword('previseDugaSifraLimitJeNaDvadesetKaraktera20'));
console.log(checkPassword('Karakter3Putaaa'));
console.log(checkPassword('IstiBroj3Puta666'));
console.log(checkPassword('ispravnaSifra1'));




