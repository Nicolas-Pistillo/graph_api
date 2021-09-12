import { IResolvers } from "@graphql-tools/utils";

const query : IResolvers = {

    Query: {

        hola(): string {
            return "Proyecto limpitoo";
        },
        holaConNombre(__: void, { nombre }) : string {
            return `Hola mundo con parametro: ${nombre}`;
        },
        holaConGraphQl() : string {
            return "Hola mundo desde curso de GraphQl";
        },
        testNick(): string {
            return "Texto de test";
        }

    }

}

export default query;