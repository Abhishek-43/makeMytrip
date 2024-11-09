const jwt = require("jsonwebtoken");
require("dotenv").config();

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRY = process.env.JWT_EXPIRY;

const payload = {
  user: {
    id: "user_id_here",
    email: "user@example.com",
    role: "user_role_here",
  },
};

const token = jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRY });

console.log("Generated JWT token:");
console.log(token);
