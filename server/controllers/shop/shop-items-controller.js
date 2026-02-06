const Item = require("../../models/Item");

const getItems = async (req, res) => {
  try {
    const items = await Item.find({});
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

module.exports = { getItems };
