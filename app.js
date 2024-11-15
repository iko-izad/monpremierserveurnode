// import du frameword ExpressJs
//import express from "express";
const express = require("express");
// on crée l'application expressJs
const app = express();

/*app.use((req, res) => {
    res.json({message)})
*/

// on définit une route de type GET
app.get ("/",(req, res) => {
    res.end("akori, bonjour za serveur");
});
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




module.exports = app;