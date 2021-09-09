import express from "express";
import compression from "compression";
import cors from "cors";
import colors from 'colors';
import { IResolvers } from "@graphql-tools/utils";
import { GraphQLSchema } from "graphql";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { graphqlHTTP } from "express-graphql";

const app = express();
const PORT = 2916;

const typeDefs = `
    type Query {
        hola: String!
        holaConNombre(nombre: String!): String!
        holaConGraphQl: String! 
    }
`;

const resolvers : IResolvers = {

    Query: {

        hola(): string {
            return "Hola mundo";
        },
        holaConNombre(__: void, { nombre }) : string {
            return `Hola mundo con parametro: ${nombre}`;
        },
        holaConGraphQl() : string {
            return "Hola mundo desde curso de GraphQl";
        }

    }

}

const schema : GraphQLSchema = makeExecutableSchema({
    typeDefs,
    resolvers
})

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