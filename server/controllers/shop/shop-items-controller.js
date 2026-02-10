const Product = require("../../models/Product");

const getItems = async (req, res) => {
  try {

    const {category = [], brand = [], sortBy = "price-lowtohigh"} = req.query
    const filters = {};

    if(category.length){
        filters.category = {$in: category.split(",")};
    }

    if(brand.length){
        filters.brand = {$in: brand.split(",")};
    }


    let sort = {}
    switch (sortBy){
      case "price-lowtohigh":
        sort.price = 1
        break;
      case "price-hightolow":
        sort.price = -1
        break;
      case "title-atoz":
        sort.title =  1
        break;
      case "title-ztoa":
        sort.title = -1
        break;
      default:
        sort.price = 1
    }


    const items = await Product.find(filters).sort(sort);
    res.status(200).json({
      success: true,
      data: items,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Some error occured",
    });
  }
};

const getProductsDetails = async(req, res) => {
  try {
    const {id} = req.params;
    const product = await Product.findById(id);

    if(!product){
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.status(200).json({
      success: true,
      data: product,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Some error occured",
    });
  }
}

module.exports = { getItems, getProductsDetails };
