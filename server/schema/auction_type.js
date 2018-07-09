const mongoose = require('mongoose');
const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } = graphql;
const ItemType = require('./item_type');
const Auction = mongoose.model('auction');

const AuctionType = new GraphQLObjectType({
  name:  'AuctionType',
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    items: {
      type: new GraphQLList(ItemType),
      resolve(parentValue) {
        return Auction.findItems(parentValue.id);
      }
    }
  })
});

module.exports = AuctionType;
