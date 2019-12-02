const S = require('sequelize')

module.exports = {
  username: { type: S.STRING, primaryKey: true },
  password: { type: S.STRING },
  speed: { type: S.INTEGER },
  numTrials: { type: S.INTEGER }
}
