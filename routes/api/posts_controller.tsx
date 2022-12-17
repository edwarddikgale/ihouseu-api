import express from 'express'; 
import Posts from '../../models/Posts';

const router  = express.Router();

router.post('/', async (req, res) => {
    const newPost = new Posts(req.body);
    try{
        const post = await newPost.save();
        if(!post) throw Error('Error! Could not create a new post');
        res.status(200).json(post);
    }
    catch(error){
        res.status(400).json({msg: error})
    }
});

router.get('/', async(req, res) =>{

    try{
        const posts = await Posts.find();
        if(!posts) throw Error('No Posts found!');
        res.status(200).json(posts);
    }catch(error){
        res.status(400).json({msg:error});
    }

});

export default router;