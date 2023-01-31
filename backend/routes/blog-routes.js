import express from 'express';
import {getAllBlogs,addBlog,updateBlog,getBlogbyId,deleteBlogbyId,getByUserId} from "../controllers/blog-controller" ;

const blogRouter = express.Router();

blogRouter.get("/",getAllBlogs);
blogRouter.post("/add",addBlog);
blogRouter.put("/update/:id",updateBlog);
blogRouter.get("/:id",getBlogbyId);
blogRouter.delete("/:id",deleteBlogbyId);
blogRouter.get("/user/:id",getByUserId);


export default blogRouter;