import  express from 'express';
import graphqlHTTP from 'express-graphql';
import { 
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLString,
    GraphQLList,
    graphql 
} from 'graphql';
import { fakeDatabase } from './realFakeDB';


// Define the User type
const userType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    // savedPlaylists: { type: GraphQLList }
  }
});

const roomType = new GraphQLObjectType({
  name: 'Room',
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    playlist: { type: GraphQLString },
    // users: { type: GraphQLList }
  }
});

// Define the Query type
const queryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    user: {
      type: userType,
      // `args` describes the arguments that the `user` query accepts
      args: {
        id: { type: GraphQLString }
      },
      resolve: (_, {id}) => fakeDatabase.users[id]
    },
   allUsers: {
      type: userType,
      resolve: () => fakeDatabase.users
    },
    room: {
      type: roomType,
      // `args` describes the arguments that the `user` query accepts
      args: {
        id: { type: GraphQLString }
      },
      resolve: (_, {id}) => fakeDatabase.rooms[id]
    },
  })
});

const schema = new GraphQLSchema({query: queryType});

const app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');