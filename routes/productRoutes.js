const express = require('express');
const router = express.Router();
<<<<<<< HEAD
const Product = require('../models/Product');

router.get('/', async(req,res)=>{
  const products = await Product.find().sort({createdAt:-1});
  res.json(products);
});

router.post('/', async(req,res)=>{
  const product = new Product(req.body);
  await product.save();
  res.json(product);
});

router.put('/:id', async(req,res)=>{
  const updated = await Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new:true}
  );

  res.json(updated);
});

router.delete('/:id', async(req,res)=>{
  await Product.findByIdAndDelete(req.params.id);
  res.json({success:true});
});

module.exports = router;
=======

const Product = require('../models/Product');

router.get('/', async(req,res)=>{
  try{
    const products = await Product.find();
    res.json(products);
  }catch(err){
    res.status(500).json({ error: err.message });
  }
});

router.post('/', async(req,res)=>{
  try{
    const product = new Product(req.body);

    await product.save();

    res.json({
      success:true,
      product
    });

  }catch(err){
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
>>>>>>> 804555a01d7d19faf993f4f212eceaca227279e1
