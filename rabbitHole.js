




const getDataRegularCall = async (prevYears) => {
    console.time("regularCall");
    const currentYear = new Date().getFullYear();
    const days = [];
    
    for (let year = currentYear; year >= currentYear - prevYears; year--){
        const response = await fetch(`https://sholiday.faboul.se/dagar/v2.1/${year}`);
        const data = await response.json();    
        days.push(...data.dagar)
    }

    console.log(days)
    console.timeEnd("regularCall");
};

//getDataRegularCall(30); //ca 2,6sek

const getDataPromiseAll = async (prevYears) => {
    console.time("promiseAll");
    const currentYear = new Date().getFullYear();
    const promises = [];

    for (let year = currentYear; year >= currentYear - prevYears; year--){
        promises.push(fetch(`https://sholiday.faboul.se/dagar/v2.1/${year}`));
    }
    const responses = await Promise.all(promises);

    const data = [];
    for (const response of responses) {
        data.push(response.json());
    }
    const result = await Promise.all(data);
    console.log(result);

    console.timeEnd("promiseAll");
};

getDataPromiseAll(30); //ca 1,0sek