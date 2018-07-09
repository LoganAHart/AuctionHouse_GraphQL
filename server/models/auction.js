const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AuctionSchema = new Schema({
  title: { type: String },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  items: [{
    type: Schema.Types.ObjectId,
    ref: 'item'
  }]
});

AuctionSchema.statics.addItem = function(id, content) {
  const Item = mongoose.model('item');

  return this.findById(id)
    .then(auction => {
      const item = new Item({ content, auction })
      auction.items.push(item)
      return Promise.all([item.save(), auction.save()])
        .then(([item, auction]) => auction);
    });
}

AuctionSchema.statics.findItems = function(id) {
  return this.findById(id)
    .populate('items')
    .then(auction => auction.items);
}

mongoose.model('auction', AuctionSchema);
