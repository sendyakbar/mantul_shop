'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product_tag = sequelize.define('Product_tag', {
    TagId: DataTypes.INTEGER,
    ProductId: DataTypes.INTEGER
  }, {});
  Product_tag.associate = function(models) {
    // associations can be defined here
  };
  return Product_tag;
};