import userSchema from "../Models/Users.js";
import bcrypt, { genSalt } from "bcrypt";

const saltRounds = 10;

//UPDATE
export const updateUser = async (req, res) => {
  if (req.body.id == req.params.id) {
    try {
      if(req.body.password){
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt)
      }
      let resp = await userSchema.findByIdAndUpdate(
        req.body.id,
        {
          $set: req.body,
        }, 
        { new: true }
      );
      res.status(200).json(resp);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  } else {
    res.status(500).json("you can only update your account");
  }
};

//DELETE
export const deleteUser = async (req, res) => {
  try {
    const deletedUsers = await userSchema.findById(req.params.id);
      try {
        await deletedUsers.delete();
        res.status(200).json("sukses menghapus");
      } catch (error) {
        res.status(500).json({ message: error.message });
      } 
  } catch (error) {
    res.status(500).json("eror");
  }
};
