import express from 'express';
import {getAllBlogs,addBlog,updateBlog,getBlogbyId} from "../controllers/blog-controller" ;

const blogRouter = express.Router();

blogRouter.get("/",getAllBlogs);
blogRouter.post("/add",addBlog);
blogRouter.put("/update/:id",updateBlog);
blogRouter.get("/:id",getBlogbyId);


export default blogRouter;