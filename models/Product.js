const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({

  name:String,
  slug:String,

  description:String,

  category:String,

  emoji:String,

  image:String,

  images:Array,

  price:Number,

  mrp:Number,

  stock:{
    type:Number,
    default:0
  },

  badge:String,

  amazonLink:String,

  featured:Boolean,

  bestseller:Boolean,

  active:{
    type:Boolean,
    default:true
  }

},{
  timestamps:true
});

module.exports = mongoose.model('Product', ProductSchema);
