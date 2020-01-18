"use strict";
const db = require('../db.js');

let Message = function( message ){
    this.email = message.email;
    this.content = message.content;
}



Message.create = function( newMessage, result ){
    db.query("Insert into messages set ?", newMessage, (res, err) => {
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

Message.getAll = function( result ){
    db.query("SELECT * from messages ORDER BY id DESC", ( err, res) => {
        if( err ){
            console.error( err );
            result( err, null );
        }
        else{
            console.log(res);
            result( null, res);
        }
    })
}

Message.delete = function( id, result ){
    db.query("DELETE FROM messages WHERE id = ?", [id], (err, res) => {
        if(err){
            console.log("Error ", err);
            result(err, null);
        }
        else{
            result( null, res );
        }
    })
}

module.exports = Message;  