import express from 'express';
import graphqlHTTP from 'express-graphql';
import axios from 'axios'; 
import { 
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLString,
    GraphQLList,
    graphql 
} from 'graphql';

const BASEURL = `http://localhost:3004/`;
const gimmi = (args) => axios.get(`${BASEURL}${args}`).then(r => r.data)

const songType = new GraphQLObjectType({
  name: 'Song',
  fields: () => ({
    title: { type: GraphQLString },
    url: { type: GraphQLString },
    thumbnail: { type: GraphQLString },
  })
});

const playlistType = new GraphQLObjectType({
  name: 'Playlist',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    songs: { type: new GraphQLList(songType) }
  })
});

const roomType = new GraphQLObjectType({
  name: 'Room',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    playlist: { 
      type: playlistType,
      resolve: (_, args) => gimmi(`playlists/${_.playlist}`)
      },
    users: { 
      type: new GraphQLList(userType),
      resolve: (_, args) => gimmi(`rooms/${_.id}/users`)
     }
  })
});

const userType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    activeRooms: { 
      type: roomType,
      resolve: (_, args) => gimmi(`rooms/${_.activeRooms}`)
    }
  })
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
      resolve: (_, {id}) => gimmi(`users/${id}`)
    },
   allUsers: {
      type: new GraphQLList(userType),
      resolve: (_, args) => gimmi(`users/`)
    },
    room: {
      type: roomType,
      args: {
        id: { type: GraphQLString }
      },
      resolve: (_, {id}) => gimmi(`rooms/${id}`)
    },
    playlist: {
      type: playlistType,
      args: {
        id: { type: GraphQLString }
      },
      resolve: (_, {id}) => gimmi(`playlists/${id}`)
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