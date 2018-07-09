const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  auction: {
    type: Schema.Types.ObjectId,
    ref: 'auction'
  },
  likes: { type: Number, default: 0 },
  content: { type: String }
});

ItemSchema.statics.like = function(id) {
  const Item = mongoose.model('item');

  return Item.findById(id)
    .then(item => {
      ++item.likes;
      return item.save();
    })
}

mongoose.model('item', ItemSchema);
