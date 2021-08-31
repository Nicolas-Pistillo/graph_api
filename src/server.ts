import express from "express";
import compression from "compression";
import cors from "cors";
import colors from 'colors';

const app = express();
const PORT = 2916;

//app.use('*',cors);

app.use(compression());

app.listen(PORT,() => {

    const URL_LOCAL = colors.rainbow(`http://127.0.0.1:${PORT}`);

    console.log(colors.white(`Servidor corriendo correctamente en ${URL_LOCAL}`));

})

app.use('/',(req,res) => {
    
    res.send('<h1>Saludo desde Graph QL</h1>')

})

