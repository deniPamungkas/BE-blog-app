import userSchema from "../Models/Users.js";
import bcrypt from "bcrypt";

const saltRounds = 10;

//REGISTER
export const register = async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPass = await bcrypt.hash(req.body.password, salt);
    const user = new userSchema({
      username: req.body.username,
      email: req.body.email, 
      password: hashedPass,
    });
    await user.save();
    res.status(200).json("Berhasil Membuat Akun");
  } catch (error) {
    res.status(500).json(error.message);
  }
};

//LOGIN
export const login = async (req, res) => {
  try {
    const user = await userSchema.findOne({ username: req.body.username });
    const validated = await bcrypt.compare(req.body.password, user.password);
    const { _id, ...lain } = user._doc;
    const us = { id: _id, ...lain }
    const { password, ...others } = us;

    !validated? res.status(400).json(`password wrong ${others.username}`):res.status(200).json(others);
  } catch (error) {
    res.status(500).json({ message: 'account not found'});
  }
};
