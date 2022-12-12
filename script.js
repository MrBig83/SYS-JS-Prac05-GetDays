/*
Skriv en funktion som hämtar årets (2022) och de 4 föregående års alla dagar. Alltså alla dagar för 2022, 2021, 2020, 2019 och 2018. Använd svenska helg dagar API (https://api.dryg.net). 

För att göra detta måste du alltså göra 5 anrop till APIét. Men allt skall göras i samma funktion. 

 

Hitta en bra lösning att göra detta UTAN promise.all()
Ta tid på din funktion genom att sätta console.time(“apiCall”) högst upp i din funktion och console.timeEnd(“apiCall”) längst ner i din funktion.
Hur lång tid tog funktionen att utföras?
Ändra din funktion så att den hämtar årets (2022) och X antal år till bakåt i tiden där X är en parameter som skickats in till funktionen
Om du skickar in 30 som parameter, hur lång tid tog funktionen att utföras? (anteckna tiden)
Ändra din funktion så att den nu använder promise.all() för att resolva alla promises samtidigt.
Om du nu skickar in 30 som parameter, hur lång tid tog funktionen att utföras? Jämför med tidigare antecknad tid.
*/



let span = 30;


console.time("apiCall");

for(let i=0 ; i < span ; i++){
    
    collectData(2022-i)
}

async function collectData(i){
    
    await Promise.all(
        fetch(`http://sholiday.faboul.se/dagar/v2.1/${i}`)
        .then(response => response.json())
        .then(data => console.log(data.startdatum))
    )
           
};
console.timeEnd("apiCall")
//Ovan tog 8.49 ms

// ===== BRYTPUNKT =====

//Nedan tog 6.35 ms
/*
console.time("apiCallWithoutPrimiseAll");

for(let i=0 ; i < span ; i++){
    
    collectData(2022-i)
}

function collectData(i){
    
    
    fetch(`http://sholiday.faboul.se/dagar/v2.1/${i}`)
    .then(response => response.json())
    .then(data => console.log(data.startdatum))
    
           
};
console.timeEnd("apiCallWithoutPrimiseAll")
/*



/*        
getResponse();

function getResponse(){
    console.time("apiCall");
let response = ([

        fetch(`http://sholiday.faboul.se/dagar/v2.1/${i}`)
            .then((response) => response.json())
            .then(data => console.log(data.startdatum)),
        /*    
        fetch("http://sholiday.faboul.se/dagar/v2.1/2018")
            .then((response) => response.json())
            .then(data => console.log(data.dagar)),    
        fetch("http://sholiday.faboul.se/dagar/v2.1/2019")
            .then((response) => response.json())
            .then(data => console.log(data.dagar)),
        fetch("http://sholiday.faboul.se/dagar/v2.1/2020")
            .then((response) => response.json())
            .then(data => console.log(data.dagar)),
        fetch("http://sholiday.faboul.se/dagar/v2.1/2021")
            .then((response) => response.json())
            .then(data => console.log(data.dagar)),
        fetch("http://sholiday.faboul.se/dagar/v2.1/2022")
            .then((response) => response.json())
            .then(data => console.log(data.dagar)),
        
    ]);*/
    /*
    console.timeEnd("apiCall")
    printaMidsommar(response);

}    */

/*
    function printaMidsommar(response){
        console.log(response)
        console.log("Andra")

    }

console.log("Tredje")
// MED PROMISE.ALL NEDAN !!
/*
getResponse();

async function getResponse() {
	const response = await Promise.all([
        
        fetch("http://sholiday.faboul.se/dagar/v2.1/2018").then((response) => response.json()),
        fetch("http://sholiday.faboul.se/dagar/v2.1/2019").then((response) => response.json()),
        fetch("http://sholiday.faboul.se/dagar/v2.1/2020").then((response) => response.json()),
        fetch("http://sholiday.faboul.se/dagar/v2.1/2021").then((response) => response.json()),
        fetch("http://sholiday.faboul.se/dagar/v2.1/2022").then((response) => response.json())
    ]);
    printaMidsommar(response);      
};
*/