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

// ==============================================================================================================================

let span = 30; //Antal år bakåt i tiden. 
let promises = [];//Skapa en array som används i båda fallen

// ================================== HÄR SKA MAN JOBBA!! ========================================
//withPromiseAll(span); //Ta bort "//" för att aktivera funktionen. 1445ms
secondTry(span); //Ta bort "//" för att aktivera funktionen. 923ms
// ===============================================================================================

async function withPromiseAll(span) {
    
    for(let i=2022; i > 2022-span; i--){
        promises.push (fetch(`https://sholiday.faboul.se/dagar/v2.1/${i}`));
        
    }
        //En fetch returnerar promises
    console.log(promises)
    
    console.time("apiCall");
    let responses = await Promise.all(promises);
    console.timeEnd("apiCall");

        //Efter Promise.all blir dessa promises till responses
    console.log(responses);

    let pending = [];
        for(let i=0; i < responses.length; i++){
            pending[i] = await responses[i].json(); //await här
            console.log(pending[i])
        }
        //Efter json()-parse så returneras Promise {<pending>} (Om jag inte använder await)
        //Med await, däremot blir det riktigt och rätt. 
        let finishedList = await Promise.all(pending)
        console.log(finishedList);
  }
  
// ================== BREAK POINT =============================

async function secondTry(span){    

    for(let i=2022; i > 2022-span; i--){
        promises.push (fetch(`https://sholiday.faboul.se/dagar/v2.1/${i}`))
    }
    console.log(promises)

    let responses = [];
    console.time("apiCall");
        for(let i=0 ; i < promises.length ; i++){
            responses[i] = await Promise.resolve(promises[i]);
            console.log(responses[i])
        }
    console.timeEnd("apiCall");

    console.log(responses);

    let pending = [];
        for(let i=0; i < responses.length; i++){
            pending[i] = await responses[i].json(); //await här
            console.log(pending[i])
        }

        let finishedList = await Promise.all(pending)
        console.log(finishedList);
};






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