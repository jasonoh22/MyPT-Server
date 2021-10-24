var express = require('express');
const app = require('../app');
var router = express.Router();
const mysql = require('mysql');
const multer = require("multer");
const path = require("path");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images/");
  },
  function (req, file, cb) {
    const ext = path.extname(file.originalname);
    cb(null, path.basename(file.originalname, ext) + "-" + Date.now() + ext);
  },
});
var upload = multer({ storage: storage });
router.use(function(req, res, next){
    next();
});

const con = mysql.createConnection({
	host: 'ptdata.ceiotvbr944v.ap-northeast-2.rds.amazonaws.com',
	user: 'mypt',
	password: '12345678',
	database: 'mypt'
});

/* GET home page. */
router.post('/', function(req, res, next) {
    res.status(201).json('"messeage" : "success"'); 
  });

router.post('/calories_cal', function(req, res, next) {
    var count = req.body.count; // 1분 몇개인지
    var weight = req.body.weight;
    var userid = req.body.userid;
    var today = new Date();
    var day = now.getData();
    var total_cal = ((21 * weight)*0.0005) * count; // 1분운동한 칼로리
    let sql = 'INSERT INTO calories, day VALUES where userid=?'
    let params = [userid];
    con.query(sql , params, function(err, result){
        res.status(201).json('"messeage" : "success"'); 
    })
    
});
router.post('/mkroutine', function(req, res, next){
    res.status(201).json('"messeage" : "success"');
});

router.post('/picshare',upload.single('image'), (req, res)=>{
    let image = req.file.path;
    res.status(201).json(image);
});
module.exports = router;