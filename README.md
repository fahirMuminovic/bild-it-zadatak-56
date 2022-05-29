#Zadatak #56

For this assignment, we are going to give you a list of challenges. Only do as many as you can do *well*. The purpose of this assignment is to really focus on each challenge. You are not expected to complete all of the challenges. Do as many as you can before the deadline.


When you submit a file for each challenge that you completed, include the number of minutes it took you to complete the challenge. For example for the first challenge, the name of the file could be imePrezimeminutes65Challenge1.

The assignment will be considered completed when you have:
submitted one or more files for each completed challenge including the number of minutes required to complete the task

1. Napisati funkciju koja konvertuje bilo koji string u camelCase. Recimo da imamo proizvoljni string  “Talk is cheap. Show me the code.”, nasa funkcija ce ga konvertovati da izgleda ovako: talkIsCheapShowMeTheCode.
2. Napisati program koji ce generisat niz duzine 10, i popuniti ga unikatnim nasumicnim brojevima od 0 do 10. Dakle ne smijemo imati 2 ista broja u nizu.
3. Napisati funkciju koja ce generisati 2D niz. 2D niz treba da izgleda ovako:
[
  [1],
  [1, 2],
  [1, 2, 3],
  [1, 2],
  [1],
]

4.Napisati program koji generise specijalan niz duzine 10 i popunjava nasumicnim brojevima. Kod ovog niza brojevi na parnim indexima moraju biti parni, a na neparnim indexima brojevi moraju biti neparni.

5. Napisati program koji za proizvoljnu rijec provjerava da li je rijec isogram(izogram). Rijec je isogram ukoliko sve svako slovo nalazi samo jednom u rijeci. Npr: rijec “lovac” je isogram jer nema slova koja se ponavljanju, ali rijec “baklava” nije.

6. Napisati program koji razdvaja parne i neparne elemente u nizu. Program prvo generise niz od 10 elemenata popunjen nasumicnim brojevima od 1 do 20. Zatim, program treba da prebaci sve parne brojeve na lijevu stranu, a sve neparne brojeve na desnu stranu tako da postoji jasna granica izmedju parnih i neparnih brojeva.
Npr:
Imamo niz: [1, 7, 4, 8, 3, 6, 12], kada se razdvoje parni i neparni brojevi niz izgleda ovako: [4, 8, 6, 12, 1, 7, 3]

7. Za dati string, kreirajte funkciju koja kreira niz, dekonstruise i konstruise string slovo po slovo. Pogledajte primjer u nastavku za neke korisne smjernice:
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

8. Napisati funkciju koja nalazi zadnji index na kojem se nalazi odredjeni broj. Funkcija treba da prima niz koji pretrazuje i element koji trazi. Funkcija vraca zadnji index na kojem se broj nalazi. Npr: imamo niz: [2, 4, 5, 6, 7, 2 ,4] i trazimo broj 2. Funkcija ce nam vratiti 5 jer je 5 zadnji index na kojem se nalazi broj 2. Ukoliko broj koji trazimo ne postoji u nizu, funkcija vraca -1.

9. Napisati program koji pronalazi elemente koji su zajednicki za 2 niza. Generisati 2 niza duzine 10 i popuniti nasumicnim brojevima od 10 do 100. Funkcija treba da prima ova dva niza, te da vrati novi niz popunjen brojevima koji su zajednicki za oba niza. Npr: Imamo nizove: [1, 2, 3, 4] i [0, 2, 4, 6], funkcija nam vraca ovaj niz: [ 2, 4 ].

10. Napisati funkciju koja provjerava da li je password dovoljno jak. Da bi password bio jak mora zadovoljiti sljedeca pravila:
- Password mora imati najmanje 8 a najvise 20 karaktera
- Password mora imati barem jednom malo slovo, barem jedno veliko slovo i barem jedan broj
- Password ne smije imati vise od 2 uzastopna karaktera koji se ponavlja. Npr: password ne smije sadrzavati aaa.

11. Pravimo program koji racuna prosjecno vrijeme za koje trkace auto obidje krug na stazi. Prosjecno vrijeme racunamo na osnovu 10 krugova. Vrijeme je predstavljeno u formatu: mm:ss.ms Npr. 1:36.31 - 1 minuta, 36 sekundi i 31 milisekunda. Da bi izracunali prosjek moramo imati vremena 10 krugova. Prvo je potrebno generisati niz od 10 elemenata, popunjen vremenima u opsegu od 1 - 2 minute u odgovarajucem formatu. Primjeri validnih vremena: 1:31.447, 1:15.75, 1:43.009 itd. Zatim program racuna prosjecno vrijeme na osnovu ovog niza i ispisuje u konzolu.

12. Napisati funkciju koja sortira niz. NE koristiti .sort(). Generisati niz duzine 10, popunjen nasumicnim brojevima od 10 do 100, zatim sortirati niz od najmanjeg do najveceg elementa i ispisati u konzolu.
