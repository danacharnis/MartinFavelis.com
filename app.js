const express = require ("express");

const app = express();
const userRoutes = require ("./routes/userRoutes");

app.use(express.static( 'public'));



app.listen (3000, ()=>
    console.log ("servidor escuchando en el puerto 3000 ")
)

app.use(userRoutes);