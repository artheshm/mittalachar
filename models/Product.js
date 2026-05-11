const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: String,
  description: String,
  category: String,
  emoji: String,
  image: String,

  price: Number,
  mrp: Number,

  stock: {
    type: Number,
    default: 0
  },

  featured: Boolean,
  bestseller: Boolean,

  amazonLink: String,

  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Product', ProductSchema);