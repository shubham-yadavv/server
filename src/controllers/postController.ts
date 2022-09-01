import {Request, Response, NextFunction} from 'express';
import Post from '../models/postModel';

exports.getPosts = async (req: Request, res: Response) => {
    try {
        const posts = await Post.find();

    res.status(200).json({
      status: "succes",
      results: posts.length,
      data: {
        posts,
      },
    });
        
    } catch (e) {
        console.log(e);
    res.status(400).json({
      status: "fail",
    });
    }   
}


exports.getOnePost = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const post = await Post.findById(req.params.id);
  
      res.status(200).json({
        status: "succes",
  
        data: {
          post,
        },
      });
    } catch (e) {
      res.status(400).json({
        status: "fail",
      });
    }
  };
  
  exports.createPost = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const post = await Post.create(req.body);
  
      res.status(200).json({
        status: "succes",
  
        data: {
          post,
        },
      });
    } catch (e) {
      console.log(e);
      res.status(400).json({
        status: "fail",
      });
    }
  };
  
  exports.updatePost = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });
  
      res.status(200).json({
        status: "succes",
  
        data: {
          post,
        },
      });
    } catch (e) {
      res.status(400).json({
        status: "fail",
      });
    }
  };
  
  exports.deletePost = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const post = await Post.findByIdAndDelete(req.params.id);
  
      res.status(200).json({
        status: "succes",
      });
    } catch (e) {
      res.status(400).json({
        status: "fail",
      });
    }
  };
  

