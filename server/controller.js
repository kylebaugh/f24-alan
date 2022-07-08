require("dotenv").config();

// const { CONNECTION_STRING } = process.env;
const Sequelize = require("sequelize");

const sequelize = new Sequelize('postgres://bncgueebunhejl:cf081818161a74eb74a8afc91dfd1adc3ffe6a43a0e235244834edacdaaf8187@ec2-54-159-22-90.compute-1.amazonaws.com:5432/d8309k1tsd7aiv', {
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
