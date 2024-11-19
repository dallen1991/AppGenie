// api/index.js

const config = require("./config");

module.exports = async (req, res) => {
  res.status(200).json({
    message: "API Index",
    entities: config.entities
  });
};
