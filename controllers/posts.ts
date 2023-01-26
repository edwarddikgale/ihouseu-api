import Posts from '../models/Posts';
import {asyncWrapper} from '../middleware/async';
import {createCustomeApiError} from '../errors/custom-error';

const getAllPosts = asyncWrapper(
    async (req: any, res:any) =>{

        const posts = await Posts.find();
        if(!posts) throw Error('No Posts found!');
        res.status(200).json({posts});
    }
);

const getPost = asyncWrapper(async(req:any, res: any, next: any) => {
        const {id: postId} = req.params;
        const post = await Posts.findOne({_id: postId});
        if(!post){
            return next(createCustomeApiError(`A post with this id: ${postId}  has not been found`, 404));
            //return res.status(404).json({message: `A post with this id: ${postId}  has not been found`});
        }
        res.status(200).json({post});
})

const createPost = asyncWrapper(async(req:any, res: any, next: any) => {
    const newPost = new Posts(req.body);
    const post = await newPost.save();
    if(!post) {
        return next(createCustomeApiError('Could not create a new post', 404));
    }
    res.status(200).json(post);
})

const deletePost = asyncWrapper(async(req:any, res: any) => {
    const post = await Posts.findByIdAndDelete(req.params.id);
    if(!post) throw Error(`No post with id ${req.params.id} was found!`);
    res.status(200).json({success: true});
})

const updatePost = asyncWrapper(async(req:any, res: any) => {
    const post = await Posts.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true});
    if(!post) throw Error(`An error occured while updating this post ${req.params.id}`);
    res.status(200).json(post);
})


export {getAllPosts, getPost, createPost, updatePost, deletePost};