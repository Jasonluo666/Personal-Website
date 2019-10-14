var express = require('express');
var router = express.Router();
const request = require('request');
const path = require('path');

const ObjectId = require('mongodb').ObjectId;
var mongoUtil = require( '../mongoUtil' );
var client = mongoUtil.getClient();

const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
// const storage = new GridFsStorage({ db: client.db("MyWebsite") });
const img_path = './public/uploads/'
const storage = multer.diskStorage({
    destination: img_path,
    filename: (req, file, cb) => {
        cb(null, 'face' + path.extname(file.originalname));
    }
});
const upload = multer({storage: storage, 
    limits:{fileSize: 1024 * 1024 * 5}, 
    fileFilter: (req, file, cb) => {
        if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
            cb(null, true);
        }
        else{
            cb(null, false);
        }
    }
});

router.get('/tasks', (req, res, next) => {
    //res.send("task api");
    
    collection = client.db("DemoDB").collection("demo_data");
    // perform actions on the collection object
    
    // search inside the collection + return JSON type
    collection.find({}).toArray(function(err, data) {
        console.log(JSON.stringify(data, null, 2));
        res.json(data);
    });
});

router.get('/chatroom/fetch', (req, res, next) => {
    //res.send("task api");
    
    collection = client.db("MyWebsite").collection("chat_room");
    // perform actions on the collection object
    
    // search inside the collection + return JSON type
    collection.find({}).toArray(function(err, data) {
        console.log(JSON.stringify(data, null, 2));
        res.json(data);
    });
});

router.post('/chatroom/push/', (req, res, next) => {
    const data = {
        _id: ObjectId(),
        user: req.body.user,
        message: req.body.message,
        time: new Date().toUTCString()
    };

    console.log(data);    
    collection = client.db("MyWebsite").collection("chat_room");
    // perform actions on the collection object
    
    collection.insertOne(data, (err, result) => {
        if(err){
            console.log(err);
        }
        else{
            res.json({'message': 'Chat message uploaded successfully'});
        }
    });
});

fs = require('fs');
router.get('/img/:img_name', (req, res, next) => {
    fs.readFile(img_path + req.params.img_name, function(err, data) {
        if (err) throw err; // Fail if the file can't be read.
        
        res.end(data); // Send the file data to the browser.
      });
});

router.post('/img/', upload.single('image'), (req, res, next) => {
    res.json({'message': 'Image uploaded successfully'});
});

router.get('/face_cognitive/*', async function(req, res, next){
    const subscriptionKey = 'a0871fb4dcac41d08f693d18af920cb8';
    const uriBase = 'https://faceapiformean.cognitiveservices.azure.com/face/v1.0/detect';
    const imageUrl = req.params[0];

    const params = {
        'returnFaceId': 'true',
        'returnFaceLandmarks': 'false',
        'returnFaceAttributes': 'age,gender,headPose,smile,facialHair,glasses,' +
            'emotion,hair,makeup,occlusion,accessories,blur,exposure,noise'
    };

    const options = {
        uri: uriBase,
        qs: params,
        body: '{"url": ' + '"' + imageUrl + '"}',
        headers: {
            'Content-Type': 'application/json',
            'Ocp-Apim-Subscription-Key' : subscriptionKey
        }
    };

    request.post(options, (error, response, body) => {
    if (error) {
        console.log('Error: ', error);
        return;
    }
    let jsonResponse = JSON.stringify(JSON.parse(body), null, '  ');
    console.log('JSON Response\n');
    console.log(jsonResponse);
    
    res.end(JSON.stringify(jsonResponse, null, 3));
    });
});

module.exports = router;