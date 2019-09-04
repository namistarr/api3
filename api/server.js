const express = require('express');

const productsRouter = require('../products/products-router.js');
const suppliersRouter = require('../suppliers/suppliers-router.js');

const server = express();

//global middleware
server.use(express.json());

//This will only use the productsRouter when on /products route and /suppliers route
server.use('/products', productsRouter)
server.use('/suppliers', suppliersRouter)


server.get('/', (req, res) => {
  res.status(200).json({ api: 'up' });
});


module.exports = server;