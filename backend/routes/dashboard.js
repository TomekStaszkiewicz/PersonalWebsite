"use strict";
const express = require('express');
const router = express.Router();
const Post = require('../models/post');
const messModel = require('../models/message');
const counter = require('express-visit-counter').Loader;
const multer  = require('multer');
var storage = multer.diskStorage({
        destination: function(req, file,cb){
            cb(null, './uploads/')
        },
        filename: function(req, file, cb){
            cb( null, file.originalname)
         }  
})
const upload = multer({storage: storage});

router.get('/', (req, res) => {
    res.json('dashboard');
});

router.get('/post/:id', (req, res) => {
    res.json(req.params.id);
});

router.post('/post', upload.single('image'), (req, res, next) => {
    const imagePath = `http://localhost:${require('../config').PORT}/image/${req.file.filename}`;

    let bodyPost = {
        title: req.body.title,
        content: req.body.title,
        photo: imagePath,
    }
    let newPost = new Post( bodyPost );
    Post.create( newPost, function(err, newPost ){
        if( err )res.send(err);
        else res.json(newPost);
    });
});

router.get('/visits', async function( req, res ){
    let allVisits = await counter.getCount(); 
    res.json(allVisits);
})

router.get('/messages', (req, res)=>{
    const result = messModel.getAll( function(err, mess)
    {
            if( err )throw err;
            else res.json(mess);
    });
})


module.exports = router;
