const jwt = require("jsonwebtoken");
require("dotenv").config();
function jwtauth(id) {
  secretkey='jfiudhfjksdfjkskjfdjksfsdhfjksdhfj'
  const payload = {
    user: {
      id: id,
    },
  };
  return jwt.sign(payload,secretkey,{ expiresIn: "1hr" });
}
module.exports = jwtauth;