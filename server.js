const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
<<<<<<< HEAD
const helmet = require('helmet');
const compression = require('compression');
const rateLimit = require('express-rate-limit');
=======
>>>>>>> 804555a01d7d19faf993f4f212eceaca227279e1
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());
<<<<<<< HEAD
app.use(helmet());
app.use(compression());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
});

app.use(limiter);

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

app.get('/', (req,res)=>{
  res.send('Pickle Gallery Backend Running');
});

app.use('/api/products', require('./routes/productRoutes'));
app.use('/api/orders', require('./routes/orderRoutes'));
app.use('/api/admin', require('./routes/adminRoutes'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
  console.log(`Server running on ${PORT}`);
});
=======

mongoose.connect(process.env.MONGO_URI)
.then(()=> console.log('MongoDB Connected'))
.catch(err => console.log(err));

app.get('/', (req,res)=>{
  res.send('Backend Running');
});

app.get('/api/test', (req,res)=>{
  res.json({
    success:true,
    message:'API working'
  });
});

app.use('/api/products', require('./routes/productRoutes'));

app.listen(5000, ()=>{
  console.log('Server running');
});
>>>>>>> 804555a01d7d19faf993f4f212eceaca227279e1
