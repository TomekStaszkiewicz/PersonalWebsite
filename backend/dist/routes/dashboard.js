"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var express = require('express');

var router = express.Router();

var Post = require('../models/post');

var messModel = require('../models/message');

var multer = require('multer');

var path = require('path');

var storage = multer.diskStorage({
  destination: function destination(req, file, cb) {
    cb(null, path.join(__dirname, '../uploads/'));
  },
  filename: function filename(req, file, cb) {
    cb(null, file.originalname);
  }
});
var upload = multer({
  storage: storage
});

var fs = require('fs');

router.get('/', function (req, res) {
  res.json('dashboard');
});
router.get('/post/:id', function (req, res) {
  res.json(req.params.id);
});
router.post('/post', upload.single('image'), function (req, res, next) {
  var bodyPost = {
    title: req.body.title,
    content: req.body.content,
    photo: req.file.filename
  };
  var newPost = new Post(bodyPost);
  Post.create(newPost, function (err, newPost) {
    if (err) res.send(err);else res.json(newPost);
  });
});
router.get('/post', function (req, res) {
  var allPosts = Post.getAll(function (err, result) {
    if (err) throw err;else res.json(result);
  });
});
router["delete"]('/post/delete/:id/:photo',
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(req, res) {
    var photoPath;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            //deleting stored image file
            photoPath = "../uploads/".concat(req.params.photo);
            _context.next = 3;
            return fs.unlink(path.join(__dirname, photoPath), function (err) {
              if (err) throw err;else console.log("Post deleted");
            });

          case 3:
            //deleting from DB
            Post["delete"](req.params.id, function (err, result) {
              if (err) throw err;else res.json({
                message: 'Post deleted'
              });
            });

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
router.get('/messages', function (req, res) {
  var result = messModel.getAll(function (err, mess) {
    if (err) throw err;else res.json(mess);
  });
});
router["delete"]('/messages/delete/:id', function (req, res) {
  messModel["delete"](req.params.id, function (err, result) {
    if (err) throw err;else res.json({
      message: 'Message deleted'
    });
  });
});
module.exports = router;