/**Service Worker nos permite crear aplicaciones web progresivas (PWA: Progresive Web Aplication), las cuales se
 * manejan a nivel de cache y siempre se tienen que trabajar con el protocolo HTTPS.
*/
//Forma de saber que serviceWorker existe en el navegador.
if("serviceWorker" in navigator){
    //accedemos al objeto serviceWorker del navegador para registrar nuestro script, el cual en este caso sera
    //serviceWorker.js
    navigator.serviceWorker.register("serviceWorker.js");
}
//Otra forma de saber que serviceWorker existe.
/*if(navigator.serviceWorker){
    console.log("si existe");
}*/