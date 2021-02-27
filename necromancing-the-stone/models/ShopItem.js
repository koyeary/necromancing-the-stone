const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const ShopItemSchema = new Schema({
  name: {
    required: true,
    type: String
  },
  category: {
    required: true,
    type: String
  },
  image: {
    required: true,
    type: String
  },
  price: {
    required: true,
    type: Number
  }
});

module.exports = ShopItem = mongoose.model('shopItem', ShopItemSchema);