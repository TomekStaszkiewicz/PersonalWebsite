"use strict";

var express = require('express');

var router = express.Router();

var postModel = require('../models/post.js');

var Message = require('../models/message.js');

var jwt = require('jsonwebtoken');

var config = require('../config.js');

router.get('/blog', function (req, res) {
  var result = postModel.getAll(function (err, posts) {
    if (err) throw err;else res.json(posts);
  });
});
router.get('/post/:id', function (req, res) {
  var result = postModel.getOne(req.params.id, function (err, post) {
    if (err) throw err;else res.json(post);
  });
});
router.post('/message', function (req, res) {
  var msg = new Message(req.body.message);
  var result = Message.create(msg, function (err, msg) {
    if (err) res.send(err);else res.json(msg);
  });
});
router.post('/login', function (req, res) {
  var user = req.body;
  var admin = config.admin;
  console.log(user, admin);

  if (user.login === admin.login && user.password === admin.password) {
    var token = jwt.sign({
      id: user._id
    }, config.key, {
      expiresIn: 86400
    });
    res.status(200).send({
      token: token
    });
  } else res.status(401).send(new Error('You are not an admin!'));
});
module.exports = router;