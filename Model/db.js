const POOL = require("pg").Pool;
const Pool = new POOL({
  user: "postgres",
  database: "crud_db",
  port: "5432",
  password: "lmvit123",
});
module.exports = Pool;
