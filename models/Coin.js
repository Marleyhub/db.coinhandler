const db = require("./db");

const Coin = db.sequelize.define('coin',{
    exchange: {type: db.Sequelize.STRING},
    crypto: {type: db.Sequelize.STRING},
    cryptoUND: {type: db.Sequelize.INTEGER},
    USDT: {type: db.Sequelize.FLOAT}
})

module.exports = Coin