'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      name: 'Sendy',
      email: 'msendyakbars@gmail.com',
      phone: '08111820525',
      password: 'sendy123',
      role: 'admin',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Khevin',
      email: 'muhammadkhevin@gmail.com',
      phone: '085780401630',
      password: 'khevin123',
      role: 'admin',
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Person', null)
  }
};
