const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  customerName:String,
  customerEmail:String,
  customerPhone:String,
  address:String,
  city:String,
  state:String,
  pincode:String,
  items:Array,
  subtotal:Number,
  shipping:Number,
  discount:Number,
  total:Number,
  paymentMethod:String,
  paymentStatus:{
    type:String,
    default:'pending'
  },
  orderStatus:{
    type:String,
    default:'placed'
  }
},{timestamps:true});

module.exports = mongoose.model('Order', OrderSchema);
