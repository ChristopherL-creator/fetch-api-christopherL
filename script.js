//  CHIAMATA FETCH  

fetch('https://62860d1c96bccbf32d6e2b93.mockapi.io/dinosaurs')
.then(responseCallBack)
.then(resultCallBack)
.catch(manageError);

// fetch('./data_file.json').then(responseCallBack, manageError).then(resultCallBack, manageError); 

// fetch('./data_file.json').then(responseCallBack).then(resultCallBack).catch(manageError);
//  oggetto Promise "promette" che evento risultato possa arrivare, 
//  con .then dico cosa fare all'evento risultato (tra le parentsi); 
//  accade anche primse di then: 
// accade evento risposta(fetch), e quindi il proprio evento risultato(then),  

function responseCallBack (response){ 
    console.log(('response', response));
    return response.json()
}
//  response può essere gestita in due tipi: se JSON, possiamo chiedere a 
//  risposta di tradurlo direttamente, tipo JSON.Parse();

function resultCallBack (result){ 
    console.log('result', result); 
    const array = convertResultInArrayOfDinosaurs(result); 
    console.log('array', result); 
    displayDinosaurs(array);
} 

function convertResultInArrayOfDinosaurs(result) {
    
    const arrayOfDinosaurs = result.map(obj => Dinosaur.fromObj(obj)); 
    for (const obj of result) {
        const dinosaur = Dinosaur.fromObj(obj);
        arrayOfDinosaurs.push(dinosaur); 
    } 

    return arrayOfDinosaurs;
}

function displayDinosaurs(arrayOfDinosaurs) {
    const arrayContainer = document.createElement('div'); 

    for (let i = 0; i < arrayOfDinosaurs.length; i++) {
        const dinosaur = arrayOfDinosaurs[i]; 

        const dinosaurContainer = document.createElement('div'); 
        
        const dinosaurImgContainer = document.createElement('div');
        const dinosaurImg = document.createElement('img');
        dinosaurImgContainer.classList.add('dino-img');
        dinosaurImgContainer.appendChild(dinosaurImg);
        dinosaurContainer.appendChild(dinosaurImgContainer); 

        const dinosaurNameContainer = document.createElement('div');
        const dinosaurNameNode = document.createTextNode('Name: ' + dinosaur.name + ';'); 
        dinosaurNameContainer.classList.add('dino-txt');
        dinosaurNameContainer.appendChild(dinosaurNameNode); 
        dinosaurContainer.appendChild(dinosaurNameContainer);
        
        const dinosaurFamilyContainer = document.createElement('div');
        const dinosaurFamilyNode = document.createTextNode('Family: ' + dinosaur.family + ';'); 
        dinosaurFamilyContainer.classList.add('dino-txt');
        dinosaurFamilyContainer.appendChild(dinosaurFamilyNode);
        dinosaurContainer.appendChild(dinosaurFamilyContainer);

        const dinosaurTimelineContainer = document.createElement('div');
        const dinosaurTimelineNode = document.createTextNode('Timeline: ' + dinosaur.timeline + ' mya.' ); 
        dinosaurTimelineContainer.classList.add('dino-txt');
        dinosaurTimelineContainer.appendChild(dinosaurTimelineNode);
        dinosaurContainer.appendChild(dinosaurTimelineContainer);

        arrayContainer.appendChild(dinosaurContainer);
    } 

    document.body.appendChild(arrayContainer);
}

function manageError(error) {
    console.log(error);
}
//  chiamo server, e ricevo response code di risposta; 

// console.log('prima');

// fetch('./data_file.json').then((resp) => resp.json().then((res) => console.log('result', res)) 



//  tuttavia ha caricato i "dopo" dopo l'evento; perchè è più veloce 
//  se ne metto molti di più, il contrario 

// setTimeout(logDopo, 0); 

// setTimeout(logDopo, 10);   

// setTimeout(logDopo, 100); 

// setTimeout(logDopo, 1000);  

// setTimeout(logDopo, 10000); 

// function logDopo() {
//     console.log(('dopo'));
// } 

const ajax = new XMLHttpRequest(); 

ajax.onReadyStateChange = onReadyStateChangeCallBack; 

ajax.open('get', './data_file.json', this); 

//  inizia la parte senza catch:
// ajax.send(); 

// function onReadyStateChangeCallBack() {
//     if (this.readyState === 4) {
//         console.log(this.readyState);
//         if (this.status === 200) {
//             console.log(this.responseText); 
//             const array = JSON.parse(this.responseText); 
//             console.log(array);
//         } else {
//             console.log('server not reached');
//         }
//     }
// }

function onReadyStateChangeCallBack() {
    console.log(this.readyState);
}

