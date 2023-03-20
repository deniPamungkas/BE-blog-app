import { Router } from "express";
import { updateUser, deleteUser } from "../Controllers/Users.js";

const route = Router();

route.put('/updateUser/:id', updateUser)
route.delete('/deleteUser/:id',deleteUser)

export default route