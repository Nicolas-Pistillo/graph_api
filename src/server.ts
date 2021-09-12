import express from "express";
import compression from "compression";
import cors from "cors";
import colors from 'colors';
import { graphqlHTTP } from "express-graphql";
import schema from "./schema";
const app = express();
const PORT = 2916;

//app.use('*',cors); 

app.use(compression());

app.listen(PORT,() => {

    const URL_LOCAL = colors.blue(`http://127.0.0.1:${PORT}/graphql`);

    console.log(colors.white(`Servidor corriendo correctamente en ${URL_LOCAL}`));

})

app.use('/',graphqlHTTP({
    schema,
    graphiql: true
}))