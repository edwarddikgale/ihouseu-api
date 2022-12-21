import express from 'express'; 
import { readdirSync } from 'fs';
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

router.get('/:id', async(req, res) => {
    try{
        const post = await Posts.findById(req.params.id);
        if(!post) throw Error('A post with this id has not been found');
        res.status(200).json(post);
    }
    catch(error){
        return res.status(400).json({message: error});
    }
});

router.patch('/:id', async (req, res) => {
    try{
        const post = await Posts.findByIdAndUpdate(req.params.id, req.body);
        if(!post) throw Error(`An error occured while updating this post ${req.params.id}`);
        res.status(200).json(post);
    }
    catch(error){
        res.status(400).json({message: error});
    }
});

router.delete('/:id', async(req, res) => {
    try{
        const post = await Posts.findByIdAndDelete(req.params.id);
        if(!post) throw Error(`No post with id ${req.params.id} was found!`);
        res.status(200).json({success: true});
    }
    catch(error){
        res.status(400).json({message: error});
    }
});

export default router;