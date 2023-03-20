import { Router } from "express";
import {makeCat, getAllCats} from "../Controllers/Category.js"

const route = Router();

route.post('/',makeCat)
route.get('/',getAllCats)

export default route