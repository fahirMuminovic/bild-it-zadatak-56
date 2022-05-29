/*
Napisati funkciju koja konvertuje bilo koji string u camelCase. 
Recimo da imamo proizvoljni string  “Talk is cheap. Show me the code.”, 
nasa funkcija ce ga konvertovati da izgleda ovako: talkIsCheapShowMeTheCode.
*/

function camelCase(string) {
    string = string.toLowerCase().trim();
    string = string.replace(/[\W_]+/g, ' '); //replace sve karaktere koji nisu slovo, broj ili donja crta _
    let char = '';
    let camelCaseString = '';

    for (let i = 0; i < (string.length-1); i++) {
        if (string.charAt(i) === ' ') {
            char = string.charAt(i+1).toUpperCase();//nakon praznog mjesta uzimamo sljedeci karakter i pretvaramo ga u veliko slovo
            camelCaseString += char;
            i++;//ovime preskacemo upisivanje sljedeceg karaktera u stringu jer smo ga vec upisali kao veliko slovo
        }else if (string.charAt(i) !== ' ') {
            camelCaseString += string.charAt(i);
        }  
    }
    return camelCaseString;
}

console.log(camelCase("Talk is cheap. Show me the code."));