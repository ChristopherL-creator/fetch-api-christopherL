//  CHIAMATA FETCH 

fetch('./data-file.json').then(responseCallBack, manageError).then(resultCallBack, manageError); 

// fetch('./data_file.json').then(responseCallBack).then(resultCallBack).catch(manageError);
//  oggetto Promise "promette" che evento risultato possa arrivare, 
//  con .then dico cosa fare all'evento risultato (tra le parentsi); 
//  accade anche primse di then: 
// accade evento risposta(fetch), e quindi il proprio evento risultato(then),  

function responseCallBack (response){ 
    console.log((response));
    return response.json()
}
//  response può essere gestita in due tipi: se JSON, possiamo chiedere a 
//  risposta di tradurlo direttamente, tipo JSON.Parse();

function resultCallBack (result){ 
    console.log(result);
}

function manageError(error) {
    console.log(error);
}
//  chiamo server, e ricevo response code di risposta; 

// console.log('prima');

// fetch('./data_file.json').then((resp) => resp.json().then((res) => console.log('result', res)) 



// //  tuttavia ha caricato i "dopo" dopo l'evento; perchè è più veloce 
// //  se ne metto molti di più, il contrario 

// setTimeout(logDopo, 0); 

// setTimeout(logDopo, 10);   

// setTimeout(logDopo, 100); 

// setTimeout(logDopo, 1000);  

// setTimeout(logDopo, 10000); 

// function logDopo() {
//     console.log(('dopo'));
// }