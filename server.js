 // importer le protocol http
 // requyie() permet d'importer le packege,
 // ici le package importé est http
 //import { createServer } from "http";
// importer le protocol http
const http = require('http');
const app = require('./app.js');


// Correction de la définition du port
const port = 3002; // Changement de "app.set("port , 3002");" à une variable

// le serveur est disponible sur le port 3002
const server = http.createServer(app);

 
// le seveur est disponible sur le port 3002


 // déclaraction du serveur en utilisant http


/*const server = createServer((req,res) => {
    // En terme de réponse, renvoie au client le message "Bonjour"
    // pour renvoyer le message de réponse, res utilise la méthode end()
    res.end("Bonjour Omar,je suis le serveur.");
});*/

// Utilisation de la variable port
server.listen(port, () => {
    const date = new Date();
    console.log(date.toLocaleDateString(), '' , date.toLocaleTimeString(), " - Le serveur est activé au port :", port);
});

