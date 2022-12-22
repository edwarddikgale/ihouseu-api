import Posts from '../models/Posts';

const getPosts = async (req: any, res:any) =>{
    try{
        const posts = await Posts.find();
        if(!posts) throw Error('No Posts found!');
        res.status(200).json(posts);
    }catch(error){
        res.status(400).json({msg:error});
    }
}

const getPost = async(req:any, res: any) => {
    try{
        const post = await Posts.findById(req.params.id);
        if(!post) throw Error('A post with this id has not been found');
        res.status(200).json(post);
    }
    catch(error){
        return res.status(400).json({message: error});
    }
}

const createPost = async(req:any, res: any) => {
    const newPost = new Posts(req.body);
    try{
        const post = await newPost.save();
        if(!post) throw Error('Error! Could not create a new post');
        res.status(200).json(post);
    }
    catch(error){
        res.status(400).json({msg: error})
    }
}

const deletePost = async(req:any, res: any) => {
    try{
        const post = await Posts.findByIdAndDelete(req.params.id);
        if(!post) throw Error(`No post with id ${req.params.id} was found!`);
        res.status(200).json({success: true});
    }
    catch(error){
        res.status(400).json({message: error});
    }
}

const updatePost = async(req:any, res: any) => {
    try{
        const post = await Posts.findByIdAndUpdate(req.params.id, req.body);
        if(!post) throw Error(`An error occured while updating this post ${req.params.id}`);
        res.status(200).json(post);
    }
    catch(error){
        res.status(400).json({message: error});
    }
}


export {getPosts, getPost, createPost, updatePost, deletePost};