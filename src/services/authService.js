import User from "../Model/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const SECRET = "mysecret";

const register = (email, password) => {
  return User.create({ email, password });
};

const login = async (email, password) => {
  // FIXME: User exist

  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("User doesn't exist!");
  }

  const isValid = await bcrypt.compare(password, user.password);

  // FIXME: Unhappy path
  if (!isValid) {
    throw new Error("Password is not Valid!");
  }

 const  payload = {
    _id: user._id,
    email,
  };
  const token = jwt.sign(payload, SECRET, { expiresIn: "2h" });

  // FIXME: Create token
  return token;
};

export default {
  register,
  login,
};
