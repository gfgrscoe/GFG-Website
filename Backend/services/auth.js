// services/auth.js
import jwt from "jsonwebtoken";

function createtokenforuser(user) {
  const payload = {
    _id: user._id,
    email: user.email,
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "7d",  
  });

  return token;
}

function validatetoken(token) {
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    return payload;
  } catch (err) {
    return null;  
  }
}

export { createtokenforuser, validatetoken };
