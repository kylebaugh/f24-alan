require("dotenv").config();

const DATABASE_URL = process.env.DATABASE_URL;
const Sequelize = require("sequelize");

const sequelize = new Sequelize(DATABASE_URL, {
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
