 import  typeDefs  from "./schema";  //work on npm run start when you have to use allowimpoertexstension
 import  resolvers  from "./resolver";


// import  typeDefs  from "./schema";
// import  resolvers  from "./resolver";


import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";



// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
});


// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const startServer= async()=>{
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
}

startServer();