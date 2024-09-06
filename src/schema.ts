
 const typeDefs = `#graphql
  type Book {
    title: String
    author: users
    }
  type users{
   name:String
   lbooks:[Book]
         }
         
  type Query {
    books: [Book]
    user : [users]
    example:String!
    onebook(title:String):Book
  }
type Mutation {
  addBook(title: String, author: String): [Book]
}
type author{
  users:users
}
`;

export default typeDefs;