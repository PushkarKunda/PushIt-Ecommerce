const express = require("express");
const { getItems } = require("../../controllers/shop/shop-items-controller");

const router = express.Router();

router.get("/get", getItems);

module.exports = router;
