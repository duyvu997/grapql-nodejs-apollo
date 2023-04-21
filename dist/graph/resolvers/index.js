// import createUser from './createUser';
const books = [
    {
        title: 'The Awakening',
        author: 'Kate Chopin',
    },
    {
        title: 'City of Glass',
        author: 'Paul Auster',
    },
];
const resolvers = {
    Mutation: {
    // create/User
    },
    Query: {
        books: () => books,
    },
};
export default resolvers;
//# sourceMappingURL=index.js.map