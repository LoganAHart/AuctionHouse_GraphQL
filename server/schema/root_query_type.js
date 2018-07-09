const mongoose = require('mongoose');
const graphql = require('graphql');
const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLNonNull } = graphql;
const AuctionType = require('./auction_type');
const ItemType = require('./item_type');
const Item = mongoose.model('item');
const Auction = mongoose.model('auction');

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    auctions: {
      type: new GraphQLList(AuctionType),
      resolve() {
        return Auction.find({});
      }
    },
    auction: {
      type: AuctionType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parentValue, { id }) {
        return Auction.findById(id);
      }
    },
    item: {
      type: ItemType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parnetValue, { id }) {
        return Item.findById(id);
      }
    }
  })
});

module.exports = RootQuery;
