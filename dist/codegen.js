const config = {
    overwrite: true,
    schema: "./src/graph/schema.graphql",
    generates: {
        "./src/generated/graphql.ts": {
            plugins: ["typescript", "typescript-resolvers", "typescript-document-nodes"]
        },
        // "./graphql.schema.json": {
        //   plugins: ["introspection"]
        // }
    }
};
export default config;
