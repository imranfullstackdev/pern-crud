const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./Model/db");
const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
const jwt = require("./jwt/jwtAuth");
app.use(cors());
app.use(express.json());
// get all data
app.get('/api/v1/get', async (req, res) => {
  const getdata = await pool.query(`select * from crud_login_tab`);
  res.json(getdata.rows);
  console.log(getdata.rows);
});
// post data
app.post('/api/v1/post', async (req, res) => {
  // for verifying all the users

  const Verifyuser = await pool.query(
    `select * from crud_login_tab where email=$1`,
    [req.body.email]
  );
  if (Verifyuser.rows.length > 1) {
    return res.status(401).json({ invalidUser: "Email Already Exit" });
  }
  const salt = await bcrypt.genSalt(10);
  const hasedpassword = await bcrypt.hash(req.body.password, salt);
  const postdata = await pool.query(
    `insert into crud_login_tab (email,password) values($1,$2)`,
    [req.body.email, hasedpassword]
  );
});
// edit data
app.put("/api/v1/put/:id", async (req, res) => {
  const { id } = req.params;
  const editdata = await pool.query(
    `update crud_login_tab set email=$1,password=$2 where id=$3`,
    [req.body.email, req.body.password, id]
  );
  res.json("edited");
  console.log("edited");
});
// delete data
app.delete("/api/v1/delete/:id", async (req, res) => {
  const { id } = req.params;
  const deletedata = await pool.query(
    "delete from crud_login_tab where id=$1",
    [id]
  );
  res.status(201).json({ msg: "deleted" });
});

const port = 8000;
app.listen(`${port}`, () => {
  console.log(`app is listening to ${port}`);
});
