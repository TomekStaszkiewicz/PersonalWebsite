"use strict";
const express = require('express');
const router = express.Router();
const postModel = require('../models/post.js');
const Message = require('../models/message.js');
const jwt = require('jsonwebtoken');
const config = require('../config.js');


router.get('/blog', (req, res) => {
    const result = postModel.getAll( function(err, posts)
    {
            if( err )throw err;
            else res.json(posts);
    });
});

router.get('/post/:id', (req, res) => {
    const result = postModel.getOne( req.params.id, function( err, post ){
        if( err )throw err;
        else res.json( post );
    })
});

router.post('/message', ( req, res ) => {
    let msg = new Message(req.body.message);
    const result = Message.create( msg, function( err, msg){
        if( err )res.send(err);
        else res.json(msg);
    })
});

router.post('/login', ( req, res ) => {
    let user = req.body;
    let admin = config.admin;
    console.log( user, admin );
    if( user.login === admin.login && user.password === admin.password ){
        const token = jwt.sign( {id: user._id}, config.key, {
            expiresIn: 86400,
        } )
        res.status(200).send({ token: token });
    
    }
        else res.status(401).send(new Error( 'You are not an admin!' ));
})

module.exports = router;
