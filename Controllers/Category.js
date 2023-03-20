import CatSchema from '../Models/Category.js'

export const makeCat = async(req,res)=>{
    const saveCat = new CatSchema(req.body);
    try {
        await saveCat.save();
        res.status(200).json("berhasil menambah kategori")
    } catch (error) {
        res.status(500).json("eror"+error)
    }
}

export const getAllCats = async(req,res)=>{
    try {
        const cats = await CatSchema.find()
        res.status(200).json(cats)
    } catch (error) {
        res.status(500).json(error)
    }
}