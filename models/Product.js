const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
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
