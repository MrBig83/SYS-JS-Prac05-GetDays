# SYS-JS-Prac05-GetDays
## SuperDuperExtraGuldstjärnaMVGÖvning

Skriv en funktion som hämtar årets (2022) och de 4 föregående års alla dagar. Alltså alla dagar för 2022, 2021, 2020, 2019 och 2018. Använd svenska helg dagar API (https://api.dryg.net). 

För att göra detta måste du alltså göra 5 anrop till APIét. Men allt skall göras i samma funktion. 

<ol>
<li>Hitta en bra lösning att göra detta UTAN promise.all()
<li>Ta tid på din funktion genom att sätta console.time(“apiCall”) högst upp i din funktion och console.timeEnd(“apiCall”) längst ner i din funktion.
<li>Hur lång tid tog funktionen att utföras?
<li>Ändra din funktion så att den hämtar årets (2022) och X antal år till bakåt i tiden där X är en parameter som skickats in till funktionen
<li>Om du skickar in 30 som parameter, hur lång tid tog funktionen att utföras? (anteckna tiden)
<li>Ändra din funktion så att den nu använder promise.all() för att resolva alla promises samtidigt.
<li>Om du nu skickar in 30 som parameter, hur lång tid tog funktionen att utföras? Jämför med tidigare antecknad tid.
</ol>
