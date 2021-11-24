import { GraphQLObjectType, GraphQLNonNull, GraphQLString } from 'graphql';
import { GraphQLDateTime } from 'graphql-iso-date';

export default new GraphQLObjectType({
  name: 'CommentType',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLString)
    },
    name: {
      type: new GraphQLNonNull(GraphQLString)
    },
    content: {
      type: new GraphQLNonNull(GraphQLString)
    },
    createdAt: {
      type: new GraphQLNonNull(GraphQLDateTime)
    },
    updatedAt: {
      type: new GraphQLNonNull(GraphQLDateTime)
    },
  }
})