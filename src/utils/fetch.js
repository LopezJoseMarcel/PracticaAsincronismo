//Transformar la funcion  usada en el callback en una promesa

//instanciar este objeto
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;


const fetchData = (url_api) => {
    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest();
        xhttp.open('GET', url_api, true);
        xhttp.onreadystatechange = (() => { 
            if (xhttp.readyState === 4) {
                    (xhttp.status === 200) //if ternario sintaxis
                    ? resolve(JSON.parse(xhttp.responseText))
                    : reject(new Error('Error', url_api))
                }
            
        });
        xhttp.send();
    });

}   

//exportar la funcion

module.exports = fetchData;