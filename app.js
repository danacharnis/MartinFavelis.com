const express = require ("express");
const path= require("path")
const app = express()


app.use(express.static( 'public'));



app.listen (3000, ()=>
    console.log ("servidor escuchando en el puerto 3000 ")
)



app.get("/", function(req, res){ 
    res.sendFile(__dirname + "/views/main/index.html")
    const rutaCompleta = path.join(__dirname, "/views/main/index.html")
    res.sendFile = (rutaCompleta)
})
