"use strict";
const db = require('../db.js');

//model declarations -> constructor, DB operations

let Post = function( post ){
    this.title = post.title;
    this.content = post.content;
    this.photo = post.photo;
    this.date = post.date;
}


Post.create = function( newPost, result ){
    db.query("Insert into posts set ?", newPost, (res, err) => {
        if( err ){
            console.error( err );
            result( err, null );
        }
        else{
            console.log(res.insertId);
            result( null, res.insertId);
        }
    })
};

Post.getOne = function( postId, result ){
    db.query("Select * from posts where id = ? ", postId, ( err, res ) => {
        if( err ){
            console.error( err );
            result( err, null );
        }
        else{
            result( null, res);
        }
    });
};

//all by desc
Post.getAll = function( result ){
    db.query("Select * from posts ORDER BY id DESC", ( err, res ) => {
        if( err ){
            console.error( err );
            result( err, null );
        }
        else{
            result( null, res);
        }
    });
}
//update
Post.update = function( postId, newPost, result ){
    db.query("UPDATE posts set ? where id=?", [newPost, postid], ( err, res ) => {
        if( err ){
            console.error( err );
            result( err, null );
        }
        else{
            result( null, res);
        }
    });
}

Post.delete = function( id, result){
    db.query("DELETE FROM posts WHERE id=?", [id], (err, res) => {
        if( err ){
            console.error( err );
            result( err, null );
        }
        else{
            result( null, res );
        }
    })
}

module.exports = Post;  