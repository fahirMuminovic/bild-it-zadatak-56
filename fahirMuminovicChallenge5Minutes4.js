/*
Napisati program koji za proizvoljnu rijec provjerava da li je rijec isogram(izogram). Rijec je isogram ukoliko sve svako slovo nalazi samo jednom u rijeci. Npr: rijec “lovac” je isogram jer nema slova koja se ponavljanju, ali rijec “baklava” nije.
*/
function isogram(string) {
    string = string.toLowerCase().trim();

    for (let i = 0; i < string.length; i++) {
        for (let j = i +1; j < string.length; j++) {
            if (i===j) {
                continue;
            }
            if (string.charAt(i) === string.charAt(j)) {
                return false;
            }
        }
    }
    return true;
}

console.log(isogram("lovac"));
console.log(isogram("baklava"));
