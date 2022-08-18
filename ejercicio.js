const express = require ("express");
const ejercicio = express();
const port = 3000
const path = require("path")

ejercicio.get("/",(req, res)=>{
    res.sendFile(path.join (__dirname + "/index.html"));
});

ejercicio.listen(port,()=>{
    console.log("SI FUNCIONAAAAAA, puedes ver tu pagina en el puerto", port)
});
