const jwt = require("jsonwebtoken");
require("dotenv").config();

const JWT_SECRET = process.env.JWT_SECRET;

const tokenToVerify =
  "877e4fb66ca9c325245016e1b0273762401d8021555e460464b08b8d225c0753c5aae412a5c37b139bf02c7b29cc11f7c6607e33ae6c6236d38d8b6b94d12fc3";

jwt.verify(tokenToVerify, JWT_SECRET, (err, decoded) => {
  if (err) {
    console.error("JWT Verification Error:", err.message);
    return;
  }

  console.log("Decoded JWT payload:");
  console.log(decoded);
});
