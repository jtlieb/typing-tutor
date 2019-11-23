const S = require('sequelize')

// Connects to a local database.
const sequelize = new S('final_project_197', 'root', 'N1harnihar', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,
  port: '3306',
  logging: false
})

// Register the 'todo' model with sequelize
const Trial = sequelize.define('trial', require('./models/trial'))
const User = sequelize.define('user', require('./models/user'))

// Load the sequelize models into the mysql database
sequelize.sync().then(() => console.log('synced'))

module.exports = {
  Trial,
  User
}
