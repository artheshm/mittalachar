const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
<<<<<<< HEAD
  name:String,
  slug:String,
  description:String,
  category:String,
  emoji:String,
  image:String,
  price:Number,
  mrp:Number,
  stock:Number,
  badge:String,
  amazonLink:String,
  active:{
    type:Boolean,
    default:true
  }
},{timestamps:true});

module.exports = mongoose.model('Product', ProductSchema);
=======
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
>>>>>>> 804555a01d7d19faf993f4f212eceaca227279e1
