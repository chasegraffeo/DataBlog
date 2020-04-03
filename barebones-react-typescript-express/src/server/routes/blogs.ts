import * as express from "express";
import db from '../db';

const router = express.Router();


router.get("/", async (req, res) => {
    try{
        const blogs = await db.blogs.all();
        res.json(blogs)
    } catch (error) {
        console.log(error);
        res.status(500).json('My Code Sucks.');        
    }
});

 router.get("/:id", async (req, res) => {
    try{
        const blogs = await db.blogs.one(req.params.id);
        res.json(blogs);
    } catch (error) {
        console.log(error);
        res.status(500).json('My Code Sucks.');        
    }
}); 

router.post("/", async (req, res) => {
    try{
        const newBlogs = await db.blogs.post(req.body.title, req.body.content, Number(req.body.authorid));
        res.json(newBlogs);
    } catch (error) {
        console.log(error);
        res.status(500).json('My Code Sucks.');        
    }
}); 

router.put('/:id', async (req, res) => {
    try {
        const editBlog = await db.blogs.put(req.body.title, req.body.content, Number(req.params.id));
        res.json(editBlog);
    } catch (e) {
        console.log(e);
        res.status(500).json(e);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const id = Number(req.params.id)
        const deleted = await db.blogs.destroy(id);
        res.json(deleted);
    } catch (e) {
        console.log(e);
        res.status(500).json('Now you just suck');
    }
});


export default router;
