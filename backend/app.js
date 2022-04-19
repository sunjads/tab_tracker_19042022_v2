const express = require("express");

const morgan = require("morgan");

//creation d'un serveur express pour une app basique
const app = express();

//enregistre toutes les requêtes passées au serveur(sécurité)
app.use(morgan("combined"));

//middlewares executés par le serveur
//midd generale = appliqué à toutes les routes
// ajouter objets header aux reponses (Cross Origin Resource Sharing) et permet à l'app d'acceder à l'api
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});
//transformer le corps/ la data d'une requete post/patch/put et l'expose dans le req.body( = le rend en objet js utilisable)
app.use(express.json());

//une fois la requête recue, renvoie un obj JS avec le message suivant
/*app.use((req, res, next) => {
  res.json({ message: "Votre requête a bien été reçue !" });
  next();
});*/
app.use("/register", (req, res, next) => {
  res.json({
    message: `Hello ${req.body.email}.Votre requete a bien été enregistrée je crois. Have fun! `,
  });
});
module.exports = app;
