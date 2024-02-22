const express = require('express');

const verifyToken = require('./middleware/verifyToken');
const utilisateurRoute = require('./routes/utilisateurRoute');
const blogRoute = require('./routes/blogRoute');
const structureRoute = require('./routes/structureRoute');

const app = express();
app.use(express.json());

//Appel des routes
app.use(verifyToken);
app.use('/user', userRoute);
app.use('/blog', blogRoute);
app.use('/structure', structureRoute);

const port = 3000;
app.listen(port, () => {
    console.log('Serveur démarré sur le port ${port}');
});