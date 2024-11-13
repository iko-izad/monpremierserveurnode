 // importer le protocol http
 // requyie() permet d'importer le packege,
 // ici le package importé est http
 const http = require('http');

 // déclaraction du serveur en utilisant http
const server = http.createServer((req,res) => {
    res.end("Bonjour Omar,je suis le serveur.");
});

// le seveur est disponible sur le port 3000
server.listen(3000);