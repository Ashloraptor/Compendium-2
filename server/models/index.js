
// const Sequelize = require('sequelize');
// const sequelize = require('../config/connection');

// const User = require('./User');
// const Plant = require('./Plant');

// // Define associations here
// // For example, if a user can have many plants:
// User.hasMany(Plant, {
//   foreignKey: 'userId',
//   onDelete: 'CASCADE'
// });
// Plant.belongsTo(User, {
//   foreignKey: 'userId'
// });

// // This is where you would import and associate other models as needed.

// const db = {
//   sequelize,
//   Sequelize,
//   User,
//   Plant,
//   // Include other models here
// };

// module.exports = db;

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/yourDatabaseName', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Import all models
const User = require('./User');

// Export the models
module.exports = { User };

const User = require('./User');

module.exports = { User };

