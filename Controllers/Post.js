import postSchema from '../Models/Posts.js'

//MAKE POST
export const makePost = async (req,res)=>{
    try {
        const post = new postSchema(req.body);
        const pos = await post.save()
        res.status(200).json(pos)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

//DELETE POST
export const deletePost = async (req,res)=>{
    const getPost = await postSchema.findById(req.params.id)
    if(req.body.username === getPost.username){
    try {
        const post = await getPost.delete()
        res.status(200).json('delete success')
    } catch (error) {
        res.status(500).json({message:error.message})
    }
} else{
    res.status(400).json('you can only delete your post')
}  
}
//UPDATE POST
export const updatePost = async (req,res)=>{
    try {
        const post = await postSchema.findByIdAndUpdate(req.params.id,{$set:{title:"update Title"}})
        res.status(200).json(post)
    } catch (error) {
        res.status(500).json({message:error.message})
    }   
}
//GET ONE POST
export const getPost = async (req,res)=>{
    try {
        const post = await postSchema.findById(req.params.id)
        res.status(200).json(post)
    } catch (error) {
        res.status(500).json({message:error.message})
    }   
}
//GET ALL POST
export const getAllPost = async (req,res)=>{
    const username = req.query.user;
    const catName = req.query.category;
    try {
        let post
        if (username) {
            post = await postSchema.find({username})
        }else if(catName){
            post = await postSchema.find({category:{
                $in:[catName]
            }})
        }else{
            post = await postSchema.find()
        }
        res.status(200).json(post)
    } catch (error) {
        res.status(500).json('user not found',{message:error.message})
    }   
}