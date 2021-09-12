import express from "express";
import compression from "compression";
import cors from "cors";
import colors from 'colors';
import schema from "./schema";
import { ApolloServer } from "apollo-server-express";
import { createServer } from "http";

const app = express();
const PORT = 2916;

//app.use('*',cors); 

const apolloServer = new ApolloServer({
    schema,
    introspection: true
});

const httpServer = createServer(app);

apolloServer.applyMiddleware({ app });

app.use(compression());

httpServer.listen(PORT,() => {

    const URL_LOCAL = colors.blue(`http://127.0.0.1:${PORT}/graphql`);

    console.log(colors.white(`Apollo server despegado en ${URL_LOCAL}`));

});