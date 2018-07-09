const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;
const mongoose = require('mongoose');
const Auction = mongoose.model('auction');
const Item = mongoose.model('item');
const AuctionType = require('./auction_type');
const ItemType = require('./item_type');

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addAuction: {
      type: AuctionType,
      args: {
        title: { type: GraphQLString }
      },
      resolve(parentValue, { title }) {
        return (new Auction({ title })).save()
      }
    },
    addItemToAuction: {
      type: AuctionType,
      args: {
        content: { type: GraphQLString },
        auctionId: { type: GraphQLID }
      },
      resolve(parentValue, { content, auctionId }) {
        return Auction.addItem(auctionId, content);
      }
    },
    likeItem: {
      type: ItemType,
      args: { id: { type: GraphQLID } },
      resolve(parentValue, { id }) {
        return Item.like(id);
      }
    },
    deleteAuction: {
      type: AuctionType,
      args: { id: { type: GraphQLID } },
      resolve(parentValue, { id }) {
        return Auction.remove({ _id: id });
      }
    }
  }
});

module.exports = mutation;
