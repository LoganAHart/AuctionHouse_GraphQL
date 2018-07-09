const mongoose = require('mongoose');
const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLID,
  GraphQLInt,
  GraphQLString
} = graphql;
const Item = mongoose.model('item');

const ItemType = new GraphQLObjectType({
  name:  'ItemType',
  fields: () => ({
    id: { type: GraphQLID },
    likes: { type: GraphQLInt },
    content: { type: GraphQLString },
    auction: {
      type: require('./auction_type'),
      resolve(parentValue) {
        return Item.findById(parentValue).populate('auction')
          .then(item => {
            console.log(item)
            return item.auction
          });
      }
    }
  })
});

module.exports = ItemType;
