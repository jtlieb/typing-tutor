const S = require('sequelize')

module.exports = {
  username: { type: S.STRING },
  number: { type: S.INTEGER },
  charsTyped: { type: S.INTEGER }
}
