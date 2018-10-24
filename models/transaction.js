'use strict';
module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define('Transaction', {
    ProductId: DataTypes.INTEGER,
    OrderId: DataTypes.INTEGER,
    receiver_name: DataTypes.STRING,
    shipping_address: DataTypes.STRING
  }, {});
  Transaction.associate = function(models) {
    // associations can be defined here
  };
  return Transaction;
};