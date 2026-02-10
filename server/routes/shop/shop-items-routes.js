const express = require('express');

const { getItems, getProductsDetails } = require("../../controllers/shop/shop-items-controller");

const router = express.Router();

router.get('/get', getItems);
router.get('/get/:id', getProductsDetails);

module.exports = router;