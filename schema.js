import axios from 'axios'; 
import { 
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLString,
    GraphQLList,
    GraphQLNonNull, 
} from 'graphql';

const BASEURL = `http://localhost:3004/`;
const gimmi = (args) => axios.get(`${BASEURL}${args}`).then(r => r.data);
const post = (where, args) => axios.post(`${BASEURL}${where}`, {...args}).then(r => r.data);
const remove = (where) => axios.delete(`${BASEURL}${where}`).then(r => r.data)
const update = (where, args) => axios.patch(`${BASEURL}${where}`, {...args}).then(r => r.data)

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
      type: new GraphQLList(roomType),
      resolve: (_, args) => gimmi(`rooms/${_.activeRooms}`)
    },
    savedPlaylists: { 
      type: new GraphQLList(playlistType),
      resolve: (_, args) => gimmi(`playlists/${_.activeRooms}`)
    }
  })
});



// Root Query type
const QueryType = new GraphQLObjectType({
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

const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: () => ({
        addUser: {
            type: userType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
                email: { type: new GraphQLNonNull(GraphQLString) },
            },
            resolve: (_, { name, email }) => post('users/', { name, email }) 
        },
        removeUser: {
            type: userType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLString) },
            },
            resolve: (_, { id }) => remove('users/', { id }) 
        },
        updateUser: {
            type: userType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
                email: { type: new GraphQLNonNull(GraphQLString) },
                // activeRooms: { type: new GraphQLList(userType) },
                // savedPlaylist: { type: new GraphQLList(playlistType) }
            },
                resolve: (_, args) => update('users/', args) 
        }   
    })
})


const schema = new GraphQLSchema({
    mutation,
    query: QueryType
});
module.exports = schema;