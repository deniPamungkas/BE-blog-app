import { Router } from "express";
import { makePost, deletePost,getAllPost,getPost,updatePost } from "../Controllers/Post.js";

const route = Router();

route.post('/', makePost)
route.delete('/deletePost/:id', deletePost)
route.get('/:id', getPost)
route.get('/all/posts', getAllPost)
route.put('/updatePost/:id', updatePost)


export default route