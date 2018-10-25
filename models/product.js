'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    color: DataTypes.STRING,
    size: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.INTEGER,
    stock: DataTypes.INTEGER
  }, {});
  Product.associate = function (models) {
    Product.belongsToMany(models.Tag, { through: models.Product_tag, foreignKey: 'ProductId', otherKey: 'TagId' })
  };
  return Product;
};