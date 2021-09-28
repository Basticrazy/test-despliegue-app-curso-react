/**Para hacer un service worker correcto, tenemos que cachear todos los elementos de URL de la pagina.*/
const CACHE_ELEMENTS = [
    "./", //->Hacemos referencia al index (o pagina principal).
    "https://unpkg.com/react@17/umd/react.production.min.js",
    "https://unpkg.com/react-dom@17/umd/react-dom.production.min.js",
    "https://unpkg.com/@babel/standalone/babel.min.js",
    "estilo.css",
    "components/Contador.js",
    "index.js"
];

//Hacemos mencion al a la version y nombre del cache.
const CACHE_NAME = "v2_cache_curso_react";

//self es igual a this.
//install es la primera parte del ciclo de vida del serviceWorker, el cual es cuando se registra, se instala, y una 
//realizado lo anterior, se dispara este listener, el cual programaremos para que haga la instalacion del cache.
self.addEventListener("install", (event) =>{

    //.waitUntil = esperar hasta.
    event.waitUntil(
        //con caches hace referencia a los cache del navegador.
        //.open() nos devuelve una promesa.
        caches.open(CACHE_NAME).then( (cache) => {
            cache.addAll(CACHE_ELEMENTS).then( () => { //->.addAll() agrega todos los elementos del arreglo. add() agrega solo el primero.
                self.skipWaiting();
            }).catch( (error) => {
                console.log(error);
            });
        })
    )

});


self.addEventListener("activate", (event) =>{

    const cacheWhiteList = [CACHE_NAME]; //Copiamos los elementos del cache actual, a traves de su name.

    event.waitUntil(
       caches.keys().then( (cacheNames) =>{
           //Metodo para eliminar el cache antiguo.
            return Promise.all(cacheNames.map( (cacheName) => {
                return cacheWhiteList.indexOf(cacheName) === -1 && caches.delete(cacheName);
            }))
       }).then( () => {self.clients.claim()})
    )

});

self.addEventListener("fetch", (event) =>{

    event.respondWith( 
        caches.match(event.request).then( (res) =>{
           return res ? res : fetch(event.request);
        })
    )
   

});