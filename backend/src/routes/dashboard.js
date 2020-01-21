"use strict";
const express = require('express');
const router = express.Router();
const Post = require('../models/post');
const messModel = require('../models/message');
const multer  = require('multer');
const path = require('path');
var storage = multer.diskStorage({
        destination: function(req, file,cb){
            cb(null, path.join(__dirname, '../uploads/'));
        },
        filename: function(req, file, cb){
            cb( null, file.originalname)
         }  
})
const upload = multer({storage: storage});
const fs = require('fs');



router.get('/', (req, res) => {
    res.json('dashboard');
});

router.get('/post/:id', (req, res) => {
    res.json(req.params.id);
});

router.post('/post', upload.single('image'), (req, res, next) => {

    const bodyPost = {
        title: req.body.title,
        content: req.body.content,
        photo: req.file.filename,
    }
    const newPost = new Post( bodyPost );
    Post.create( newPost, function(err, newPost ){
        if( err )res.send(err);
        else res.json(newPost);
    });
});


router.get('/post', ( req, res ) => {
    const allPosts = Post.getAll( function( err, result ){
        if( err )throw err;
        else res.json( result );
    }) 
});

router.delete('/post/delete/:id/:photo', async (req, res)=> {
    //deleting stored image file
    let photoPath = `../uploads/${req.params.photo}`;
    await fs.unlink( path.join(__dirname, photoPath), err => {
        if(err)throw err;
        else console.log("Post deleted");
    } );

    //deleting from DB

    Post.delete( req.params.id, (err, result ) => {
        if( err )throw err;
        else res.json({message: 'Post deleted'});
    })


})



router.get('/messages', (req, res)=>{
    const result = messModel.getAll( function(err, mess)
    {
            if( err )throw err;
            else res.json(mess);
    });
})

router.delete('/messages/delete/:id', (req, res) => {
    messModel.delete( req.params.id, function(err, result){
        if(err)throw err;
        else res.json({message: 'Message deleted'});
    })
})


module.exports = router;
