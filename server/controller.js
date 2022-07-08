require("dotenv").config();

const { CONNECTION_STRING } = process.env;
const Sequelize = require("sequelize");

const sequelize = new Sequelize(CONNECTION_STRING, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});

module.exports = {
  createLog: (req, res) => {
    const { date, miles } = req.body;

    let newLog = {
      date: date,
      miles: miles,
    };

    console.log(newLog)
    
    sequelize.query(`
    INSERT INTO user_log (date, miles)
    VALUES ('${date}', '${miles}')
    `);
  },
};
