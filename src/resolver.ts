const user = [
  {
    name: "tito",
    lbooks: "The ndabaga girl",
  },
  {
    name: "henry",
    lbooks: "bakame",
  },
];
const books = [
  {
    title: "The ndabaga girl",
    author: "tito",
  },
  {
    title: "bakame",
    author: "henry",
  },
];
const resolvers = {
  Query: {
    books: () => books,
    user: () => user,
    example() {
      return "my name is dev tito";
    },
    onebook(_:any, args:any) {
      return books.find((item) => item.title === args.title);
    },
  },
  Mutation: {
    addBook(_:any, args:any) {
      books.push({
        title: args.title,
        author: args.author,
      });
      console.log(books[0].author)
      return books;
    },
  },
  // author: {
  //   author(parent) {
  //     return user.filter((item) => item.name === parent.author);
  //   },
  // },
};
export default resolvers;
