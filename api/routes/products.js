const express = require('express');
const router = express.Router();

const Product = require('../models/product');

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Handling GET request to /products'
  });
});

router.post('/', (req, res, next) => {
  const product = {
    name: req.body.name,
    price: req.body.price
  };
  res.status(201).json({
    message: "Handling POST request to /products",
    createdProduct: product
  });
});

router.get('/:productID', (req, res, next) => {
  const id = req.params.productID;
  if(id === 'special') {
    res.status(200).json({
      message: "You have discovered the special ID", 
      id: id
    });
  } else {
    res.status(200).json({
      message: "You passed an ID"
    })
  }
})

router.patch('/:productID', (req, res, next) => {
  res.status(200).json({
    message: 'Updated product!'
  });
});

router.delete('/:productID', (req, res, next) => {
  res.status(200).json({
    message: 'Deleted product!'
  });
});

module.exports = router;