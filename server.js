import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema'


const app = express();

//middleware
app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,
}));

//listen
app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');