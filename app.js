// import du frameword ExpressJs
//import express from "express";
const express = require("express");
const url = require("url");
// on crée l'application expressJs
const app = express();

/*app.use((req, res) => {
    res.json({message)})
*/

// on définit une route de type GET
/*app.get ("/",(req, res) => {
    res.end("akori, bonjour za serveur");
});*/

// Middlaware 1
/*app.use((req, res, next) => {
    console.log("votre message a bien été reçu");
    next();
});

// Middlaware 2
app.use((req, res, next) =>{
    res.status(201);
});

// Middlaware 3
app.use((req, res, next) => {
   const date = new Date ();
   res.json ({
     heure : date.toLocaleTimeString(),
     typeRequest : req.method,
     reHeaders: req.headers
 });

 next();
});

// Middlaware 4
app.use((req, res) => {
    console.log("fin de Middleware!");
});*/


// route pour /accueil
app.get("/accueil", (req, res) => {
    res.end("Bienvenue a notre accueil");
});
// route pour /apropos
app.get("/apropos", (req, res) => {
    res.end("A propos de nous");
});
// route pour /services
app.get("/services", (req, res) => {
    res.end("Voici nos services!");
});
// route pour /contact
app.get("/contact", (req, res) => {
    res.end("Contactez-nous");
});

// Crée la route 
app.get("/bonjour", (req, res) => {
    res.end("Akori anao");
});

app.listen(3002, "localhost", () => {
    console.log("Serveur écoute le port 3002 sur localhost");
});

//  Route : /contact la methode POST : pour recevoir des données 
app.post("/contact", (req, res) => {
    res.end("Message reçu sur la route contact");
});

//  Route: /apropos  la methode PUT : pour mettre à jour des données
app.put("/apropos", (req, res) => {
    res.end("apropos avec mis à jour");
});

// Route: /services la methode DELETE : pour supprimer des données
app.delete("/services", (req, res) => {
    // Quand une requête DELETE est faite sur '/services', la réponse suivante est envoyée
    res.end("Service est supprimé");
});

// API

app.get ("/api/nom", (req, res) => {
    const monObjet = [{
        nom: "Omar",
        prenom: "said"
    }];
   // Retourne l'objet "monObjet" sous format JSON et retourne le code 200
    res.status(200).json(monObjet);
});

app.get("/api/url", (req, res) => {
    // je retourne une réponse de HTML et de status 200
    res.writeHead(200, {'content-type': 'text/html'});
    res.write(req.url); // Récupère l'URL passé dans la requête
    res.end();
});

// format URL : localhost:3002/?annee=2024
/* Exemple https://www.google.com/search?q=mayotte
Analyse de L'URL :
L'url de base : https://www.google.com
l'url complet avec l'API '/search' : https://www.google.com/search
l'url complet avec des paramètres. 
Les paramètres sont précédes par le point d'interrogation '?'
Le mot-clé 'q' contient la valeur 'Mayotte' ?q=mayotte
*/
app.get("/param",(req, res) =>{
    res.writeHead(200, {'contient-type' : 'text/html'});
    let param = req.query.annee;
    res.end(param);
   // let query = url.parse(req.url, true).query;
    //let = resultatAffiche = query.annee;

    //res.end(resultatAffiche);
});

module.exports = app;


